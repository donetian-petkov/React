import {MovieBox} from "./MovieBox";

export const MovieSection = (props) => {

    return (
        <div className="box">
            <div className="head">
                <h2>LATEST TRAILERS</h2>
                <p className="text-right"><a href="#">See all</a></p>
            </div>
            <MovieBox />
            <MovieBox />
            <MovieBox />
            <MovieBox />
            <MovieBox />
            <MovieBox className="last"/>
            <div className="cl">&nbsp;</div>
        </div>
    )

}
