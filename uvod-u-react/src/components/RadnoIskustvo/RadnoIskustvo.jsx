const RadnoIskustvo = (props) => {
  const { jobs } = props;
  return (
    <>
      <div className="container">
        <h2>Radno iskustvo</h2>
        {jobs.map((job) => (
          <div key={job.id}>
            <p>{job.dateAndCity}</p>
            <p>
              <strong>{job.title}</strong>
            </p>
            <p>{job.company}</p>
            <p>{job.description}</p>
            <br />
          </div>
        ))}
      </div>
    </>
  );
};

export default RadnoIskustvo;
