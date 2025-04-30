import React, { useEffect, useState } from "react";
import { getUser } from "../../../services/api";
import { Box, styled } from "@mui/material";
import { useAuth } from "../../../Context/AccountProvider";

const Component = styled(Box)`
  height: 81vh;
  overflow-y: scroll;
`;

const Users = () => {
  const [users, setUsers] = useState([]);
  const { account, setPerson, person } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      let response = await getUser();
      if (response.length) {
        setUsers(response);
      }
    };
    fetchData();
  }, []);

  const getUsers = async (user) => {
    setPerson(user);
  };

  return (
    <div>
      <Component>
        {users.map(
          (user) =>
            user.sub !== account.sub && (
              <Box
                key={user._id}
                onClick={() => getUsers(user)}
                className="flex gap-2 py-4 px-6 border-b mx-2  shadow-sm cursor-pointer hover:bg-[#f2f2f2]"
              >
                <img
                  src={user.picture}
                  alt="user"
                  className="w-[50px] h-[50px] rounded-full"
                />
                <Box>
                  <h2 className="font-semibold">{user.name}</h2>
                  <p className="text-[13px]">{user.email}</p>
                </Box>
              </Box>
            )
        )}
      </Component>
    </div>
  );
};

export default Users;
