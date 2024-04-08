import React from "react";

const CreateEvent = () => {
  const submitEvent = () => {
    //console.log("event created");
  };
  return (
    <div>
      <div className="flex justify-center items-center mt-10">
        <form className="flex flex-col items-center bg-blue-100 p-10 rounded-xl shadow-lg">
          <h3>Create Event here</h3>
          <input
            type="text"
            className="bg-slate-200 m-2 rounded-lg h-9 placeholder:text-ml-3"
            placeholder="Name"
          />
          <input
            type="text"
            className="bg-slate-200 m-2 rounded-lg h-9"
            placeholder="Place"
          />
          <button
            className="bg-blue-200 p-1 m-4 rounded-lg"
            onClick={submitEvent}
          >
            Submit Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
