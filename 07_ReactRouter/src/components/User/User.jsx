import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return (
    <>
      <h1 className="text-center text-3xl bg-gray-200 text-black font-bold p-5">
        User : {userId}
      </h1>
    </>
  );
}

export default User;
