import { Edit2, Search, Trash2 } from "lucide-react";
import React, { useContext, useMemo, useState } from "react";
import { AllContext } from "../../context";
import DataTable from "../Table";

// Global Filter Component
// const GlobalFilter = ({ filter, setFilter }) => {
//   return (
//     <div className="relative">
//       <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
//       <input
//         name="filter"
//         value={filter || ""}
//         onChange={(e) =>
//           setFilter((prev) => ({ ...prev, filter: e.target.value }))
//         }
//         placeholder="Search all columns..."
//         className="pl-8 p-2 border rounded w-full"
//       />
//     </div>
//   );
// };

const AddProducts = () => {
  const { allData, setAllData } = useContext(AllContext);

  const [data, setData] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Developer" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Designer" },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "Manager",
      additional: "This is additional info",
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice@example.com",
      role: "Developer",
      additional: "This is additional info",
    },
    {
      id: 5,
      name: "Charlie Wilson",
      email: "charlie@example.com",
      role: "Designer",
      additional: "This is additional info",
    },
    {
      id: 5,
      name: "Charlie Wilson",
      email: "charlie@example.com",
      role: "Designer",
    },
    {
      id: 5,
      name: "Charlie Wilson",
      email: "charlie@example.com",
      role: "Designer",
    },
    // Add more data as needed
  ]);

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Role",
        accessor: "role",
      },
      {
        Header: "Actions",
        id: "actions",
        Cell: ({ row }) => (
          <div className="flex space-x-2">
            <button
              className="p-1 hover:bg-gray-100 rounded"
              onClick={() => handleEdit(row)}
            >
              <Edit2 className="h-4 w-4" />
            </button>
            <button
              className="p-1 hover:bg-gray-100 rounded"
              onClick={() => handleDelete(row.original.id)}
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const handleEdit = (id) => {
    console.log(`Editing row with id: ${id}`);
    console.log(id);
    // Implement your edit logic here
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full flex flex-col relative">
      <div className="absolute w-[200px] bg-purple-700 text-white right-5 z-10 top-4 py-2 flex items-center justify-center font-medium rounded-sm cursor-pointer hover:bg-purple-800 transition-all duration-200 active:scale-95">
        Add Product
      </div>

      <DataTable data={data} columns={columns} />
    </div>
  );
};

export default AddProducts;
