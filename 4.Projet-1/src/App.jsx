import { nanoid } from "nanoid";
import { useState } from "react";
import ListItem from "./components/ListItem";

function App() {
  // state
  const [todoList, setTodoList] = useState([
    {
      id: nanoid(8),
      content: "item 1",
    },
    {
      id: nanoid(8),
      content: "item 2",
    },
    {
      id: nanoid(8),
      content: "item 3",
    },
  ]);

  const [todo, setTodo] = useState("");
  const [showValidation, setShowValidation] = useState(false);

  //comportements
  const handleDeleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo === "") {
      setShowValidation(true);
      return;
    }

    setTodoList([...todoList, { id: nanoid(8), content: todo }]);
    setTodo("");
    setShowValidation(false);
  };

  // render
  return (
    <div className="h-screen bg-slate-900">
      <div className="max-w-4xl mx-auto pt-20 px-6">
        <h1 className="text-3xl text-slate-100 mb-4">La To-do Liste</h1>

        <form onSubmit={handleSubmit} className="mb-8">
          <label htmlFor="todo-item" className="text-slate-50">
            Ajouter une chose á faire
          </label>
          <input
            value={todo}
            onChange={handleChange}
            type="text"
            className="mt-1 block w-full rounded"
          />
          {showValidation && (
            <p className="text-red-500">Ajoutez du contenu à votre tache</p>
          )}
          <button className="mt-4 py-2 px-2 bg-slate-50 rounded min-w-[120px]">
            Ajouter
          </button>
        </form>

        <ul>
          {todoList.length === 0 && (
            <li className="text-slate-50 text-md">{`Pas d'items à afficher...`}</li>
          )}
          {todoList.length > 0 &&
            todoList.map((item) => (
              <ListItem
                key={item.id}
                itemData={item}
                deleteTodo={handleDeleteTodo}
              />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
