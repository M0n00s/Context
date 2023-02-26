import { useContext } from "react";
import { userContext } from "../context/UserContext";

export const HomePage = () => {
  const { user } = useContext(userContext);

  return (
    <>
      <div>HomePage {user?.name}</div>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
    </>
  );
};
