import {NewsBox} from "./NewsBox";
import {Title} from "../Title";

export const NewsSection = () => {
    return (
        <div id="news">
            <Title />
            <NewsBox />
            <NewsBox />
            <NewsBox />
        </div>
    );
}
