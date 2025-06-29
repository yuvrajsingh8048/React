import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <>Please, login now</>;
  return <>Welcome {user.username.toUpperCase()}</>;
}

export default Profile;
