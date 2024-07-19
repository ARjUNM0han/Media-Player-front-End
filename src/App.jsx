
import React from "react"
import { Route, Routes } from 'react-router-dom'
import Landing from "./assets/Pages/Landing/Landing"
import History from "./assets/Pages/History/History"
import Header from "./assets/Components/Header/Header"
import Footer from "./assets/Components/Footer/Footer"
import Home from './assets/Pages/Home/Home'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
      {/* <h1>Media Player</h1> */}
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/history" element={<History />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </>
  )
}

export default App
