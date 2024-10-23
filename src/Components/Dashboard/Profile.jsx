const Profile = ({ data }) => (
    <div className="bg-white p-6  shadow-md rounded-lg">
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
          {!data.mobileNumber === " " ? data.mobileNumber : "Not Updated Yet.."}
        </h4>
      </div>
    </div>
  );

  export default Profile;