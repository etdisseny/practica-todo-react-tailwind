import { useEffect, useRef, useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";
const initialMode = localStorage.getItem("theme") === "dark";
const Header = () => {
  const [darkMode, setDarkMode] = useState(initialMode);
  const headerRef = useRef(null);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      //aqui añado algo por referencia al header y siempre añadir current
      //headerRef.current.classList.add("bg-gray-900");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      //headerRef.current.classList.remove("bg-gray-900");
    }
  }, [darkMode]);

  //IMPORTANTE: el class lo añadimos a la parte de html, no a la parte del virtual dom
  //que controla react. Por eso podemos añadir el document.documentElement...
  //en caso de querer seleccionar algun elemento del dom, que esta dentro de
  //REact, o sea lo que renderizamos en App, usariamsos el useRer para seleccionar
  //algun elemento por ejemplo si queremos cambiar algo del header (uso useRef arriva)
  return (
    <header
      className="container mx-auto px-4 pt-8 md:max-w-2xl"
      ref={headerRef}
    >
      <div className="flex justify-between">
        <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">
          TODO
        </h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <IconSun /> : <IconMoon fill="#fff" />}
        </button>
      </div>
    </header>
  );
};
export default Header;
