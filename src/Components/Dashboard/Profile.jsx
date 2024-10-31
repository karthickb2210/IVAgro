import { useState } from "react";
import { toast } from "sonner";
import axiosInstance from "../../config/AxiosConfig";
const Profile = ({ data }) =>{

  const [isOpen, setIsOpen] = useState(false);
    const [mobileNumber, setMobileNumber] = useState('');

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const [error, setError] = useState('');

    const handleSave = () => {
        // Logic to save the mobile number goes here
        if (mobileNumber.length !== 10 || isNaN(mobileNumber)) {
          toast.warning('Mobile number must be exactly 10 digits.');
          return;
        }else{
          axiosInstance.get(`/changeMobileNumber/${localStorage.getItem("name")}/${mobileNumber}`).then((res)=>{
            if(res.data.statusCode===200){
              window.location.reload();
              toast.success("Mobile Number updated succesfully")
              
            }else if(res.data.statusCode===404){
              toast.error("Invalid User Profile")
            }else{
              toast.error("Error in updating mobile number")
            }
          }).catch((err)=>{
            toast.warn(err)
          })
        }
        closeModal();
    };

  return(
    <div className="bg-white p-6  shadow-md rounded-lg">
    {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out">
                    <div className="bg-white w-full max-w-lg p-6 rounded-xl shadow-2xl transform transition-all duration-500">
                        <div className="flex justify-between items-center mb-6 border-b pb-3">
                            <h2 className="text-2xl font-semibold text-gray-800">Edit Profile</h2>
                            <button onClick={closeModal} className="text-gray-500 hover:text-red-500 text-2xl font-semibold">&times;</button>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-600 mb-2">
                                Mobile Number
                            </label>
                            <input
                                type="text"
                                id="mobileNumber"
                                value={mobileNumber}
                                onChange={(e) => {
                                    setMobileNumber(e.target.value);
                                    setError(''); // Clear error on input change
                                }}
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-300"
                                placeholder="Enter your mobile number"
                            />
                            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                        </div>
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={handleSave}
                                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md transform transition-transform duration-300 hover:scale-105"
                            >
                                Save
                            </button>
                            <button
                                onClick={closeModal}
                                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md transform transition-transform duration-300 hover:scale-105"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
      <h2 className="sm:text-3xl text-2xl font-semibold mb-6 text-green-700">
        👤 User Profile
      </h2>
      <div className="flex items-center mb-4">
        <img
          src="https://t3.ftcdn.net/jpg/06/33/54/78/240_F_633547842_AugYzexTpMJ9z1YcpTKUBoqBF0CUCk10.jpg"
          alt="Profile"
          className="sm:w-24 w-20  object-contain rounded-full mr-4 shadow-lg"
        />
        <div>
          <h3 className="sm:text-xl text-lg font-bold text-green-800">
            {data.username}
          </h3>
          {/* <p className="text-green-600 text-wrap">jane.greenfield@plantlife.com</p> */}
        </div>
      </div>
      <div className="mt-6">
        <h4 className="text-green-700 font-medium sm:font-semibold mb-2">
          Email : {data.mail}{" "}
        </h4>
        <h4 className="text-green-700 font-medium sm:font-semibold mb-2">
          Mobile Number :{" "}
          {data.mobileNumber.length>4 ? data.mobileNumber : "Not Updated Yet.."}
        </h4>
        <button
                onClick={openModal}
                className="px-4 py-1 mt-6 bg-teal-950 text-white rounded-md"
            >
                Edit Profile
        </button>
      </div>
    </div>
  );
}
  export default Profile;