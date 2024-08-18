const CartSummary = ({ cart, navigate }) => {
  let total = 0;
  cart.forEach((item) => {
    total += item.price;
  });

  total = total.toFixed(2);

  return (
    <div className="px-8">
      <h1 className="font-hummisher text-3xl font-semibold mb-2">
        CART TOTALS
      </h1>
      <div className="border-y-2 border-dashed border-filterBorder  py-10  ">
        <div className="flex justify-between">
          <p>Shipping (3-5 Business Days)</p>
          <strong className="text-prDetaiCol font-bold ">Free</strong>
        </div>
        <div className="flex justify-between pt-5">
          <p>TAX (estimated for the United States (US))</p>
          <strong>$0</strong>
        </div>
        <div className="flex justify-between pt-5">
          <p>Subtotal</p>
          <strong className="text-prDetaiCol font-bold ">${total}</strong>
        </div>
      </div>
      <div>
        <div className="flex justify-between mt-8 mb-16">
          <p>Total</p>
          <strong className="text-prDetaiCol font-bold ">${total}</strong>
        </div>
        <button className="rounded-xl bg-buttonColor text-white flex items-center py-4 px-8 gap-2 font-bold text-lg w-full justify-center">
          Proceed to Checkout
        </button>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/products")}
          className="flex items-center gap-2 font-semibold active:text-green-500 duration-75 active:scale-95 mt-12 mb-10 max-sm:mt-5"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Back to Shopping
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
