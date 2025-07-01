import type React from "react"
import Footer from "@/layouts/Footer";

const DefalutLayout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return <div className="wrapper">
    <div className="content">
      {children}
    </div>
    <Footer />
  </div>
}

export default DefalutLayout