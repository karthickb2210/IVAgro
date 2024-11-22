import React,{useState} from "react";

const Menu = ({ setShow, show,filter,searchByName }) => {

    const [searchTerm, setSearchTerm] = useState("");
  const [greenToggle, setGreenToggle] = useState(false);
  const [redToggle, setRedToggle] = useState(false);
  const handleMicroGreensCLick = () => {
    let curr = show;
    curr.microGreens = !show.microGreens;
    console.log(curr);
    setShow(curr);
    setRedToggle(!redToggle);
    filter();
  };

  const handleLeafyGreensClick = () => {
    let curr = show;
    curr.leafyGreens = !show.leafyGreens;
    console.log(curr);
    setShow(curr);
    setGreenToggle(!greenToggle);
    filter()
  };

  const handleSearch = (e) =>{
    setSearchTerm(e.target.value)
    searchByName(e.target.value)
  }

  return (
    <>
      <div className="flex flex-col items-center p-6 bg-gray-200 mx-12 rounded-2xl ">
        <h1 className="text-lg font-semibold tracking-wider text-gray-700 mb-2">
          <span className="mr-2">⎯⎯ MENU ⎯⎯</span>
        </h1>

        {/* Search Bar */}
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search for Greens"
            className="w-full rounded-lg bg-gray-100 px-4 py-2 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            value={searchTerm}
            onChange={(e)=>handleSearch(e)}
          />
        </div>

        {/* Toggle Buttons */}
        <div className="mt-6 flex space-x-4 font-bold text-gray-100">
          {/* Green Toggle */}
          <label className="flex items-center space-x-2 rounded-2xl p-2 bg-gray-500">
            <p>Leafy Greens</p>
            <div
              className={`w-10 h-6 rounded-full flex items-center px-1 cursor-pointer ${
                greenToggle ? "bg-green-500" : "bg-gray-300"
              }`}
              onClick={handleLeafyGreensClick}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white shadow transition-transform ${
                  greenToggle ? "translate-x-4" : ""
                }`}
              ></div>
            </div>
          </label>

          {/* Red Toggle */}
          <label className="flex items-center space-x-2 rounded-2xl p-2 bg-gray-500">
            <p>Micro Greens</p>
            <div
              className={`w-10 h-6 rounded-full flex items-center px-1 cursor-pointer ${
                redToggle ? "bg-red-500" : "bg-gray-300"
              }`}
              onClick={handleMicroGreensCLick}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white shadow transition-transform ${
                  redToggle ? "translate-x-4" : ""
                }`}
              ></div>
            </div>
          </label>
        </div>
      </div>
    </>
  );
};

export default Menu;
