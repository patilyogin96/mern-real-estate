import React from "react";
import { app } from "../../firebase";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { open_api } from "../../utils/network";
import { useNavigate } from "react-router-dom";
import { signInFail, signInSuccess } from "../../redux/user/userSlice";

const GoogleOauth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGoogleAuthentication = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);

      const apiAuthData = {
        name: result?.user?.displayName,
        email: result?.user?.email,
        photo: result?.user?.photoURL,
      };

      const signInResponse = await open_api.post(
        `v1/auth/google-login`,
        apiAuthData
      );
      console.log("GOOGLEAUTH", signInResponse);
      if (signInResponse?.status === 200) {
        dispatch(signInSuccess(signInResponse?.data));
        navigate("/");
        return;
      }
      dispatch(signInFail(signInResponse?.data?.message));
    } catch (error) {
      dispatch(signInFail(error?.message));
    }
  };

  return (
    <button
      onClick={handleGoogleAuthentication}
      type="button"
      className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
    >
      Continue with google
    </button>
  );
};

export default GoogleOauth;
