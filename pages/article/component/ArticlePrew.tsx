
import Container from './TagList';

const ArticlePrew= () => {
  return (
    <a ui-sref="app.article({ slug: $ctrl.article.slug })" className="preview-link" href="#/article/Create-a-new-implementation-1">
        <h1 ng-bind="$ctrl.article.title" className="ng-binding">Create a new implementation</h1>
        <p ng-bind="$ctrl.article.description" className="ng-binding">join the community by creating a new implementation</p>
        <span>Read more...</span>
        <ul className="tag-list">
            <li className="tag-default tag-pill tag-outline ng-binding ng-scope" ng-repeat="tag in $ctrl.article.tagList">
            implementations
            </li>
        </ul>
    </a>
  );
};

export default ArticlePrew;
