import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const ProductCard = ({ product, id, cart, setCart }) => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <div
      data-aos="fade-up"
      className="list-none w-full flex flex-col  p-5 relative group justify-between gap-6 pr-10"
    >
      <img src={product.image_url} alt="" />
      <div>
        <Link to={`/products/${id}`}>
          <h2 className="font-hummisher text-xl font-bold">{product.name}</h2>
        </Link>

        <p className="font-readex font-light text-lg">{product.description}</p>
      </div>
      <div className="flex gap-3  ">
        {product.color_options.map((c, index) => {
          return (
            <span
              key={index}
              style={{ backgroundColor: c }}
              className=" w-8 h-8 rounded-full border border-black "
            ></span>
          );
        })}
      </div>
      <div>
        <p className="font-readex text-xl font-bold">${product.price}</p>
      </div>
      <div>
        <button
          onClick={() => {
            setCart([...cart, product]), toast("product added");
          }}
          className="rounded-xl bg-buttonColor text-white flex items-center py-4 px-8 gap-2 font-bold text-xl w-full duration-75 hover:scale-95 active:bg-blue-600"
        >
          <span class="material-symbols-outlined">shopping_cart</span>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
