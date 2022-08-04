import {MovieContent} from "./mainComponents/contentComponents/MovieContent";
import {NewsSection} from "./mainComponents/newsComponents/NewsSection";
import {ComingSoonSection} from "./mainComponents/comingSoonComponents/ComingSoonSection";

export const Main = () => {

    return (
        <div id="main">
            <MovieContent />
            <NewsSection />
            <ComingSoonSection />
            <div className="cl">&nbsp;</div>
        </div>
    )

}
