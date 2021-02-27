import React, { useState } from "react"
import Header from "./components/Header"
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {

  const [data, setData] = useState({
    name: "Brian",
    location: "Texas"
  })

  return (
    <>
      <Header />
      <Main name={ data.name } location={ data.location } />
      <Footer />
    </>
  );
}

export default App;
