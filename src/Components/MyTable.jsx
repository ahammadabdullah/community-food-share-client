import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { FiArchive, FiEdit, FiXCircle } from "react-icons/fi";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyTable = () => {
  const { user } = useAuth();
  const [foods, setFoods] = useState([]);

  //   const [data, setData] = useState([...foods]);
  useEffect(() => {
    axios
      .get(`http://localhost:3500/myfoods?email=${user?.email}`, {
        withCredentials: true,
      })
      .then((res) => setFoods(res.data));
  }, [user?.email]);
  const data = useMemo(() => [...foods], [foods]);

  //   console.log(table);
  const columnHelper = createColumnHelper();

  const handleManage = (id) => {
    console.log("id", "hid", id);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#114428",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3500/myfoods?id=${id}`).then((res) => {
          if (res.data.deletedCount) {
            const filteredData = data.filter((i) => i._id !== id);
            setFoods(filteredData);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const columns = [
    columnHelper.accessor("foodName", {
      cell: (info) => info.getValue(),
      header: () => "Food Name",
    }),

    columnHelper.accessor("status", {
      header: () => "Status",
    }),
    columnHelper.accessor("manage", {
      header: () => "Manage",
      cell: ({ cell }) => (
        <Link to={`managerequest/${cell.row.original.foodName}`}>
          <button>
            <span className="flex justify-center text-primary hover:text-white">
              <FiArchive />
            </span>
          </button>
        </Link>
      ),
    }),
    // /updatefood/:id
    columnHelper.accessor("edit", {
      header: () => "Edit",
      cell: ({ cell }) => (
        <Link to={`/updatefood/${cell.row.original._id}`}>
          <button>
            <span className="flex justify-center text-primary">
              <FiEdit></FiEdit>
            </span>
          </button>
        </Link>
      ),
    }),
    columnHelper.accessor("delete", {
      header: () => "Delete",
      cell: ({ cell }) => (
        <button
          className="text-red-600"
          onClick={() => handleDelete(cell.row.original._id)}
        >
          <span className="flex justify-center">
            <FiXCircle />
          </span>
        </button>
      ),
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      <thead className="text-xl">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr className="bg-primary text-white  p-2" key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th className="px-4 py-2" key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="text-lg ">
        {table.getRowModel().rows.map((row) => (
          <tr className="text-center" key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td className="p-3" key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MyTable;
