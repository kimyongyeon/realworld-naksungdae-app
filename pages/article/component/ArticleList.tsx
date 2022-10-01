
import Container from './ArticlePreview';

const ArticleList = () => {
  return (
    <ArticleList limit="10" list-config="" className="ng-isolate-scope">

      <article-preview article="article" ng-repeat="article in $ctrl.list" className="ng-scope ng-isolate-scope">

        

        <ArticlePreview></ArticlePreview> 

        <list-pagination total-pages="$ctrl.listConfig.totalPages" current-page="$ctrl.listConfig.currentPage" ng-hide="$ctrl.listConfig.totalPages <= 1" className="ng-isolate-scope ng-hide"><nav>
        <ul className="pagination">

        <!-- ngRepeat: pageNumber in $ctrl.pageRange($ctrl.totalPages) --><li className="page-item ng-scope active" ng-className="{active: pageNumber === $ctrl.currentPage }" ng-repeat="pageNumber in $ctrl.pageRange($ctrl.totalPages)" ng-click="$ctrl.changePage(pageNumber)">

            <a className="page-link ng-binding" href="">1</a>

        </li><!-- end ngRepeat: pageNumber in $ctrl.pageRange($ctrl.totalPages) -->

        </ul>
        </nav>
        </list-pagination>
    </ArticleList>
  );
};

export default ArticleList;
