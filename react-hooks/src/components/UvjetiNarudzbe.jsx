import { useState } from "react";

const UvjetiNarudzbe = ({ onInputChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    const value = !isChecked;
    setIsChecked(value);
    onInputChange("uvjetiNarudzbe", `${value}`);
  };
  return (
    <div className="uvjeti-narudzbe">
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        &nbsp; Prihvaćam uvjete narudžbe
      </label>
    </div>
  );
};

export default UvjetiNarudzbe;
