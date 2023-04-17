import "./Podaci.css";

const Podaci = (props) => {
  return (
    <>
      <div className="container">
        <h2>Opći podaci</h2>
        <div className="table">
          <div className="left-column">
            <p>Datum rođenja:</p>
            <p>Adresa:</p>
            <p>Kontakt:</p>
          </div>
          <div className="right-column">
            <p>{props.dateOfBirth}</p>
            <p>{props.address}</p>
            <p>
              {props.email}
              <br />
              {props.phone}
              <br />
              <a href={props.website}>{props.website}</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Podaci;
