import React from "react"

import { Routes, Route } from "react-router-dom"

// components
import { Header, SignIn, SignUp } from "./components"

// pages
import Home from "./pages/Home"
import Room from "./pages/Room"
import NotFound from "./pages/NotFound"

const App = () => {
  return (
    <div className="flex">
      <div className="h-screen max-h-screen overflow-hidden w-full">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:roomID" element={<Room />} />
          <Route path="/signin" element={<SignIn goTo="/" />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
