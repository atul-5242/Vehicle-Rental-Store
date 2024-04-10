import { toast } from "react-hot-toast"
import { apiConnector } from "../apiconnector"
import { VehicalDataEndPoints ,VehicalDocVerification  } from "../apis";
import { setdataOfVehical } from "../../slices/ItemSlice";
import {setAdditionalDetails, setSingleUserData} from '../../slices/authSlice';

export const createvehical = (data,token) => {
    console.log("The data is here:",data);
    return async () => {
        const toastId = toast.loading("Creating Vehical...");
        try {
        console.log("The data is here??????????????????????????:",data);
      const response = await apiConnector("POST", VehicalDataEndPoints.VEHICAL_CREATE, data,{
        Authorization: `Bearer ${token}`,
    });
    

      console.log("CREATE VEHICAL API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Vehical Created Successfully");
      // You can dispatch additional actions if needed

    } catch (error) {
      console.log("CREATE VEHICAL API ERROR............", error);
      toast.error("Failed to create Vehical");
    }
    toast.dismiss(toastId);
  };
};



export const getAllVehical = (token) => {
  console.log(">>>>>>>>>>><<<<<<<<<<<<<<<",token)
    let toastId;
    let toastTriggered = false; 
    return async (dispatch) => {
      if (!toastTriggered) { // Check if toast has not been triggered yet
        toastTriggered = true; // Set flag to true to indicate toast has been triggered
        toastId = toast.loading("Fetching Vehicals..."); // Trigger loading toast
      }
      try {
        // console
        const response = await apiConnector("GET", VehicalDataEndPoints.VEHICAL_READ,null,{
          Authorization: `Bearer ${token}`,
      });
  
        console.log("GET ALL VEHICALS API RESPONSE............", response);
        // sessionStorage.setItem("dataOfVehical", JSON.stringify(response));
        // dispatch(setdataOfVehical(response));
        if (!response.data.success) {
          throw new Error(response.data.message);
        }
  
        // Dispatch an action if needed, e.g., to update Redux state with the fetched data
        // dispatch(setVehicals(response.data.vehicals));
        toast.success("Vehicals Fetched Successfully");

        return response
      } catch (error) {
        console.log("GET ALL VEHICALS API ERROR............", error);
        toast.error("Failed to fetch Vehicals");
      }
      finally {
        if (toastTriggered) { // Check if toast has been triggered
          toast.dismiss(toastId); // Dismiss toast if it has been triggered
        }
      }
    };
  };
export const get_A_Vehical = (id) => {
    return async (dispatch) => {
      console.log("LLLLLLLLLLLLLLLLLLL]]]]]]]]]]]",id)
      const toastId = toast.loading("Fetching Vehicals...");
      try {
        // console

        const response = await apiConnector("GET", `${VehicalDataEndPoints.VEHICAL_A_READ}`,null,null,{id});
       
  

        console.log("GET A ----- VEHICALS API RESPONSE............", response);
  
        if (!response.data.success) {
          throw new Error(response.data.message);
        }
  
        // Dispatch an action if needed, e.g., to update Redux state with the fetched data
        // dispatch(setVehicals(response.data.vehicals));
        toast.success("Vehicals Fetched Successfully");
        toast.dismiss(toastId);
        return response
      } catch (error) {
        console.log("GET ALL VEHICALS API ERROR............", error);
        toast.error("Failed to fetch Vehicals");
      }
      toast.dismiss(toastId);
    };
  };
