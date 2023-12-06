import React from "react";
import { app } from "../../firebase";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";

const GoogleOauth = () => {
  const handleGoogleAuthentication = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      console.log("GOOGLEAUTH", result);
      //   const apiAuthData = {
      //     name: result?.user?.displayName,
      //     email: result?.user?.email,
      //     photo: result?.user?.photoURL,
      //   };
    } catch (error) {}
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
