import { useState } from "react";
import Adresa from "./Adresa";
import Kontakt from "./Kontakt";
import NacinPlacanja from "./NacinPlacanja";
import Sazetak from "./Sazetak";
import UvjetiNarudzbe from "./UvjetiNarudzbe";

const initialState = {
  email: "",
  ime: "",
  drzava: "Hrvatska",
  adresa: "",
  nacinPlacanja: "Pouzeće",
  uvjetiNarudzbe: "false",
};

const Placanje = () => {
  const [parentValue, setParentValue] = useState(initialState);
  const [pokaziSazetak, setPokaziSazetak] = useState(false);

  function handleParentValueChange(name, value) {
    setParentValue({ ...parentValue, [name]: value });
  }

  function handleOnClick() {
    if (!parentValue.email.includes("@")) {
      alert("E-mail mora sadržavati znak @");
      return;
    }
    if (parentValue.ime.length < 3) {
      alert("Ime mora biti duže od 2 slova");
      return;
    }
    if (parentValue.adresa.length < 3) {
      alert("Adresa mora biti duža od 2 slova");
      return;
    }
    if (parentValue.uvjetiNarudzbe === "false") {
      alert("Morate prihvatiti uvjete narudžbe");
      return;
    }
    setPokaziSazetak(true);
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
        {pokaziSazetak || <button onClick={handleOnClick}>Naruči</button>}
      </div>
      <Sazetak parentComponent={parentValue} pokaziSazetak={pokaziSazetak} />
    </div>
  );
};

export default Placanje;