export const Rented_Vehical_fun = (token) => {
    return async (dispatch) => {
      console.log("LLLLLLLLLLLLLLLLLLL]]]]]]]]]]]",token)
      const toastId = toast.loading("Fetching Vehicals...");
      try {
        // console
        console.log("Happened")
        const response = await apiConnector("GET", VehicalDataEndPoints.RENTED_VEHICAL,null,{
          Authorization: `Bearer ${token}`,
      });
       
  

        console.log("GET A ----- VEHICALS API RESPONSE............", response);
  
        if (!response.data.success) {
          throw new Error(response.data.message);
        }
  
        // Dispatch an action if needed, e.g., to update Redux state with the fetched data
        // dispatch(setVehicals(response.data.vehicals));
        toast.success("Vehicals Fetched Successfully");
        toast.dismiss(toastId);
        return response
      } catch (error) {
        console.log("GET ALL VEHICALS API ERROR............", error);
        toast.error("Failed to fetch Vehicals");
      }
      toast.dismiss(toastId);
    };
  };

  export const verifyDocument = (verificationData,navigate,id,token) => {
    console.log("This Token:}}}}}}}}}}}}}}}}}}",token)
    return async (dispatch) => {
      const toastId = toast.loading("Verifying Documents...");
      console.log("QQQQQQQQQQQQQQQQQQ:",verificationData);
      try {
        const response = await apiConnector("POST", VehicalDocVerification.VEHICAL_DOC_API,verificationData, {
          Authorization: `Bearer ${token}`,
      });
  
        console.log("DOCUMENT VERIFICATION API RESPONSE............", response);
  
        if (!response.data.success) {
          throw new Error(response.data.message);
        }
  
        toast.success("Document Verification Successful");
        // You can dispatch additional actions if needed
        
        navigate(`/MainPaymentPage/${id}`)
        setAdditionalDetails(true);
        return response;
  
      } catch (error) {
        console.log("DOCUMENT VERIFICATION API ERROR............", error);
        toast.error("Document Verification Failed");
      }
      toast.dismiss(toastId);
    };
  };





  export const UserDetails = () => {
    // console.log("This Token:}}}}}}}}}}}}}}}}}}",token)
    return async (dispatch) => {
      const toastId = toast.loading("Verifying Documents...");
      // console.log("QQQQQQQQQQQQQQQQQQ:",verificationData)
      try {
        const response = await apiConnector("GET", VehicalDataEndPoints.USER_DETAILS);
  
        console.log("USER_DETAILS API RESPONSE............", response);
        
  
        if (!response.data.success) {
          throw new Error(response.data.message);
        }
  
        toast.success("USER DETAILS fetched Successful.");
        // You can dispatch additional actions if needed
        // setAdditionalDetails(true);
        toast.dismiss(toastId);
        return response;
  
      } catch (error) {
        console.log("DOCUMENT VERIFICATION API ERROR............", error);
        toast.error("User Details Failed");
      }
      toast.dismiss(toastId);
    };
  };

  export const SingleUserDetails = (navigate,id,dispatch) => {
    return async (dispatch) => {
      console.log("LLLLLLLLLLLLLLLLLLL]]]]]]]]]]]",id);
      const toastId = toast.loading("Fetching Vehicals...");
      try {
        // console

        const response = await apiConnector("GET", `${VehicalDataEndPoints.SINGLE_USER_DETAILS}`,null,null,{id});
       
  

        console.log("GET A ----- Single User API RESPONSE............", response?.data?.Users[0]);
        
        if (!response.data.success) {
          throw new Error(response.data.message);
        }

        dispatch(setSingleUserData(response?.data?.Users[0]));
        sessionStorage.setItem("singleUser", JSON.stringify(response?.data?.Users[0]));
        // Dispatch an action if needed, e.g., to update Redux state with the fetched data
        // dispatch(setVehicals(response.data.vehicals));
        toast.success("Vehicals Fetched Successfully");
        toast.dismiss(toastId);
        navigate("/dashboard/Customer_rented_vehical");
        return response
      } catch (error) {
        console.log("GET ALL VEHICALS API ERROR............", error);
        toast.error("Failed to fetch Vehicals");
      }
      toast.dismiss(toastId);
    };
  };



  export function Approved(id,vehicalId,dispatch,navigate) {
    return async (dispatch) => {
      console.log("Approved function",id)
      const toastId = toast.loading("Approving");
      try {
       const response = await apiConnector("POST", `${VehicalDataEndPoints.Approved}`,null,null,{id,vehicalId});

        console.log("GET A ----- Approved function API RESPONSE............", response?.data?.UserDetails);
        
        if (!response.data.success) {
          throw new Error(response.data.message);
        }
        
        toast.success("Approved Successfully");
        toast.dismiss(toastId);
        navigate("/dashboard/Customer_rented_vehical");
        return dispatch(SingleUserDetails(navigate,id,dispatch));
        // return response?.data
      } catch (error) {
        console.log("Approved API ERROR............", error);
        toast.error("Approved API ERROR.");
      }
      toast.dismiss(toastId);
    };
}







export function Decline(id,vehicalId,dispatch,navigate) {
  return async (dispatch) => {
    console.log("Approved function",id)
    const toastId = toast.loading("Approving");
    try {
     const response = await apiConnector("POST", `${VehicalDataEndPoints.Decline}`,null,null,{id,vehicalId});

      console.log("GET A ----- Approved function API RESPONSE............", response?.data?.UserDetails);
      
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      
      toast.success("Approved Successfully");
      toast.dismiss(toastId);
      navigate("/dashboard/Customer_rented_vehical");
      return dispatch(SingleUserDetails(navigate,id,dispatch));
      // return response?.data
    } catch (error) {
      console.log("Approved API ERROR............", error);
      toast.error("Approved API ERROR.");
    }
    toast.dismiss(toastId);
  };
}