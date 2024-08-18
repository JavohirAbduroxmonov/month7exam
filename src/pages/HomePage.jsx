import { useNavigate } from "react-router-dom";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="text-white bg-spec">
      <div className="homeTop text-white">
        <div
          data-aos="fade-right"
          className="pl-48 mt-20 max-sm:mt-32 max-sm:pl-4  max-sm:text-center"
        >
          <h1 className="font-hummisher text-6xl max-sm:text-4xl leading-tight text-homeBtn  ">
            START YOUR GAME <br /> WITH THE BEST
          </h1>
          <p className="text-lg max-sm:text-base font-readex leading-tight mt-5 ">
            We've Got Everything <br /> You Need for Gaming Supremacy
          </p>
          <button
            className="text-xl font-bold px-20 py-4 bg-homeBtn rounded-xl mt-8 max-sm:px-14 max-sm:py-3"
            onClick={() => navigate("/products")}
          >
            Shop
          </button>
          <p className="text-xl max-sm:text-lg mt-5 font-hummisher">
            MORE THAN <span className="text-homeBtn">15+</span> POPULAR <br />{" "}
            PROFESSIONAL <br /> <span className="text-homeBtn">BRANDS</span>
          </p>
          <p className="text-xl max-sm:text-base mt-5 font-hummisher">
            <span className="text-homeBtn">2500+</span> ITEMS
          </p>
        </div>
      </div>
      <div className="max-w-5xl m-auto mt-20 max-sm:mt-10 flex-col text-center px-5">
        <h2 className="text-center">Discover news and innovations</h2>
        <div
          data-aos="fade-up"
          className="mt-20 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center pb-20 max-sm:mt-10  items-center "
        >
          <div className="flex-col  w-full items-center">
            <img className="m-auto" src="/card1.png" alt="Card 1" />
            <p className="font-hummisher text-2xl font-semibold mb-4 mt-7">
              Always in the Game
            </p>
            <p>
              Stay ahead of the latest and greatest gaming tech, featuring new
              releases, exclusive deals, and exciting pre-orders.
            </p>
          </div>
          <div>
            <img className="m-auto" src="/card2.png" alt="Card 2" />
            <p className="font-hummisher text-2xl font-semibold mb-4 mt-7">
              Enhance Your Experience
            </p>
            <p>
              Upgrade Your World by Elevating your setup and personalize your
              space with our collection of stylish and functional gaming
              accessories.
            </p>
          </div>
          <div>
            <img className="m-auto" src="/card3.png" alt="Card 3" />
            <p className="font-hummisher text-2xl font-semibold mb-4 mt-7">
              Command the Battle!
            </p>
            <p>
              Take control with our diverse range of gaming keyboards, featuring
              mechanical switches for tactile feedback etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
