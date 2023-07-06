import { Link } from "react-router-dom"
import { HiShoppingCart } from 'react-icons/hi'
 
const NavBar: React.FC = (): JSX.Element => {
  return (
    <div className="w-full flex justify-between py-4">
        <h1 className="font-black text-slate-600 text-2xl">
            Shopping
        </h1>
        <nav>
            <ul className="flex flex-row  gap-8 text-lg">
                <li className="font-semibold text-lg text-slate-600 hover:text-slate-500 transition-all hover:scale-110">
                    <Link to="/">Home</Link>
                </li>
                <li className="font-semibold text-lg text-slate-600 hover:text-slate-500 transition-all hover:scale-110">
                    <Link to="/Shop">Shop</Link>
                </li>
                <li className="font-semibold text-lg text-slate-600 hover:text-slate-500 transition-all hover:scale-110">
                    <Link to="/about">about</Link>
                </li>
            </ul>
        </nav>
        <div className="relative">
            <HiShoppingCart size={30} className="text-slate-600" />  
            <div className="bg-orange-400 text-white rounded-full absolute -bottom-1 -left-1 w-5 h-5 text-xs font-bold flex items-center justify-center">3</div> 
        </div>
    </div>
  )
}

export default NavBar