import React, { useEffect, useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import CatIndex from "./pages/CatIndex"
import CatShow from "./pages/CatShow"
import CatNew from "./pages/CatNew"
import CatEdit from "./pages/CatEdit"
import { Routes, Route } from "react-router-dom"

const App = () => {
  const [cats, setCats] = useState([])
  
  useEffect(() => {
    readCat()
  }, [])

  const readCat = () => {
    fetch("http://localhost:3000/cats")
    .then((response) => response.json())
    .then((payload) => setCats(payload))
    .catch((error) => console.log("Read Cat Errors:", error))
  }

  const createCat = (cat) => {
    fetch("http://localhost:3000/cats", {
      // converts the object to a string that can be passed in the request
      body: JSON.stringify(cat),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json"
      },
      // HTTP verp so the correct endpoint is invoked
      method: "POST"
    })
    .then((response) => response.json())
    // After response is fulfilled, call readCat so state is updated with new entry
    .then(() => readCat())
    .catch((error) => console.log("Create Cat Errors:", error))
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catindex" element={<CatIndex cats={cats} />} />
        <Route path="/catshow/:id" element={<CatShow cats={cats} />} />
        <Route path="/catnew" element={<CatNew createCat={createCat} />} />
        <Route path="/catedit" element={<CatEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
