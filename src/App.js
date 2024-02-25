import "./App.css";
import { Route,Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import NavBar from "./components/common/NavBar";
// import ErrorBoundary from './ErrorBoundary';
import OpenRoute from "../src/components/cores/Auth/OpenRoute"
import UpdatePassword from "./pages/UpdatePassword";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import ForgetPassword from "./pages/ForgetPassword";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import AllCards from "./pages/AllCards";
import HomePageCards from "./pages/HomePageCards";
import UserPage from "./pages/UserPage";
import PageOfPurcahe from "./pages/PageOfPurcahe";
import PurchaseForm from "./pages/PurchaseForm";
import MainPaymentPage from "./pages/MainPaymentPage";
import VehicalCreatePage from "./pages/VehicalCreatePage";

function App() {
  return (
    // <ErrorBoundary>
    <div className="w-screen bg-richblack-5 min-h-scree">
        <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
    <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
    <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgetPassword />
            </OpenRoute>
          }
        />
    <Route
          path="reset-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
          <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }/>
          <Route
          path="about"
          element={
            <OpenRoute>
              <About />
            </OpenRoute>
          }/>

        <Route
          path="dashboard/Store"
          element={
              <UserPage />
          }
        />
        <Route
          path="dashboard/AllCards"
          element={
              <AllCards />
          }
        />
        <Route
          path="dashboard/home-page"
          element={
              <HomePageCards />
          }
        />
        <Route
        path="purchasePage/:id"
        element={
          <PageOfPurcahe/>
        }
        />
        <Route
        path="purchaseForm"
        element={
          <PurchaseForm/>
        }
        />
        <Route
        path="MainPaymentPage"
        element={
          <MainPaymentPage/>
        }
        />
        <Route
        path="dashboard/create_item"
        element={
          <VehicalCreatePage/>
        }
        />
      </Routes>

    </div>
    // </ErrorBoundary>
  );
}

export default App;
