import React, { useContext, useEffect, useState } from "react";

interface User {
  name: string;
  username: string;
}

interface IUserContext {
  user: User;
  clearUser?: () => void;
  isAuth?: boolean;
  setUser?: (user: User) => void;
}

const userDefaultValue = {
  name: "",
  username: "",
};

const defaultState = {
  user: userDefaultValue,
  clearUser: () => {},
  setUser: () => {},
  isAuth: false,
};

const UserContext = React.createContext<IUserContext>(defaultState);

const useUser = () => {
  const [user, setUser] = useState<User>(userDefaultValue);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const clearUser = () => {
    setUser(userDefaultValue);
  };

  useEffect(() => {
    if (user.name) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [user]);

  return {
    clearUser,
    setUser,
    isAuth,
    user,
  };
};

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const user = useUser();

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
