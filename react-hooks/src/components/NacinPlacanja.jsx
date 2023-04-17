import { useState } from "react";

const NacinPlacanja = ({ onInputChange }) => {
  const [paymentMethod, setPaymentMethod] = useState("Pouzeće");

  const handlePaymentMethodChange = (event) => {
    const value = event.target.value;
    setPaymentMethod(value);
    onInputChange(value);
  };
  return (
    <div className="nacin-placanja">
      <h4>Način plaćanja:</h4>
      <div className="obrub">
        <label className="nacin-placanjaInput">
          <input
            type="radio"
            value="Pouzeće"
            checked={paymentMethod === "Pouzeće"}
            onChange={handlePaymentMethodChange}
            name="paymentMethod"
          />
          &nbsp; Pouzeće
        </label>
        <label className="nacin-placanjaInput">
          <input
            type="radio"
            value="Kartica"
            checked={paymentMethod === "Kartica"}
            onChange={handlePaymentMethodChange}
            name="paymentMethod"
          />
          &nbsp; Kartica
        </label>
      </div>
    </div>
  );
};

export default NacinPlacanja;
