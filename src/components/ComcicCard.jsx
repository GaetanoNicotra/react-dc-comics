
function ComcicCard(props) {
    return (
        <div className="card-fumetto">
            <img src={props.src} alt="SUPERMAN" />
            <h6>{props.title}</h6>
        </div>
    )
}

export default ComcicCard
