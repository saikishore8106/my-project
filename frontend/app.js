import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://backend-service:5000/api")
      .then(res => res.json())
      .then(data => setMsg(data.message));
  }, []);

  return <h1 style={{textAlign:"center"}}>{msg}</h1>;
}

export default App;
