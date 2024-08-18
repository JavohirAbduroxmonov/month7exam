import { useNavigate } from "react-router-dom";
import CartSummary from "../components/cart/CartSummary";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const CartPage = ({ cart }) => {
  useEffect(() => {
    Aos.init({ duration: 1400 });
  }, []);
  const navigate = useNavigate();
  return (
    <>
      {cart.length === 0 ? (
        <div
          data-aos="fade-up"
          className="max-w-3xl m-auto text-center mt-10 px-5"
        >
          <h1 className="font-hummisher font-bold text-blue-500 text-xl">
            Your Cart is Empty
          </h1>
          <img className="pl-36 max-sm:pl-0" src="/empty.png" alt="" />
          <button
            onClick={() => navigate("/products")}
            className="px-4 py-2 rounded-xl bg-blue-500 text-white text-2xl max-sm:w-full "
          >
            add products to cart
          </button>
        </div>
      ) : (
        <div
          data-aos="fade-right"
          className="mt-16 max-sm:mt-5 max-w-7xl m-auto px-2 "
        >
          <button
            onClick={() => navigate("/products")}
            className="flex items-center gap-2 font-semibold active:text-green-500 duration-75 active:scale-95 max-md:px-5"
          >
            <span className="material-symbols-outlined">arrow_back</span>Back to
            Shopping
          </button>
          <h1
            className="mt-12 max-sm:mt-5 text-3xl font-hummisher font-semibold mb-14 max-sm:mb-5
           max-md:px-5"
          >
            SHOPPING CART
          </h1>
          <div className="flex max-md:flex-col max-md:gap-10">
            <div
              style={{ flex: "2" }}
              className="px-5  border-r-2 border-navBorderColor"
            >
              <div className="flex justify-between border-y-2 border-dashed px-10 max-sm:px-0 border-filterBorder text-spec font-hummisher text-xl font-semibold pt-3 pb-2">
                <p>Product</p>
                <p>Price</p>
              </div>
              {cart.map((product) => (
                <div>
                  <div className="flex justify-between px-10 mt-8 border-b-2 border-dashed border-filterBorder pb-8 max-sm:px-0 ">
                    <div className="flex gap-9 max-sm:gap-0">
                      <img
                        src={product.image_url}
                        alt=""
                        className="w-40 h-40 max-sm:w-20 max-sm:h-20"
                      />
                      <div>
                        <p className="font-hummisher text-xl font-semibold max-sm:text-sm">
                          LOGITECH
                        </p>
                        <h2 className="font-readex text-lg font-light mt-2 max-sm:text-sm">
                          {product.name}
                        </h2>
                        <p className="text-base font-light mt-8">black</p>
                        <p className="text-green-500 font-light font-readex">
                          In stock
                        </p>
                      </div>
                    </div>

                    <div>
                      <strong className="text-2xl font-bold font-readex max-sm:text-lg">
                        ${product.price}
                      </strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ flex: "1" }}>
              <CartSummary cart={cart} navigate={navigate} />
            </div>
          </div>

         
        </div>
        
      )}
    </>
  );
};

export default CartPage;
