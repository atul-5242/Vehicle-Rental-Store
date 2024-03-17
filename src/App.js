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
import UserPage from "./pages/UserPage";
import PageOfPurcahe from "./pages/PageOfPurcahe";
import PurchaseForm from "./pages/PurchaseForm";
import MainPaymentPage from "./pages/MainPaymentPage";
import VehicalCreatePage from "./pages/VehicalCreatePage";
import Rented_item from "./components/cores/DashBoard/Rented_item";
import Details_of_Vehical from "./components/cores/DashBoard/Details_of_Vehical";
import Customer_rented_vehical from "./components/cores/DashBoard/Customer_rented_vehical";
import AllRentsOfCustomer from "./pages/AllRentsOfCustomer";

function App() {
  return (
    // <ErrorBoundary>
    <div className="w-screen bg-richblack-5 min-h-screen">
        <NavBar />
      <Routes>
        <Route
          path="/" element={<Home/>}
        />
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
          path="dashboard/Store"
          element={
              <UserPage />
          }
        />
        
        
        <Route
        path="purchasePage/:id"
        element={
          <PageOfPurcahe/>
        }
        />
        <Route
        path="purchaseForm/:id"
        element={
          <PurchaseForm/>
        }
        />
        <Route
        path="MainPaymentPage/:VehicalId"
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
        <Route
        path="dashboard/rented_item"
        element={
          <Rented_item/>
        }
        />
        <Route
        path="dashboard/buyedProductDetails"
        element={
          <Details_of_Vehical/>
        }
        />

        <Route
        path="dashboard/Customer_rented_vehical"
        element={
          <Customer_rented_vehical/>
        }
        />
        <Route
        path="dashboard/Customer_rented_vehical"
        element={
          <Customer_rented_vehical/>
        }
        />
        <Route
        path="dashboard/allCustomerRent"
        element={
          <AllRentsOfCustomer/>
        }
        />


      </Routes>

    </div>
    // </ErrorBoundary>
  );
}

export default App;
