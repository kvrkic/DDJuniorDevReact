import "./Sposobnosti.css";
const Sposobnosti = (props) => {
  return (
    <>
      <div className="container">
        <h2>Sposobnosti</h2>
        <p>
          JavaScript
          <progress value={props.javascript} max="100"></progress>
        </p>
        <p>
          HTML<progress value={props.html} max="100"></progress>
        </p>
        <p>
          CSS<progress value={props.css} max="100"></progress>
        </p>
        <p>
          C, C++<progress value={props.c} max="100"></progress>
        </p>
        <p>
          Python<progress value={props.python} max="100"></progress>
        </p>
      </div>
    </>
  );
};

export default Sposobnosti;
