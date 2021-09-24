import React from "react";
import { Paper, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./Title";
import Card from "../Card";
import InputContainer from "../Input/InputContainer";
import { Droppable } from "react-beautiful-dnd";

const useStyle = makeStyles((theme) => ({
  root: {
    minWidth: "300px",
    backgroundColor: "#EBECF0",
    marginLeft: theme.spacing(1),
  },
  cardContainer: { marginTop: theme.spacing(4) },
}));
export default function List({ list }) {
  const classes = useStyle();
  return (
    <div>
      <Paper className={classes.root}>
        <CssBaseline />
        <Title title={list.title} listId={list.id} />
        <Droppable droppableId={list.id}>
          {(porvided) => (
            <div
              ref={porvided.innerRef}
              {...porvided.droppableProps}
              className={classes.cardContainer}
            >
              {list.cards.map((card, index) => {
                return <Card card={card} index={index} key={card.id} />;
              })}
              {porvided.placeholder}
            </div>
          )}
        </Droppable>
        <InputContainer type="card" listId={list.id} />
      </Paper>
    </div>
  );
}
