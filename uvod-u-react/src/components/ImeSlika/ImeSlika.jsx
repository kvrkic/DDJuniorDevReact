import "./ImeSlika.css";

const ImeSlika = (props) => {
  return (
    <>
      <div className="imeslika">
        <img src="/karlo.png" alt="Karlo slika" className="slika" />
        <h1>{props.name}</h1>
      </div>
    </>
  );
};

export default ImeSlika;
