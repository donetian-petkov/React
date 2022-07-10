import {Content} from "./mainComponents/Content";
import {News} from "./mainComponents/News";
import {Coming} from "./mainComponents/Coming";

export const Main = () => {

    return (
        <div id="main">
            <Content />
            <News />
            <Coming />
            <div className="cl">&nbsp;</div>
        </div>
    )

}
