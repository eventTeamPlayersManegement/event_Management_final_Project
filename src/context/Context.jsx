import { createContext, useEffect, useState } from "react";
import { checkProfile } from "../library/api.jsx";
import config from "../content/data.json";
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
      console.log(res);
      const userId = res.user.sub.split("|")[1];
      const userRes = await fetch(`api/users/sub/` + userId);
      const user = await userRes.json();

      if (!user) {
        const res2 = await fetch(`/api/users`, {
          method: "POST",
          body: JSON.stringify({
            sub: userId,
            data: res.user,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        const data2 = await res2.json();

        setData({ user: res, id: data2._id });
      } else {
        setData({ user: res, id: user._id });
      }
    });
  }, []);
  return (
    <EventContext.Provider value={[data, setData]}>
      {children}
    </EventContext.Provider>
  );
}

export default Context;
