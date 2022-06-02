import { useState } from "react";

import AddUsers from "./components/Users/AddUsers";
import ListOfUser from "./components/Users/ListOfUser";

import "./styles.css";

export default function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsers) => {
      return [
        ...prevUsers,
        {
          name: uName,
          age: uAge,
          id: Math.random().toString()
        }
      ];
    });
  };

  const deleteHandler = (id) => {
    setUsersList((prevList) => {
      const updatedList = prevList.filter((user) => user.id !== id);
      return updatedList;
    });
  };

  return (
    <div className="App">
      <AddUsers userHandler={addUserHandler} />
      <ListOfUser users={usersList} deleteUser={deleteHandler} />
    </div>
  );
}
