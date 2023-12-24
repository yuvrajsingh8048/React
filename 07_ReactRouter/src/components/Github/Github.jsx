import React from "react";
import { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/yuvrajsingh8048")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="bg-gray-300 text-black p-4  text-center">
      <h1 className="text-3xl font-bold">Username : {data.login}</h1>
      <img
        src={data.avatar_url}
        alt="Github Picture"
        width={300}
        height={300}
        className="mx-auto mt-5"
      />
      <div className="text-center mt-5 font-semibold text-2xl"> {data.bio}</div>
      <div className="flex flex-row justify-center  mt-5">
        <h5 className=" text-xl mr-10">Followers : {data.followers}</h5>
        <h5 className=" text-xl">Following : {data.following}</h5>
      </div>
    </div>
  );
}

export default Github;
