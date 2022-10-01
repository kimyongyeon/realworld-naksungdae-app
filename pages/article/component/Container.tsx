import FeedToggle from './FeedToggle';
import ArticleList from './ArticleList';
import Sidebar from './Sidebar';

const Container = () => {
  return (
    <>
      <div className="row">
          
          <div className="col-md-9">
              <FeedToggle></FeedToggle>
              <ArticleList></ArticleList>
          </div>

          <div className="col-md-3">
              <Sidebar></Sidebar>
          </div>

      </div>
    </>
  );
};

export default Container;
