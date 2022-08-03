export const MovieBox = (props) => {

    return (
        <div className={props.className ? "movie last" : "movie"}>
            <div className="movie-image"><span className="play"><span className="name">X-MAN</span></span> <a
                href="#"><img src="css/images/movie1.jpg" alt=""/></a></div>
            <div className="rating">
                <p>RATING</p>
                <div className="stars">
                    <div className="stars-in"></div>
                </div>
                <span className="comments">12</span></div>
        </div>
    )

}
