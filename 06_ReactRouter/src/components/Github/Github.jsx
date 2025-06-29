import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="text-black p-4  text-center">
      <h1 className="text-3xl font-bold">Username : {data.login}</h1>
      <img
        src={data.avatar_url}
        alt="Github Picture"
        width={300}
        height={300}
        className="mx-auto mt-5"
      />
      <div className="text-center mt-5 m-auto font-semibold text-2xl w-1/2"> {data.bio}</div>
      <div className="flex flex-row justify-center  mt-5">
        <h5 className="  text-lg h-fit w-fit bg-orange-700 text-white px-4 py-2 rounded-lg font-semibold">Followers : {data.followers}</h5>
        <h5 className=" text-lg h-fit w-fit bg-orange-700 text-white px-4 py-2 rounded-lg font-semibold ml-10">Following : {data.following}</h5>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch('https://api.github.com/users/yuvrajsingh8048')
  return res.json()
}
