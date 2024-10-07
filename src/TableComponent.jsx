import React, { useState } from 'react';
import { useTable, usePagination, useGlobalFilter, useSortBy } from 'react-table';
import './Table.css'; // Import CSS

const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
  return (
    <span>
      Search:{' '}
      <input
        value={globalFilter || ''}
        onChange={e => setGlobalFilter(e.target.value || undefined)}
        placeholder="Type to search..."
        style={{
          fontSize: '1.1rem',
          border: '1px solid #ccc',
          borderRadius: '5px',
          padding: '5px 10px',
          marginBottom: '10px',
        }}
      />
    </span>
  );
};

const TableComponent = ({ columns, data }) => {
  const [sortColumn, setSortColumn] = useState(''); // To hold selected column for sorting
  const [sortDirection, setSortDirection] = useState('asc'); // To hold sort direction

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setGlobalFilter,
    state: { pageIndex, pageSize, globalFilter },
    setSortBy,
  } = useTable(
    {
      columns,
      data,
      manualSortBy: true, // We'll manually handle sorting
      initialState: { pageIndex: 0 }, // Default page index
    },
    useGlobalFilter,
    useSortBy, // Sorting
    usePagination // Pagination
  );

  // Handle sorting via dropdown
  const handleSortChange = (column, direction) => {
    setSortColumn(column);
    setSortDirection(direction);
    setSortBy([{ id: column, desc: direction === 'desc' }]); // Update sort state
  };

  return (
    <div className="table-wrapper">
      {/* Search functionality */}
      <GlobalFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />

      {/* Sorting dropdown */}
      <div className="sort-dropdown">
        <label htmlFor="sortColumn">Sort by:</label>
        <select
          id="sortColumn"
          value={sortColumn}
          onChange={e => handleSortChange(e.target.value, sortDirection)}
        >
          <option value="">Select column</option>
          {columns.map(column => (
            <option key={column.accessor} value={column.accessor}>
              {column.Header}
            </option>
          ))}
        </select>
        <select
          value={sortDirection}
          onChange={e => handleSortChange(sortColumn, e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      {/* Table structure */}
      <table {...getTableProps()} className="styled-table">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>
        <button onClick={() => gotoPage(pageOptions.length - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <select
          value={pageSize}
          onChange={e => setPageSize(Number(e.target.value))}
          style={{ marginLeft: '10px' }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TableComponent;
