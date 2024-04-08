import React, { useState } from "react";
import eventimg from "../assets/event.webp";
import Events from "./Events";
import ShowEvents from "./ShowEvents";

const LandingPage = () => {
  const [eventPage, setEventPage] = useState(false);

  const showEventsHandler = () => {
    setEventPage(true);
  };
  return (
    <div className="bg-gray-900 h-screen">
      {eventPage ? (
        <ShowEvents />
      ) : (
        <div>
          {" "}
          <div>
            {" "}
            <nav className="h-16 bg-zinc-900">
              <button
                onClick={showEventsHandler}
                className="bg-blue-400 shadow-xl m-4 p-2 rounded-xl hover:bg-blue-900 hover:shadow-md hover:text-white"
              >
                Show Events
              </button>
              <button className="bg-yellow-600 shadow-xl m-4 p-2 rounded-xl hover:bg-yellow-400 hover:shadow-md">
                Connect Wallet
              </button>
            </nav>
          </div>
          <div className="flex items-center">
            <h1 className="m-4 text-3xl font-semibold italic text-blue-600 border-b-4 border-blue-600 py-2 px-4 rounded-lg">
              Welcome to Event page
            </h1>
            <img
              src={eventimg}
              className="h-[400px] w-[600px] rounded-xl shadow-xl ml-[400px] mt-[50px]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
