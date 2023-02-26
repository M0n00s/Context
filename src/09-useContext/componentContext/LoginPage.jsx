import React from "react";
import { useContext } from "react";
import { userContext } from "../context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(userContext);
  return (
    <>
      <div>LoginPage</div>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>

      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({ id: 123, name: "pedro", email: "pedro@gmail.com " })
        }
      >
        establecer usuario
      </button>
      <button className="btn btn-danger" onClick={() => setUser({})}>
        eliminar usuario
      </button>
    </>
  );
};
