import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

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

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
