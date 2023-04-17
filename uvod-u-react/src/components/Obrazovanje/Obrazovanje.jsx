const Obrazovanje = (props) => {
  const { schools } = props;
  return (
    <>
      <div className="container">
        <h2>Obrazovanje</h2>
        {schools.map((school) => (
          <div key={school.id}>
            <p>{school.date}</p>
            <p>
              <strong>{school.degree}</strong>
            </p>
            <p>{school.institution}</p>
            <br />
          </div>
        ))}
      </div>
    </>
  );
};

export default Obrazovanje;
