const Sazetak = ({ parentComponent, pokaziSazetak }) => {
  const handleOnClick = () => {
    window.location.reload();
  };
  return (
    <div>
      {pokaziSazetak && (
        <div>
          <h4>Sažetak plaćanja</h4>
          <div className="obrub">
            {pokaziSazetak && (
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td>E-mail: </td>
                      <td>{parentComponent.email}</td>
                    </tr>
                    <tr>
                      <td>Ime: </td>
                      <td>{parentComponent.ime}</td>
                    </tr>
                    <tr>
                      <td>Država: </td>
                      <td>{parentComponent.drzava}</td>
                    </tr>
                    <tr>
                      <td>Adresa: </td>
                      <td>{parentComponent.adresa}</td>
                    </tr>
                    <tr>
                      <td>Način plaćanja: </td>
                      <td>{parentComponent.nacinPlacanja}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {pokaziSazetak && (
              <button onClick={handleOnClick}>Novo plaćanje</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sazetak;
