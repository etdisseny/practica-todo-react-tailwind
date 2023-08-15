import { useState } from "react";
import Header from "./compontents/Header";
import TodoComputed from "./compontents/TodoComputed";
import TodoCreate from "./compontents/TodoCreate";
import TodoFilter from "./compontents/TodoFilter";
import TodoList from "./compontents/TodoList";
import { data } from "autoprefixer";

const initialStateTodos = [
  { id: 1, title: "Completar curso Javascript", completed: true },
  { id: 2, title: "Ir al gimnasio", completed: false },
  { id: 3, title: "Hacer la compra", completed: false },
  { id: 4, title: "Limpiar la casa", completed: false },
];
const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  //creo una funcion para crear los todos, que le pasaré al componente por props
  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      commpleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div
      className="bg-[url('./assets/images/bg-mobile-light.jpg')]
    bg-contain bg-no-repeat bg-gray-100 min-h-screen"
    >
      <Header />

      <main className="container mx-auto px-4 mt-5">
        <TodoCreate createTodo={createTodo} />
        <TodoList todos={todos} />
        <TodoComputed />
        <TodoFilter />
      </main>

      <footer className="text-center mt-8">
        Drag and drop to reorder list
      </footer>
    </div>
  );
};

export default App;
