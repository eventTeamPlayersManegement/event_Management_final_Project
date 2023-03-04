import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { checkProfile } from "../library/api.jsx";

export const EventContext = createContext();

function Context({ children }) {
  const [data, setData] = useState({});
  useEffect(() => {
    checkProfile().then((res) => {
      setData(res);
    });
  }, []);
  return (
    <EventContext.Provider value={[data, setData]}>
      {children}
    </EventContext.Provider>
  );
}

export default Context;
