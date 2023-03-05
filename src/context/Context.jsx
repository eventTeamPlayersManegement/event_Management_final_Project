import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { checkProfile } from "../library/api.jsx";

export const EventContext = createContext();

/*
we are checking with checkProfile wich User is logged, 
userId = uniqwé id from auth0 wich we have splited on |  to get sub  value for our user 
userRes → check if our user in dataBase is, if not create one, 
*/
function Context({ children }) {
  const [data, setData] = useState({});
  useEffect(() => {
    checkProfile().then(async (res) => {
      const userId = res.user.sub.split("|")[1];
      const userRes = await fetch(
        "http://localhost:3000/api/users/sub/" + userId
      );
      const user = await userRes.json();
      console.log(user);
      if (!user) {
        await fetch("http://localhost:3000/api/users", {
          method: "POST",
          body: JSON.stringify({
            sub: userId,
            data: res.user,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",

            "Access-Control-Allow-Origin": "*",
          },
          credentials: "include",
        });
      }
      setData({ user: res, id: user._id });
    });
  }, []);
  return (
    <EventContext.Provider value={[data, setData]}>
      {children}
    </EventContext.Provider>
  );
}

export default Context;
