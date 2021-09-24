import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import List from "./components/List/List";
import store from "./utils/store";
import StoreApi from "./utils/storeApi";
import InputContainer from "./components/Input/InputContainer";
import { makeStyles } from "@material-ui/core/styles";
import { DragDropContext } from "react-beautiful-dnd";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    background: "gray",
    width: "100%",
    overflowY: "auto",
  },
}));
function App() {
  const classes = useStyle();
  const [data, setData] = useState(store);

  //TODO: 寫入資料到store.js
  //新增卡片
  const addMoreCard = (title, listId) => {
    console.log(title, listId);
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title,
    };

    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };
  //TODO: 寫入資料到store.js
  //新增列表
  const addMoreList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title,
      cards: [],
    };
    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
    };
    setData(newState);
  };
  //更新列表的title
  const updateListTitle = (title, listId) => {
    const list = data.lists[listId];
    list.title = title;

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };
  //設定放下的動作
  const onDragEnd = (result) => {
    //取得放下時的資料
    const { destination, source, draggableId } = result;
    console.log("目的", destination, "來源", source, "抓id", draggableId);
    //如果放在可放區外
    if (!destination) {
      return;
    }
    //取得資料中的來源的列表與目的的列表
    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
    //取得當下卡的資料(使用了filter回傳陣列所以取第0)
    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId
    )[0];

    //同列間移動的處裡邏輯
    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: destinationList,
        },
      };
      setData(newState);
    }
    //不同列間的處裡
    else {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList,
        },
      };
      setData(newState);
    }
  };
  return (
    <StoreApi.Provider value={{ addMoreCard, addMoreList, updateListTitle }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={classes.root}>
          {data.listIds.map((listId) => {
            const list = data.lists[listId];
            return <List list={list} key={listId} />;
          })}
          <InputContainer type="list" />
        </div>
      </DragDropContext>
    </StoreApi.Provider>
  );
}

export default App;
