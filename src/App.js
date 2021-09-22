import "./App.css";
import Board from "./components/Board";
import ItemCard from "./components/ItemCard";

function App() {
  return (
    <div className="App">
      <main className="flexbox">
        <Board id="board-1" className="board">
          <ItemCard id="card-1" className="card" draggable="true">
            <p>card one</p>
          </ItemCard>
        </Board>

        <Board id="board-2" className="board">
          <ItemCard id="card-2" className="card" draggable="true">
            <p>card two</p>
          </ItemCard>
        </Board>
      </main>
    </div>
  );
}

export default App;
