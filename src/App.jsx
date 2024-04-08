import { useState } from "react";

import Events from "./components/Events";

import CreateEvent from "./components/CreateEvent";
import ShowEvents from "./components/ShowEvents";
import LandingPage from "./components/LandingPage";

function App() {
  const [showEvents, setShowEvents] = useState(false);
  const showEventsHandler = () => {
    setShowEvents(true);
  };
  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;
