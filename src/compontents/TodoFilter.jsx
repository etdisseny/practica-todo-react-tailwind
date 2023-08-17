const TodoFilter = ({ setFilter, filter }) => {
  return (
    <section className="container mx-auto  mt-8 ">
      <div className="bg-white p-4 rounded-md flex justify-center gap-4 dark:bg-gray-700 transition-all duration-1000">
        <button
          className={`hover:text-blue-600 dark:text-gray-400 ${
            filter === "all" && "text-blue-600 dark:text-blue-400"
          }`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`hover:text-blue-600 dark:text-gray-400 ${
            filter === "active" && "text-blue-600 dark:text-blue-400"
          }`}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={`hover:text-blue-600 dark:text-gray-400 ${
            filter === "complete" && "text-blue-600 dark:text-blue-400"
          }`}
          onClick={() => setFilter("complete")}
        >
          Completed
        </button>
      </div>
    </section>
  );
};
export default TodoFilter;
