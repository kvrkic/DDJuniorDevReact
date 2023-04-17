const Brojac = (props) => {
    let minutes = Math.floor(props.time / 60);
    let seconds = props.time % 60;

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    return (
        <div className="time">{minutes}:{seconds}</div>
    )
}
export default Brojac;