import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { app } from "../../../config/server";
import { useUserContext } from "./useUser";
import { useUserEmailVerification } from "./useUserEmailVerification";

export const useUserCreation = () => {
  const auth = getAuth(app);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const { sendEmailVerification } = useUserEmailVerification();
  const { setUser } = useUserContext();

  useEffect(() => {
    if (user && setUser) {
      sendEmailVerification();

      setUser({
        email: user.user?.email || "",
        emailVerified: user.user?.emailVerified || false,
      });
    }
  }, [user]);

  return {
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  };
};
