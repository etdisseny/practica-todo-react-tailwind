import CrossIcon from "./icons/CrossIcon";

const TodoItem = ({ todo }) => {
  const { id, title, completed } = todo;
  return (
    <article className="flex gap-4 border-b border-b-gray-300">
      <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
      <p className="text-gray-600 grow">{title}</p>
      <button cl>
        <CrossIcon />
      </button>
    </article>
  );
};
export default TodoItem;
