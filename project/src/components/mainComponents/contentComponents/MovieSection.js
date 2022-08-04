import {MovieBox} from "./MovieBox";
import {Title} from "../Title";

export const MovieSection = (props) => {

    return (
        <div className="box">
            <Title title={props.title}/>
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
