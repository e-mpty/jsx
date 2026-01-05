//Import Remix icons
import {RiGhost2Line, RiGhost3Fill} from "@remixicon/react"

function App() {
  //The simple console log 
  console.log("Hello World")
  return (
    //A div using Tailwind classes 
    <div className="px-8 flex flex-col justify-center items-center">
      {/* A div using Tailwind classes and daisy UI classes at the same time  */}
      {/* Lato font for the titles  */}
      <h1 className="font-Lato text-5xl text-center font-extrabold m-2 text-base-content flex items-center gap-1.5">
        {/* RemixIcon components with their props   */}
        <RiGhost3Fill size={48} className="text-base-content"/> 
        React Basic SetUp
        <RiGhost2Line size={48} className="text-base-content/60"/>
      </h1>
      {/* Space Grotesk Font for the body non italic  */}
      <p className="font-Grotesk text-base-content text-xl my2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      {/* Space Mono font for the body italic  */}
      <p className="font-Mono text-base-content  italic my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button className="btn btn-neutral">Click Me</button>
    </div>
  )
}

export default App
