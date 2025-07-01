import Partners from "./components/Partners"
import Testimonials from "./components/Testimonials"
import Touch from "./components/Touch"

import DefalutLayout from "@/layouts/Default"

const Home = () => {
  return <DefalutLayout>
    <Partners />
    <Testimonials />
    <Touch />
  </DefalutLayout>
}

export default Home