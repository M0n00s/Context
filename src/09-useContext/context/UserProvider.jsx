import { useEffect, useState } from "react";
import { userContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user) || {});
  }, [user]);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};
