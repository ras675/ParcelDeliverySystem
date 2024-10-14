import { FaArrowLeft, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

const Parcels = () => {
  const [parcels, setParcels] = useState([]);
  
  // Sample data with 10 parcels
  const sampleParcels = [
    { _id: "1", from: "New York", to: "Los Angeles", sendername: "Alice", recipientname: "Bob", note: "Fragile" },
    { _id: "2", from: "Chicago", to: "Houston", sendername: "Charlie", recipientname: "David", note: "Handle with care" },
    { _id: "3", from: "Miami", to: "Seattle", sendername: "Eve", recipientname: "Frank", note: "Perishable" },
    { _id: "4", from: "Boston", to: "San Francisco", sendername: "Grace", recipientname: "Heidi", note: "Important documents" },
    { _id: "5", from: "Austin", to: "Denver", sendername: "Ivan", recipientname: "Judy", note: "Sensitive materials" },
    { _id: "6", from: "Dallas", to: "Phoenix", sendername: "Karl", recipientname: "Laura", note: "Keep upright" },
    { _id: "7", from: "Philadelphia", to: "Portland", sendername: "Mallory", recipientname: "Oscar", note: "Do not bend" },
    { _id: "8", from: "Atlanta", to: "Las Vegas", sendername: "Nina", recipientname: "Paul", note: "Fragile glass" },
    { _id: "9", from: "Orlando", to: "San Diego", sendername: "Olivia", recipientname: "Quincy", note: "Electronic device" },
    { _id: "10", from: "San Antonio", to: "Minneapolis", sendername: "Walter", recipientname: "Yvonne", note: "Express delivery" },
  ];

  // Simulate fetching data with useEffect
  useEffect(() => {
    // Simulating fetching from an API
    setParcels(sampleParcels);
  }, []);

  // Handle delete function
  const handleDelete = (id) => {
    setParcels(parcels.filter(parcel => parcel._id !== id));
  };

  // DataGrid column definitions
  const columns = [
    { field: "from", headerName: "From", width: 150 },
    { field: "to", headerName: "To", width: 150 },
    { field: "sendername", headerName: "Sender", width: 150 },
    { field: "recipientname", headerName: "Recipient", width: 150 },
    { field: "note", headerName: "Note", width: 200 },
    {
      field: "edit",
      headerName: "Edit",
      width: 150,
      renderCell: (params) => (
        <Link to={"/parcel/" + params.row._id}>
          <button className="bg-teal-300 text-white cursor-pointer w-[70px]">Edit</button>
        </Link>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: (params) => (
        <FaTrash className="text-red-500 cursor-pointer m-[10px]" onClick={() => handleDelete(params.row._id)} />
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-[3%] mr-[5%] ml-[5%]">
      <div className="bg-[#fff] h-auto w-[70vw] rounded-md p-[30px]">
        <Link to="/myparcels">
          <FaArrowLeft className="text-[#555] text-18px m-2 cursor-pointer" />
        </Link>
        <div className="flex justify-between p-[10px]">
          <span className="text-[18px] text-[#555]">All Parcels</span>
          <span className="font-semibold text-[#555]">Asfak Azad</span>
        </div>
        <div className="p-3">
          <DataGrid
            rows={parcels}
            columns={columns}
            getRowId={(row) => row._id}
            disableSelectionOnClick
            pageSize={5}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
};

export default Parcels;
