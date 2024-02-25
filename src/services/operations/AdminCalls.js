import { toast } from "react-hot-toast"
import { apiConnector } from "../apiconnector"
import { VehicalDataEndPoints ,VehicalDocVerification } from "../apis";

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



export const getAllVehical = () => {
    return async (dispatch) => {
      const toastId = toast.loading("Fetching Vehicals...");
      try {
        // consol
        const response = await apiConnector("GET", VehicalDataEndPoints.VEHICAL_READ);
  
        console.log("GET ALL VEHICALS API RESPONSE............", response);
  
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

  export const verifyDocument = (verificationData,navigate) => {
    return async (dispatch) => {
      const toastId = toast.loading("Verifying Documents...");
      try {
        const response = await apiConnector("POST", VehicalDocVerification.VEHICAL_DOC_API, verificationData);
  
        console.log("DOCUMENT VERIFICATION API RESPONSE............", response);
  
        if (!response.data.success) {
          throw new Error(response.data.message);
        }
  
        toast.success("Document Verification Successful");
        // You can dispatch additional actions if needed
        navigate('/MainPaymentPage')
        toast.dismiss(toastId);
        return response;
  
      } catch (error) {
        console.log("DOCUMENT VERIFICATION API ERROR............", error);
        toast.error("Document Verification Failed");
      }
      toast.dismiss(toastId);
    };
  };