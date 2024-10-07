import React, { useEffect, useState } from "react";

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

  return <div></div>;
}

export default App;
