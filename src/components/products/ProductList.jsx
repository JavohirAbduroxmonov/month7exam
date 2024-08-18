import ProductCard from "./ProductCard";

const ProductList = ({
  products,
  loading,
  selctedBrand,
  selectedColor,
  filteredByPrice,
  cart,
  setCart,
  filter,
  setFilter,
}) => {
  const filteredProducts = products
    .filter(
      (product) =>
        (product.brand_name === selctedBrand || !selctedBrand) &&
        (product.color_options.includes(selectedColor) || !selectedColor)
    )
    .filter((product) => {
      if (filter === "Arzon") {
        return product.price <= 100; // Masalan, 100 dan arzon mahsulotlar
      } else if (filter === "Qimmat") {
        return product.price > 100; // Masalan, 100 dan qimmat mahsulotlar
      }
      return true; // filter bo'lmasa barcha mahsulotlar
    });

  return (
    <div>
      <div className="grid gap-7 grid-cols-1  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 flex-1 pr-20 pl-10 max-sm:pr-1 max-sm:pl-1 ">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id} // `key` propsini qo'shish kerak
            id={product.id}
            product={product}
            price={product.price}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>

      
    </div>
  );
};

export default ProductList;
