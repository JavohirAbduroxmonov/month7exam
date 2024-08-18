import { useState } from "react";

const ProductFilter = ({ filter, setFilter }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    setFilter(value); // Filter state-ni tanlangan qiymat bilan yangilash
  };

  return (
    <div>
      <div className="flex justify-between px-16 bg-filtredBack text-filtered py-5 max-sm:px-5 max-sm:py-2 text-2xl mt-10 max-sm:text-lg items-center">
        <p>Filter by:</p>
        <div className="flex items-center">
          <select
            value={selectedOption}
            onChange={handleSelectChange}
            className="flex items-center gap-1"
          >
            <option value="">Sort By Price</option>
            <option value="Arzon">Arzon</option>
            <option value="Qimmat">Qimmat</option>
          </select>
        </div>
      </div>

      <footer>
        <div className="">

        </div>
      </footer>
    </div>
  );
};

export default ProductFilter;
