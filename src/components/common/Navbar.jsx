import GG from "../../assets/GG.svg";
import logo from "../../assets/logo.svg";
import phone from "../../assets/phone.svg";
import globe from "../../assets/globe.svg";
import us from "../../assets/us.svg";
import cart from "../../assets/cart.svg";
import user from "../../assets/user.svg";
import search from "../../assets/search.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = ({ cart }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <div>
      <div className="bg-navColor flex justify-between py-5 px-24 text-white max-lg:px-5 items-center">
        <div className="flex gap-4">
          <div className="flex items-center gap-8 cursor-pointer">
            <img src={GG} alt="logo" />
            <img className="max-sm:hidden" src={phone} alt="" />
          </div>
          <p className="text-white text-sm font-medium max-sm:hidden">
            +4904-049-950
          </p>
        </div>
        <div className="flex gap-6 max-lg:hidden max-sm:gap-3">
          <div>Get 50% Off on the Selected items</div>
          <button className="border-l-2 border-sliceColor pl-6 px-2">
            Shop now
          </button>
        </div>
        <div className="flex items-center gap-10 max-sm:gap-5">
          <div className="flex items-center gap-3">
            <select
              className="bg-transparent outline-none"
              name="English"
              id=""
            >
              <option value="">English</option>
              <option value="">Uzbek</option>
              <option value="">Russian</option>
            </select>
            <img src={us} alt="" />
          </div>

          <div className="flex items-center gap-2 max-sm:gap-1">
            <img src={globe} alt="" />
            <p>Location</p>
          </div>
        </div>
      </div>

      <div
        className={
          "max-w-7xl py-10 border-b-2  border-navBorderColor m-auto flex items-center justify-between px-10 max-sm:py-4 max-sm:px-4"
        }
      >
        <div>
          <Link to="/">
            <img className="cursor-pointer" src={logo} alt="" />
          </Link>
        </div>
        <ul className="flex gap-10 font-medium cursor-pointer max-lg:hidden ">
          <Link to="/">
            <li className="hover:text-green-60 active:text-green-700">Home</li>
          </Link>
          <Link to='/products'>
            <li className="hover:text-green-600">Products</li>
          </Link>

          <li className="hover:text-green-600">What’s new</li>
          <li className="hover:text-green-600">Sales</li>
          <li className="hover:text-green-600">Help</li>
          <li className="hover:text-green-600">About</li>
        </ul>
        <div className="flex gap-10 max-sm:gap-2 items-center ">
          <Link to="/products">
            <span className="material-symbols-outlined hidden max-lg:block">
              inventory_2
            </span>
          </Link>

          <img
            className="cursor-pointer hover:scale-125 duration-300"
            src={search}
            alt=""
          />
          <img
            className="cursor-pointer hover:scale-125 duration-300"
            src={user}
            alt=""
          />
          <Link to="/cart">
            <span className="material-symbols-outlined pt-1 hover:scale-125 duration-300 relative">
              shopping_cart
            </span>
            {cart.length > 0 && (
              <div className="bg-green-600 text-white font-bold text-center rounded-full absolute px-1 text-xs top-24 right-21 ml-2 mt-1 max-sm:top-16 max-sm:mt-3">
                {cart.length}
              </div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
