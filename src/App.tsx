//pages
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import About from "./pages/About"

// import addNotification from 'react-push-notification'

//react router dom
import {Routes, Route} from 'react-router-dom'

//components
import NavBar from './components/NavBar';

import CartContextProvider from './context/CartContext';

const App = () => {
  return (
    <CartContextProvider>
    <div className="container px-3 mx-auto 2xl:max-w-screen-2xl">
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </div>
    </CartContextProvider>
  )
}

export default App