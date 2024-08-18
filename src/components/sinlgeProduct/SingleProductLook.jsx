const SingleProductLook = ({ product }) => {
  return (
    <div className="flex-1">
      <div>
        <p>
          Products / Gaming Headsets & Audio /{" "}
          <span className="font-bold">{product.name}</span>
        </p>
      </div>
      <div className="mt-10">
        <div>
          <img className="w-full" src={product.image_url} alt="" />
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 gap-4 mt-24">
          <img src={product.image_url} alt="" className="w-full h-auto" />
          <img src={product.image_url} alt="" className="w-full h-auto" />
          <img src={product.image_url} alt="" className="w-full h-auto" />
          <img src={product.image_url} alt="" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default SingleProductLook;
