import React from "react";

export default function EventsInfo({ eventsInfo }) {
  return (
    <section className="bg-[#f2f4fb] py-20">
      <div className="text-center">
        <h1 className="font-PlayFairDisplay m-3 text-[30px] font-medium">
          Новости
        </h1>
        <div className="font-sans w-[50%] mx-auto text-gray-500">
          Свежие новости каждый день
        </div>
      </div>
      <div className="flex justify-between w-[80%] mx-auto gap-10 mt-10 overflow-hidden pb-10 flex-wrap">
        {eventsInfo.map((event) => (
          <div
            key={event.id}
            className="w-[30%] overflow-hidden shadow-sm card hover:shadow-lg duration-200 bg-white"
          >
            <img className="w-full color-white" src={event.url} alt="" />
            <div className="px-6 py-4">
              <p className="text-gray-400 text-base">{event.date}</p>
              <div className="text-xl mb-2 font-PlayFair font-medium  hover:text-[#ffba5a] transition-colors duration-300">
                {event.title}
              </div>
              <p className="text-gray-500 text-base">{event.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
