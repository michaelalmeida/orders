import { redirect } from "react-router-dom";
import { useUserContext } from "../Hooks/useUser";

export const useLoader = () => {
  const { isAuth } = useUserContext();

  if (!isAuth) {
    return redirect("/login");
  }
};
