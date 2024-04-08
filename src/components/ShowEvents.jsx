import { useState } from "react";

import Events from "./Events";

import CreateEvent from "./CreateEvent";

function ShowEvents() {
  const [showEvents, setShowEvents] = useState(false);

  const showEventsHandler = () => {
    setShowEvents(true);
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex-grow">
          {showEvents ? (
            <CreateEvent />
          ) : (
            <div>
              {" "}
              <div>
                {" "}
                <nav className="h-16 bg-gray-300">
                  <div>
                    {" "}
                    <button
                      onClick={showEventsHandler}
                      className="bg-green-600 shadow-xl m-4 p-2 rounded-xl hover:bg-green-400 hover:shadow-md"
                    >
                      Create Event here
                    </button>
                  </div>
                </nav>
              </div>
              <Events />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ShowEvents;
