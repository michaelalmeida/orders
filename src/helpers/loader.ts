import { redirect } from "react-router-dom";
import { useUser } from "../Hooks/useUser/useUser";

export const useLoader = () => {
  const { isAuth } = useUser();

  if (!isAuth) {
    return redirect("/login");
  }
};
