//Import Remix icons
import { RiGhost2Line, RiGhost3Fill } from "@remixicon/react";
import { useEffect, useState } from "react";

function App() {
  //The simple console log
  console.log("Hello World");
  const [theme, setTheme] = useState("light");
  /**
   * Change the color theme of the page
   */
  const toggleChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  /**
   * Update the data-theme attribute of the page to apply the exact theme when it changes
   */
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    //A div using Tailwind classes
    <div className="px-8 flex flex-col justify-center items-center">
      {/* A div using Tailwind classes and daisy UI classes at the same time  */}
      {/* Lato font for the titles  */}
      <h1 className="font-Lato text-5xl text-center font-extrabold m-2 text-base-content flex items-center gap-1.5">
        {/* RemixIcon components with their props   */}
        <RiGhost3Fill size={48} className="text-base-content" />
        React Basic SetUp
        <RiGhost2Line size={48} className="text-base-content/60" />
      </h1>
      {/* Space Grotesk Font for the body non italic  */}
      <p className="font-Grotesk text-base-content text-xl my2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      {/* Space Mono font for the body italic  */}
      <p className="font-Mono text-base-content  italic my-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <Card title="Simple Card" currentTheme={theme} changeTheme={toggleChange}>
        <button onClick={toggleChange} className="btn btn-secondary">
          Switch to {theme === "light" ? "dark" : "light"}
        </button>
      </Card>
    </div>
  );
}

//Simple Card Component
function Card(props) {
  const buttonColor = props.currentTheme === "light" ? "warning" : "primary";

  return (
    <>
      <div className="card bg-base-100 w-96 m-4 border border-base-300">
        <div className="card-body">
          <h1 className="text-3xl text-base-content font-Lato font-bold">
            {props.title}
          </h1>
          <p className="text-base-content font-Grotesk">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae,
            minima.
          </p>
          <p className="card border border-base-300 bg-base-200 p-2 text-base-content/60 font-Mono italic">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae,
            minima.
          </p>
          {props.children}
          <button
            onClick={props.changeTheme}
            className={`btn btn-${buttonColor}`}
          >
            Switch to {props.currentTheme === "light" ? "dark" : "light"}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
