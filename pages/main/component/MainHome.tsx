import Banner from "./mainHome/Banner";
import Feed from "./mainHome/Feed";
import FeedMenu from "./mainHome/FeedMenu";
import TagList from "./mainHome/TagList";

const MainHome = () => {
    return(
        <>
        <div className="home-page">

            <Banner/>

            <div className="container page">
                <div className="row">

                    <div className="col-md-9">
                        <FeedMenu/>
                        <Feed/>
                    </div>

                    <div className="col-md-3">
                        <div className="sidebar">
                            <TagList/>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        </>
    );
};

export default MainHome;