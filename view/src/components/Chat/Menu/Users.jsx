import React, { useEffect, useState } from "react";
import { getUser } from "../../../services/api";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let response = await getUser();
      setUsers(response);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Users</h1>
    </div>
  );
};

export default Users;
