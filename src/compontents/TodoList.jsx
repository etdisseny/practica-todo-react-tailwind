import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, changeStateTodo }) => {
  return (
    <div className="bg-white overflow-hidden rounded-t-md mt-8 [&>article]:p-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          changeStateTodo={changeStateTodo}
        />
      ))}
    </div>
  );
};
export default TodoList;
