const Datum = () => {

    return (
        <div className="date">{new Date().toLocaleDateString()}</div>
    )
}
export default Datum;