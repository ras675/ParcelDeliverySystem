import { DataGrid } from "@mui/x-data-grid";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

// Sample data for users (10 in total)
const sampleUsers = [
  { _id: "1", fullname: "Alice Johnson", email: "alice@example.com", age: 28, country: "USA", role: "Admin" },
  { _id: "2", fullname: "Bob Smith", email: "bob@example.com", age: 34, country: "UK", role: "User" },
  { _id: "3", fullname: "Charlie Brown", email: "charlie@example.com", age: 25, country: "Canada", role: "User" },
  { _id: "4", fullname: "Diana Prince", email: "diana@example.com", age: 30, country: "Australia", role: "Admin" },
  { _id: "5", fullname: "Ethan Hunt", email: "ethan@example.com", age: 40, country: "USA", role: "User" },
  { _id: "6", fullname: "Fiona Green", email: "fiona@example.com", age: 29, country: "Ireland", role: "User" },
  { _id: "7", fullname: "George Martin", email: "george@example.com", age: 35, country: "UK", role: "User" },
  { _id: "8", fullname: "Hannah Adams", email: "hannah@example.com", age: 32, country: "USA", role: "User" },
  { _id: "9", fullname: "Ian Fleming", email: "ian@example.com", age: 45, country: "Canada", role: "Admin" },
  { _id: "10", fullname: "Jessica Jones", email: "jessica@example.com", age: 27, country: "Australia", role: "User" },
];

const Users = () => {
  const [users, setUsers] = useState(sampleUsers); // Use sample data

  const columns = [
    { field: "fullname", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "age", headerName: "Age", width: 100 },
    { field: "country", headerName: "Country", width: 150 },
    { field: "role", headerName: "Role", width: 150 },

    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: (params) => {
        return (
          <FaTrash
            className="text-red-500 cursor-pointer m-[10px]"
            onClick={() => handleDelete(params.row._id)}
          />
        );
      },
    },
  ];

  useEffect(() => {
    // Optionally fetch real data here
    // const getUsers = async () => {
    //   try {
    //     const res = await publicRequest.get("/users");
    //     setUsers(res.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // getUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await publicRequest.delete(`/users/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <div className="flex items-center justify-between">
        <h1 className="m-[20px] text-[20px]">All Users</h1>

        <Link to="/newuser">
          <button className="bg-[#1E1E1E] text-white p-[10px] cursor-pointer">
            New User
          </button>
        </Link>
      </div>
      <DataGrid
        rows={users}
        columns={columns}
        getRowId={(row) => row._id}
        disableSelectionOnClick
        pageSize={10}
        checkboxSelection
      />
    </div>
  );
};

export default Users;
