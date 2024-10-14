import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

const parcels = [
  {
    from: "Ontario, USA",
    weight: "200 kg",
    date: "26/06/2024",
    sender: "Rupak Asif",
    to: "IUT, Gazipur",
    status: "Pending",
  },
  {
    from: "Toronto, Canada",
    weight: "150 kg",
    date: "01/07/2024",
    sender: "John Doe",
    to: "Dhaka, Bangladesh",
    status: "Pending",
  },
  {
    from: "Toronto, Canada",
    weight: "150 kg",
    date: "01/07/2024",
    sender: "John Doe",
    to: "Dhaka, Bangladesh",
    status: "Delivered",
  },
  // Add more parcel objects if needed
];

const MyParcels = () => {
  const [open, setOpen] = useState(false);

  // Toggles the dropdown menu
  const handleOpen = () => {
    setOpen(!open);
  };

  // Placeholder function for logout
  const handleLogout = () => {
    // Implement your logout functionality here
    console.log("Logged out");
  };

  return (
    <div>
      <div className="relative flex items-end justify-end mr-[20%] mt-[3%]">
        <div>
          <span
            className="flex items-center text-white font-semibold cursor-pointer"
            onClick={handleOpen}
          >
            <FaUser className="mr-[10px]" />
            Asfak Azad
          </span>
        </div>

        {open && (
          <div className="absolute top-[20px] right-0 h-[200px] w-[250px] bg-[#D9D9D9] z-[999] shadow-xl">
            <ul className="flex flex-col items-center justify-center mt-[10px] text-[#555]">
              <Link to="/allparcels">
                <li className="hover:text-[#fff] my-[5px] cursor-pointer">
                  All parcels
                </li>
              </Link>
              <li className="hover:text-[#fff] my-[5px] cursor-pointer">
                Statements
              </li>
              <li
                className="hover:text-[#fff] my-[5px] cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="flex flex-col mr-[10%] ml-[10%]">
        <h2 className="text-[18px] text-[#D9D9D9] p-[20px]">My Parcels</h2>

        {/* Map through parcels and display them */}
        {parcels.map((parcel, index) => (
          <div
            key={index}
            className="flex justify-between bg-[#D9D9D9] h-[150px] w-[60vw] m-[20px] p-[20px] cursor-pointer text-[#555]"
          >
            <div>
              <ul>
                <li>From: {parcel.from}</li>
                <li>Weight: {parcel.weight}</li>
                <li>Date: {parcel.date}</li>
                <li>Sender: {parcel.sender}</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <span>To: {parcel.to}</span>
              <button className="bg-[#555] text-white w-[100px] cursor-pointer p-[5px]">
                {parcel.status}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyParcels;
