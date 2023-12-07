import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/CreateListing";
import UpdateListing from "./pages/UpdateListing";
import Listing from "./pages/Listing";
import Search from "./pages/Search";

const App = () => {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/sign-in" element={<Signin />}></Route>
          <Route path="/sign-up" element={<Signup />}></Route>
          <Route path='/search' element={<Search />} />


          <Route path="/listing/:listingId" element={<Listing />}></Route>

          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />}></Route>

            <Route path="/create-listing" element={<CreateListing />}></Route>

            <Route path="/update-listing/:listingId" element={<UpdateListing />}></Route>


          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
