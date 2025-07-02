import type React from "react"
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";

const DefalutLayout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return <div className="wrapper">
    <Header />
    <div className="content">
      {children}
    </div>
    <Footer />
  </div>
}

export default DefalutLayout