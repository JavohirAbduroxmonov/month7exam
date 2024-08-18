const BrandFilter = ({ brands, selctedBrand, setSelectedBrand }) => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-6">BRANDS</h1>
      {brands.map((b, index) => (
        <li
          className="list-none flex gap-3 gap-y-5 pb-3 items-center"
          key={index}
        >
          <input
            type="radio"
            onChange={(e) => setSelectedBrand(e.target.value)}
            name="brand"
            value={b}
            id={index}
            checked={selctedBrand === b}
            className="peer appearance-none border-2 border-green-500 rounded-md w-5 h-5 checked:bg-green-500 checked:border-green-500"
          />
          <label
            className="font-thin text-xl peer-checked:text-green-500 peer-checked:font-semibold"
            htmlFor={index}
          >
            {b}
          </label>
        </li>
      ))}
    </div>
  );
};

export default BrandFilter;
