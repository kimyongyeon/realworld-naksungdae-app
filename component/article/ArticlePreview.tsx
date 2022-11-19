import { Article } from '@src/lib/type/articleType';

const ArticlePreview = ({ article }: { article: Article }) => {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <a href="profile.html">
          <img src="http://i.imgur.com/Qr71crq.jpg" />
        </a>
        <div className="info">
          <a href="" className="author">
            {article.author.username}
          </a>
          <span className="date">January 20th</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> 29
        </button>
      </div>
      <a href="" className="preview-link">
        <h1>{article.title.substring(0, 20)}</h1>
        <p>This is the description for the post.</p>
        <span>Read more...</span>
      </a>
    </div>
  );
};

export default ArticlePreview;
