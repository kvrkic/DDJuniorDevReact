import { useState } from "react";

const NacinPlacanja = ({ onInputChange }) => {
  const [nacinPlacanja, setNacinPlacanja] = useState("Pouzeće");

  const handleNacinPlacanjaChange = (event) => {
    const value = event.target.value;
    setNacinPlacanja(value);
    onInputChange("nacinPlacanja", value);
  };
  return (
    <div className="nacin-placanja">
      <h4>Način plaćanja:</h4>
      <div className="obrub">
        <label className="nacin-placanjaInput">
          <input
            type="radio"
            value="Pouzeće"
            checked={nacinPlacanja === "Pouzeće"}
            onChange={handleNacinPlacanjaChange}
            name="nacinPlacanja"
          />
          &nbsp; Pouzeće
        </label>
        <label className="nacin-placanjaInput">
          <input
            type="radio"
            value="Kartica"
            checked={nacinPlacanja === "Kartica"}
            onChange={handleNacinPlacanjaChange}
            name="nacinPlacanja"
          />
          &nbsp; Kartica
        </label>
      </div>
    </div>
  );
};

export default NacinPlacanja;
