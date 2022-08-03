import {Content} from "./mainComponents/Content";
import {News} from "./mainComponents/News";
import {ComingSoon} from "./mainComponents/ComingSoon";

export const Main = () => {

    return (
        <div id="main">
            <Content />
            <News />
            <ComingSoon />
            <div className="cl">&nbsp;</div>
        </div>
    )

}
