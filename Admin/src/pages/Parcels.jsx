import { DataGrid } from "@mui/x-data-grid";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom"; 
import { useEffect } from "react";
import { useState } from "react";

// Sample data for parcels (20 in total)
const sampleParcels = [
  { _id: "1", from: "New York", to: "Los Angeles", sendername: "Alice", recipientname: "Bob", note: "Fragile" },
  { _id: "2", from: "Chicago", to: "Houston", sendername: "Charlie", recipientname: "David", note: "Handle with care" },
  { _id: "3", from: "Miami", to: "Seattle", sendername: "Eve", recipientname: "Frank", note: "Perishable" },
  { _id: "4", from: "Dallas", to: "Denver", sendername: "Grace", recipientname: "Hank", note: "Urgent" },
  { _id: "5", from: "Austin", to: "Phoenix", sendername: "Ivy", recipientname: "Jack", note: "Gift" },
  { _id: "6", from: "San Francisco", to: "Boston", sendername: "Leo", recipientname: "Mia", note: "Important documents" },
  { _id: "7", from: "Atlanta", to: "Philadelphia", sendername: "Noah", recipientname: "Olivia", note: "Electronic items" },
  { _id: "8", from: "San Diego", to: "Portland", sendername: "Paul", recipientname: "Quinn", note: "Books" },
  { _id: "9", from: "Las Vegas", to: "Salt Lake City", sendername: "Rachel", recipientname: "Steve", note: "Clothing" },
  { _id: "10", from: "Orlando", to: "Charlotte", sendername: "Tom", recipientname: "Uma", note: "Toys" },
  { _id: "11", from: "Seattle", to: "Miami", sendername: "Victor", recipientname: "Wendy", note: "Gift wrapped" },
  { _id: "12", from: "Boston", to: "Chicago", sendername: "Xena", recipientname: "Yusuf", note: "Do not bend" },
  { _id: "13", from: "Philadelphia", to: "San Francisco", sendername: "Zoe", recipientname: "Adam", note: "Confidential" },
  { _id: "14", from: "Houston", to: "Dallas", sendername: "Brad", recipientname: "Cindy", note: "Return to sender" },
  { _id: "15", from: "Phoenix", to: "Austin", sendername: "Ethan", recipientname: "Sophia", note: "Handle with care" },
  { _id: "16", from: "Denver", to: "Seattle", sendername: "Grace", recipientname: "Ben", note: "Medical supplies" },
  { _id: "17", from: "Los Angeles", to: "Atlanta", sendername: "Holly", recipientname: "Chris", note: "Christmas gift" },
  { _id: "18", from: "New Orleans", to: "Phoenix", sendername: "Danny", recipientname: "Emma", note: "Do not open until Christmas" },
  { _id: "19", from: "Orlando", to: "Las Vegas", sendername: "Jake", recipientname: "Lily", note: "Surprise package" },
  { _id: "20", from: "Miami", to: "Chicago", sendername: "Rita", recipientname: "Tom", note: "This side up" },
];

const Parcels = () => {
  const [parcels, setParcels] = useState(sampleParcels); // Use sample data

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

  useEffect(() => {
    // Optionally fetch real data here
    // const getParcels = async () => {
    //   try {
    //     const res = await publicRequest.get("/parcels");
    //     setParcels(res.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // getParcels();
  }, []);

  const handleDelete = async (id) => {
    try {
      await publicRequest.delete(`/parcels/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <div className="flex items-center justify-between">
        <h1 className="m-[20px] text-[20px]">All Parcels</h1>
        <Link to="/newparcel">
          <button className="bg-[#1E1E1E] text-white p-[10px] cursor-pointer">New Parcel</button>
        </Link>
      </div>
      <DataGrid 
        rows={parcels} 
        columns={columns} 
        getRowId={(row) => row._id}
        disableSelectionOnClick
        pageSize={10}
        checkboxSelection
      />
    </div>
  );
};

export default Parcels;
