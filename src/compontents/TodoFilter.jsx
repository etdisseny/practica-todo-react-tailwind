const TodoFilter = ({ setFilter, filter }) => {
  return (
    <section className="container mx-auto  mt-8">
      <div className="bg-white p-4 rounded-md flex justify-center gap-4">
        <button
          className={`hover:text-blue-600 ${
            filter === "all" && "text-blue-600"
          }`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`hover:text-blue-600 ${
            filter === "active" && "text-blue-600"
          }`}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={`hover:text-blue-600 ${
            filter === "complete" && "text-blue-600"
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
