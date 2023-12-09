import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import Header from "./components/Header/Header";
import SignUp from "./pages/SignUp";
import AddProperty from "./pages/AddProperty";
import Footer from "./pages/Footer";
import { useSelector } from "react-redux";

export default function App() {
  const { currentUser, loading } = useSelector((state) => state?.user);

  return (
    <BrowserRouter>
      <Header currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Profile />} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
