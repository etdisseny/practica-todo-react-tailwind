import CrossIcon from "./compontents/icons/CrossIcon";
import MoonIcon from "./compontents/icons/MoonIcon";
const App = () => {
  return (
    <div
      className="bg-[url('./assets/images/bg-mobile-light.jpg')]
    bg-contain bg-no-repeat bg-gray-100 min-h-screen"
    >
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">
            TODO
          </h1>
          <button>
            <MoonIcon fill="#fff" />
          </button>
        </div>
        <form className="bg-white rounded-md overflow-hidden p-4 flex gap-4 items-center mt-8">
          <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
          <input
            className="w-full text-gray-400 outline-none"
            type="text"
            placeholder="Create a new todo..."
          />
        </form>
      </header>
      <main className="container mx-auto px-4 mt-5">
        <div className="bg-white rounded-md [&>article]:p-4">
          <article className="flex gap-4 border-b border-b-gray-300">
            <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
            <p className="text-gray-600 grow">
              Complete javascript course blueweb
            </p>
            <button cl>
              <CrossIcon />
            </button>
          </article>

          <section className="p-4 flex justify-between">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear Completed</button>
          </section>
        </div>
      </main>
      <section className="container mx-auto px-4 mt-8">
        <div className="bg-white p-4 rounded-md flex justify-center gap-4">
          <button className="hover:text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>
      <section className="text-center mt-8">
        Drag and drop to reorder list
      </section>
    </div>
  );
};

export default App;
