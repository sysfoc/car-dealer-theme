import { useState } from "react";
import {
  FaApple,
  FaMobileAlt,
  FaTimes,
  FaLock,
  FaShippingFast,
  FaUndoAlt,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from "@/firebase";
import { fetchSignInMethodsForEmail, linkWithCredential, signInWithPopup } from "firebase/auth";
import { signInSuccess } from "@/store/slices/userSlice";
import { useDispatch } from "react-redux";
import { FaGithub } from "react-icons/fa6";
import { GithubAuthProvider } from "firebase/auth";
import { FirebaseError } from "firebase/app";



interface SignInModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignInModal: React.FC<SignInModalProps> = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  
  const currentUser = auth.currentUser;
  console.log("Current User:", currentUser);

  const handleAliExpressLogin = () => {
    const clientId = process.env.NEXT_PUBLIC_ALIEXPRESS_CLIENT_ID!;
    const redirectUri = encodeURIComponent(process.env.NEXT_PUBLIC_ALIEXPRESS_REDIRECT_URI!);
    
    window.location.href = `https://auth.aliexpress.com/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=email`;
  };
  


  const gitLogin = async () => {
    try {
      const githubProvider = new GithubAuthProvider();
      const result = await signInWithPopup(auth, githubProvider);
      const credential = GithubAuthProvider.credentialFromResult(result);
      const user = result.user;
  
      if (!credential) {
        throw new Error("GitHub credential is missing.");
      }
  
      if (auth.currentUser && auth.currentUser.uid !== user.uid) {
        await linkWithCredential(auth.currentUser, credential);
        alert("GitHub linked successfully!");
        dispatch(signInSuccess(auth.currentUser));
        setIsOpen(false);
      } else {
        dispatch(signInSuccess(user));
        setIsOpen(false);
      }
  
      
      const idToken = await user.getIdToken();
      const res = await fetch("/api/auth/github", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken }),
      });
  
      const data = await res.json();
      console.log("Backend response:", data);
    } catch (error: unknown) {
      const err = error as FirebaseError;
  
      console.error("Error object:", err);
  
      if (err.code === "auth/account-exists-with-different-credential") {
        const email = err.customData?.email as string;
        const pendingCred = GithubAuthProvider.credentialFromError(err);
  
        if (email && pendingCred) {
          const methods = await fetchSignInMethodsForEmail(auth, email);
  
          if (methods.includes("password")) {
            alert(
              `This email is already used with Email/Password login. Please sign in using your email first and then link GitHub from profile settings.`
            );
          } else if (methods.includes("google.com")) {
            alert(
              `This email is already used with Google login. Please sign in with Google first and then link GitHub.`
            );
          } else {
            alert(`This email is used with another login method: ${methods.join(", ")}`);
          }
        }
      }
    }
  };
  
    
  

  const handleGoogleSignIn = async () => {
    try {
      provider.setCustomParameters({ prompt: "select_account" });
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const res = await fetch("api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        }),
      });
      if (!res.ok) {
        throw new Error("Failed to save user to database");
      }

      const { displayName, email, photoURL } = user;
      console.log("User Info:", user);
      console.log("Name:", displayName);
      console.log("Email:", email);
      console.log("Photo URL:", photoURL);

      const userData = await res.json();
      dispatch(signInSuccess(userData));
      setIsOpen(false);
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  const handleEmailLogin = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/auth/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        console.error("Auth error:", data.message);
        return;
      }
      dispatch(signInSuccess(data.user));
      setIsOpen(false);
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };


  if (!isOpen) return null;

  return (
    <div className="fixed top-80 shadow-lg inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[500px] p-6 rounded-lg shadow-lg relative">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes size={24} />
        </button>
        <h2 className="font-semibold text-xl text-center">
          Sign in / Register
        </h2>
        <div className="flex justify-center items-center text-green-600">
          <FaLock fontSize={12} className="mr-1" />
          <p className="text-center text-xs my-2 flex items-center justify-center">
            All data will be encrypted
          </p>
        </div>

        <div className="flex justify-between my-4 text-center text-sm">
          <div className="flex-1 flex flex-col items-center">
            <div className="bg-pink-50 rounded-full p-2">
              <FaShippingFast size={20} />
            </div>
            <p className="text-black font-semibold">Free shipping</p>
            <p className="text-xs">Incredible</p>
          </div>
          <div className="flex-1 border-l border-gray-300 flex flex-col items-center">
            <div className="bg-pink-50 rounded-full p-2">
              <FaUndoAlt size={20} />
            </div>
            <p className="text-black font-semibold">Free returns</p>
            <p className="text-xs">Up to 90 days</p>
          </div>
        </div>

        <p className="text-sm font-semibold">Please enter your email address</p>
        <input
          type="email"
          placeholder=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mt-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <button
          onClick={handleEmailLogin}
          disabled={loading || !email}
          className="w-full rounded-full bg-orange-500 text-white py-2 mt-4 hover:bg-orange-600"
        >
          {loading ? "Processing..." : "Continue"}
        </button>

        <p className="text-center text-xs mt-2 underline">
          Trouble signing in?
        </p>

        <p className="text-center text-sm text-gray-700 mt-7 mb-2">
          Or continue with other ways
        </p>

        <div className="flex justify-center items-center gap-4 text-white text-lg">
          <button
            onClick={handleGoogleSignIn}
            className="bg-white hover:scale-105 transition-all"
          >
            <FcGoogle fontSize={30} />
          </button>
          <button className="hover:scale-105 transition-all" onClick={gitLogin}>
            <FaGithub className="text-black" fontSize={30} />
          </button>
          <button className="hover:scale-105 transition-all"
          onClick={handleAliExpressLogin}
          >
            <FaApple className="text-black" fontSize={30} />
          </button>
          <button className="hover:scale-105 transition-all">
            <FaMobileAlt className="text-gray-700" fontSize={30} />
          </button>
        </div>

        <p className="text-xs text-gray-500 text-center mt-4">
          By continuing, you agree to our{" "}
          <span className="text-blue-500">Terms of Use</span> and{" "}
          <span className="text-blue-500">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default SignInModal;
