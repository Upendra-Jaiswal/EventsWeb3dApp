import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Events from "./components/Events";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <button className="bg-green-600 shadow-xl m-4 p-2 rounded-xl hover:bg-green-400 hover:shadow-md ">
          Create Event here
        </button>
      </nav>
      <Events />
    </>
  );
}

export default App;
