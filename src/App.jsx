import { useEffect, useState } from "react";
import Header from "./compontents/Header";
import TodoComputed from "./compontents/TodoComputed";
import TodoCreate from "./compontents/TodoCreate";
import TodoFilter from "./compontents/TodoFilter";
import TodoList from "./compontents/TodoList";
import { data } from "autoprefixer";

// const initialStateTodos = [
//   { id: 1, title: "Completar curso Javascript", completed: true },
//   { id: 2, title: "Ir al gimnasio", completed: false },
//   { id: 3, title: "Hacer la compra", completed: false },
//   { id: 4, title: "Limpiar la casa", completed: false },
// ];

//inicializamos con lo que nos devuelva el localStorage
const initialStateTodos = JSON.parse(localStorage.getItem("todos"));
const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);
  const [filter, setFilter] = useState("all"); //creamos un estado para filtrar, por defecto dejamos all

  //Guardo todos en localstorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //creo una funcion para crear los todos, que le pasaré al componente por props
  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      commpleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  //updete o change state todo
  const changeStateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  //remove todo
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //counter of itens not completed
  //esto me devuelve un numero, hago un lengh de los elementos del array que ha creado al filtrar
  // todos los todos que no esta completados
  const computedItems = todos.filter((todo) => !todo.completed).length;

  //clear completed
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  //filtrar
  // const filterTodos = () => {
  //   switch (filter) {
  //     case "all":
  //       return todos;
  //     case "active":
  //       return todos.filter((todo) => !todo.completed);
  //     case "complete":
  //       return todos.filter((todo) => todo.completed);
  //     default:
  //       return todos;
  //   }
  // };

  //alternativa al switch creo una biblioteca
  const filterTodos = (filter) => {
    const filters = {
      all: todos,
      active: todos.filter((todo) => !todo.completed),
      complete: todos.filter((todo) => todo.completed),
    };
    return filters[filter];
  };

  return (
    <div
      className="bg-[url('./assets/images/bg-mobile-light.jpg')]
      dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]
    bg-contain bg-no-repeat bg-gray-100 min-h-screen dark:bg-gray-800 transition-all duration-1000
    md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]"
    >
      <Header />

      <main className="container mx-auto px-4 mt-5 md:max-w-2xl">
        <TodoCreate createTodo={createTodo} />
        <TodoList
          todos={filterTodos(filter)}
          removeTodo={removeTodo}
          changeStateTodo={changeStateTodo}
        />
        <TodoComputed
          computedItems={computedItems}
          clearCompleted={clearCompleted}
        />
        <TodoFilter setFilter={setFilter} filter={filter} />
      </main>

      <footer className="text-center mt-8 dark:text-gray-200">
        Drag and drop to reorder list
      </footer>
    </div>
  );
};

export default App;
