import { useState } from "react";
import axiosInstance from "../../config/AxiosConfig";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/User";

const Settings = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Function to handle delete confirmation
  const handleDelete = (confirm) => {
      setIsOpen(false);
      const mail = localStorage.getItem("name");
      if (confirm) {
        axiosInstance.delete(`/deleteUser/${mail}`).then((res)=>{
            console.log(res.data)
            if(res.data.statusCode===404){
                toast.error("Error in deleting the account");
            }
            if(res.data.statusCode===200){
                dispatch(
                    login({
                      name: "",
                      pass: "",
                    })
                  );
                  localStorage.removeItem("name");
                  localStorage.removeItem("pass");
                  navigate("/");
                toast.success("Account Deleted Successfully")
            }
        }).catch((err)=>{
            alert(err);
        })
      }
  };
  return (
    <>
    {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-xl font-semibold mb-4">Delete Account</h2>
            <p className="mb-6">
              Are you sure you want to delete your account? All your records will
              be lost.
            </p>

            {/* Buttons */}
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => handleDelete(false)}
                className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(true)}
                className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-3xl font-semibold mb-6 text-green-700">⚙️ Settings</h2>
      {/* <div className="mb-6">
        <h4 className="font-semibold text-green-800">Change Password</h4>
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 mt-2 rounded-lg transition">
          Update Password
        </button>
      </div> */}
      <div>
        <h4 className="font-semibold text-green-800">Accounts :</h4>
        <button
        onClick={()=>setIsOpen(true)}
         className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 mt-2 rounded-lg transition">
          Delete Account
        </button>
      </div>
    </div>
    </>
  );

}
    
  export default Settings;