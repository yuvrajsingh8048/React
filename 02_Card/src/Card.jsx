import React from "react";

function Card({ machine, about, btnText, url }) {
  return (
    <>
      <div class="w-[300px] rounded-md border mb-15 mt-10">
        <img
          src={url}
          alt="Laptop"
          className="h-[200px] w-full rounded-md object-contain p-2"
        />
        <div class="p-4">
          <h1 class="text-lg font-semibold">About {machine}</h1>
          <p class="mt-3 text-sm text-white-600">{about}</p>
          <button
            type="button"
            class="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black font-bold"
          >
            {btnText}
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
