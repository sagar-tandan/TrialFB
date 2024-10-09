import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import {
  Search,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { ClipLoader } from "react-spinners";

// Global Filter Component
const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <div className="relative max-w-sm">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search all columns..."
        className="pl-8 p-2 border rounded w-full"
      />
    </div>
  );
};

const DataTable = ({ data, columns, loading }) => {
  const Data = useMemo(() => data || [], [data]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    // state,
    setGlobalFilter,
    canPreviousPage,
    canNextPage,
    // pageOptions,
    // pageCount,
    // gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
  } = useTable(
    {
      columns,
      data: Data,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <div className="w-full  p-4 space-y-4 relative">
      {/* Search Filter */}
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />

      {/* Table */}
      <div className="border rounded-lg overflow-hidden ">
        <table
          {...getTableProps()}
          className="min-w-full divide-y divide-gray-200"
        >
          <thead className="bg-gray-50">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <div className="flex items-center">
                      {column.render("Header")}
                      {column.id !== "actions" && (
                        <span>
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <ChevronDown className="w-4 h-4 ml-1" />
                            ) : (
                              <ChevronUp className="w-4 h-4 ml-1" />
                            )
                          ) : (
                            <ChevronUp className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100" />
                          )}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {loading ? (
            <div className="flex justify-center items-center h-60 absolute top-[30px] right-0 left-0 z-20">
              <ClipLoader size={35} color={"#7e22ce"} loading={loading} />
            </div>
          ) : (
            <tbody
              {...getTableBodyProps()}
              className="bg-white divide-y divide-gray-200"
            >
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps()}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                      >
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Showing {pageIndex * pageSize + 1} to{" "}
          {Math.min((pageIndex + 1) * pageSize, data.length)} of {data.length}{" "}
          entries
        </div>
        <div className="flex space-x-2">
          <button
            className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="px-2 py-1 border rounded"
          >
            {[5, 10, 20, 30, 40, 50].map((size) => (
              <option key={size} value={size}>
                Show {size}
              </option>
            ))}
          </select>
          <button
            className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
