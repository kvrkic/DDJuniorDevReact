import { useState } from "react";

const Kontakt = ({ onInputChange }) => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    onInputChange("email", value);
  };
  return (
    <div className="kontakt">
      <h4>Kontakt</h4>
      <div className="obrub">
        <input
          type="email"
          placeholder="Email adresa..."
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
    </div>
  );
};

export default Kontakt;
