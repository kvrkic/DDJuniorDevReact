import { useState } from "react";
import Adresa from "./Adresa";
import Kontakt from "./Kontakt";
import NacinPlacanja from "./NacinPlacanja";
import Sazetak from "./Sazetak";
import UvjetiNarudzbe from "./UvjetiNarudzbe";

const Placanje = () => {
  const [parentValue, setParentValue] = useState([]);

  function handleParentValueChange(value) {
    setParentValue(value);
  }
  return (
    <div className="container">
      <div>
        {"Račun -->"} <strong>Plaćanje</strong>
      </div>
      <Kontakt onInputChange={handleParentValueChange} />
      <Adresa onInputChange={handleParentValueChange} />
      <NacinPlacanja onInputChange={handleParentValueChange} />
      <UvjetiNarudzbe onInputChange={handleParentValueChange} />
      <div className="button">
        <button>Naruči</button>
      </div>
      <Sazetak parentComponent={parentValue} />
    </div>
  );
};

export default Placanje;
