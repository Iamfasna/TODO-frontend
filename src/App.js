import ToDo from "./components/ToDo";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>

        <div className="top">
          <input type="text" placeholder="Add ToDos...."></input>

          <div className="add">Add</div>

        </div>
        <div className="list">
          <ToDo text={'hi'} />
        </div>


      </div>
    </div >
  );
}

export default App;
