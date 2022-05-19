import Panel from "./components/Panel/Panel";

const todoList1 = [
  {
    id: 1,
    task: "Finish writing doc",
    complete: false,
  },
  {
    id: 2,
    task: "And another task",
    complete: true,
  },
  {
    id: 3,
    task: "Something else",
    complete: false,
  },
];

function App() {
  return (
    <div className="App">
      <div className="grid">
        <Panel data={todoList1} title="Todo" />
        <Panel title="Someday" />
      </div>
    </div>
  );
}

export default App;
