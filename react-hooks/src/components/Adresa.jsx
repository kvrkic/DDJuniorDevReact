import { useState } from "react";

const Adresa = ({ onInputChange }) => {
  const [ime, setIme] = useState("");
  const [drzava, setDrzava] = useState("");
  const [adresa, setAdresa] = useState("");

  const handleImeChange = (event) => {
    const value = event.target.value;
    setIme(value);
    onInputChange(value);
  };
  const handleDrzavaChange = (event) => {
    const value = event.target.value;
    setDrzava(value);
    onInputChange(value);
  };
  const handleAdresaChange = (event) => {
    const value = event.target.value;
    setAdresa(value);
    onInputChange(value);
  };

  return (
    <div className="adresa">
      <h4>Adresa</h4>
      <div className="obrub">
        <label>
          Ime:{" "}
          <input
            type="text"
            id="ime"
            value={ime}
            onChange={handleImeChange}
            required
          />
        </label>
        <label>
          Država:
          <select value={drzava} onChange={handleDrzavaChange}>
            <option>Hrvatska</option>
            <option>Nehrvatska</option>
          </select>
        </label>
        <label>
          Adresa:{" "}
          <input
            type="text"
            id="adresa"
            value={adresa}
            onChange={handleAdresaChange}
            required
          />
        </label>
      </div>
    </div>
  );
};

export default Adresa;
