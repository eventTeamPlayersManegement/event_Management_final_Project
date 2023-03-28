import { createContext, useEffect, useState } from "react";
import { checkProfile } from "../library/api.jsx";
export const EventContext = createContext();

/*
we are checking with checkProfile wich User is logged, 
userId = uniqwé id from auth0 wich we have splited on |  to get sub  value for our user 
userRes → check if our user in dataBase is, if not create one, 
*/
function Context({ children }) {
  const [data, setData] = useState({});
  const [theme, setTheme] = useState("light");
  const filtred = JSON.parse(sessionStorage.getItem("offers")) || [];

  const toggleModus = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    checkProfile().then(async (res) => {
      const userId = res.user.sub.split("|")[1];
      const userRes = await fetch(`/api/users/sub/` + userId);
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
        setData({ user: res, id: data2._id, dbuser: user, filtred });
      } else {
        setData({ user: res, id: user._id, dbuser: user, filtred });
      }
    });

    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  return (
    <EventContext.Provider
      value={[data, setData, { theme, setTheme, toggleModus }]}
    >
      {children}
    </EventContext.Provider>
  );
}

export default Context;
