import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TableComponent from "./TableComponent";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Log the .env values
    console.log(
      "VITE_FIREBASE_API_KEY:",
      import.meta.env.VITE_FIREBASE_API_KEY
    );
    console.log(
      "VITE_FIREBASE_AUTH_DOMAIN:",
      import.meta.env.VITE_FIREBASE_AUTH_DOMAIN
    );
    console.log(
      "VITE_FIREBASE_PROJECT_ID:",
      import.meta.env.VITE_FIREBASE_PROJECT_ID
    );
    console.log(
      "VITE_FIREBASE_STORAGE_BUCKET:",
      import.meta.env.VITE_FIREBASE_STORAGE_BUCKET
    );
    console.log(
      "VITE_FIREBASE_MESSAGING_SENDER_ID:",
      import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID
    );
    console.log("VITE_FIREBASE_APP_ID:", import.meta.env.VITE_FIREBASE_APP_ID);
    console.log(
      "VITE_FIREBASE_MEASUREMENT_ID:",
      import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
    );
  }, []);
  const data = React.useMemo(
    () => [
      { name: 'Alice', age: 25, city: 'New York' },
      { name: 'Bob', age: 30, city: 'San Francisco' },
      { name: 'Charlie', age: 35, city: 'Chicago' },
      // More JSON data here
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name', // Key in JSON data
      },
      {
        Header: 'Age',
        accessor: 'age', // Key in JSON data
      },
      {
        Header: 'City',
        accessor: 'city', // Key in JSON data
      },
    ],
    []
  );

  return (
    <div>
            <TableComponent columns={columns} data={data} />

    </div>
  );
}

export default App;
