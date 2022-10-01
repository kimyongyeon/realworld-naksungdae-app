import { css } from 'styles/globals.css';

const Article = () => {
  return (
    <div className="home-page ng-scope">

        <div className="banner" show-authed="false" style="display: inherit;">
            <div className="container">
                <h1 className="logo-font ng-binding" ng-bind="::$ctrl.appName | lowercase">conduit</h1>
                <p>A place to share your knowledge.</p>
            </div>
        </div>

        <div className="container page">
        <div className="row">

            <div className="col-md-9">
            <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">

                <li className="nav-item" show-authed="true" style="display: none;">
                    <a href="" className="nav-link" ng-className="{ active: $ctrl.listConfig.type === 'feed' }" ng-click="$ctrl.changeList({ type: 'feed' })">
                    Your Feed
                    </a>
                </li>

                <li className="nav-item">
                    <a href="" className="nav-link active" ng-className="{ active: $ctrl.listConfig.type === 'all' &amp;&amp; !$ctrl.listConfig.filters }" ng-click="$ctrl.changeList({ type: 'all' })">
                    Global Feed
                    </a>
                </li>

                <li className="nav-item ng-hide" ng-show="$ctrl.listConfig.filters.tag">
                    <a href="" className="nav-link active ng-binding">
                    <i className="ion-pound"></i> 
                    </a>
                </li>

                </ul>
            </div>

            <article-list limit="10" list-config="$ctrl.listConfig" className="ng-isolate-scope"><!-- ngRepeat: article in $ctrl.list --><article-preview article="article" ng-repeat="article in $ctrl.list" className="ng-scope ng-isolate-scope"><div className="article-preview">
        <article-meta article="$ctrl.article" className="ng-isolate-scope"><div className="article-meta">
        <a ui-sref="app.profile.main({ username:$ctrl.article.author.username })" href="#/@Gerome">
        <img ng-src="https://api.realworld.io/images/demo-avatar.png" src="https://api.realworld.io/images/demo-avatar.png">
        </a>

        <div className="info">
        <a className="author ng-binding" ui-sref="app.profile.main({ username:$ctrl.article.author.username })" ng-bind="$ctrl.article.author.username" href="#/@Gerome">Gerome</a>
        <span className="date ng-binding" ng-bind="$ctrl.article.createdAt | date: 'longDate' ">November 24, 2021</span>
        </div>

        <ng-transclude>
        <favorite-btn article="$ctrl.article" className="pull-xs-right ng-scope ng-isolate-scope"><button className="btn btn-sm btn-outline-primary" ng-className="{ 'disabled': $ctrl.isSubmitting,
                    'btn-outline-primary': !$ctrl.article.favorited,
                    'btn-primary': $ctrl.article.favorited }" ng-click="$ctrl.submit()">

        <i className="ion-heart"></i> <ng-transclude><span className="ng-binding ng-scope">
            4057
        </span></ng-transclude>

        </button>
        </favorite-btn>
        </ng-transclude>
        </div>
        </article-meta>

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
        </div>
        </article-preview><article-preview article="article" ng-repeat="article in $ctrl.list" className="ng-scope ng-isolate-scope"><div className="article-preview">
        <article-meta article="$ctrl.article" className="ng-isolate-scope">
            <div className="article-meta">
        <a ui-sref="app.profile.main({ username:$ctrl.article.author.username })" href="#/@Gerome">
        <img ng-src="https://api.realworld.io/images/demo-avatar.png" src="https://api.realworld.io/images/demo-avatar.png">
        </a>

        <div className="info">
        <a className="author ng-binding" ui-sref="app.profile.main({ username:$ctrl.article.author.username })" ng-bind="$ctrl.article.author.username" href="#/@Gerome">Gerome</a>
        <span className="date ng-binding" ng-bind="$ctrl.article.createdAt | date: 'longDate' ">November 24, 2021</span>
        </div>

        <ng-transclude>
        <favorite-btn article="$ctrl.article" className="pull-xs-right ng-scope ng-isolate-scope"><button className="btn btn-sm btn-outline-primary" ng-className="{ 'disabled': $ctrl.isSubmitting,
                    'btn-outline-primary': !$ctrl.article.favorited,
                    'btn-primary': $ctrl.article.favorited }" ng-click="$ctrl.submit()">

        <i className="ion-heart"></i> <ng-transclude><span className="ng-binding ng-scope">
            2333
        </span></ng-transclude>

        </button>
        </favorite-btn>
        </ng-transclude>
        </div>
        </article-meta>

        <a ui-sref="app.article({ slug: $ctrl.article.slug })" className="preview-link" href="#/article/Explore-implementations-1">
        <h1 ng-bind="$ctrl.article.title" className="ng-binding">Explore implementations</h1>
        <p ng-bind="$ctrl.article.description" className="ng-binding">discover the implementations created by the RealWorld community</p>
        <span>Read more...</span>
        <ul className="tag-list">
            <li className="tag-default tag-pill tag-outline ng-binding ng-scope" ng-repeat="tag in $ctrl.article.tagList">
            codebaseShow
            </li>
            <li className="tag-default tag-pill tag-outline ng-binding ng-scope" ng-repeat="tag in $ctrl.article.tagList">
            implementations
            </li>
        </ul>
        </a>
        </div>
        </article-preview><!-- end ngRepeat: article in $ctrl.list --><article-preview article="article" ng-repeat="article in $ctrl.list" className="ng-scope ng-isolate-scope"><div className="article-preview">
        <article-meta article="$ctrl.article" className="ng-isolate-scope"><div className="article-meta">
        <a ui-sref="app.profile.main({ username:$ctrl.article.author.username })" href="#/@Gerome">
        <img ng-src="https://api.realworld.io/images/demo-avatar.png" src="https://api.realworld.io/images/demo-avatar.png">
        </a>

        <div className="info">
        <a className="author ng-binding" ui-sref="app.profile.main({ username:$ctrl.article.author.username })" ng-bind="$ctrl.article.author.username" href="#/@Gerome">Gerome</a>
        <span className="date ng-binding" ng-bind="$ctrl.article.createdAt | date: 'longDate' ">November 24, 2021</span>
        </div>

        <ng-transclude>
        <favorite-btn article="$ctrl.article" className="pull-xs-right ng-scope ng-isolate-scope"><button className="btn btn-sm btn-outline-primary" ng-className="{ 'disabled': $ctrl.isSubmitting,
                    'btn-outline-primary': !$ctrl.article.favorited,
                    'btn-primary': $ctrl.article.favorited }" ng-click="$ctrl.submit()">

        <i className="ion-heart"></i> <ng-transclude><span className="ng-binding ng-scope">
            1677
        </span></ng-transclude>

        </button>
        </favorite-btn>
        </ng-transclude>
        </div>
        </article-meta>

        <a ui-sref="app.article({ slug: $ctrl.article.slug })" className="preview-link" href="#/article/Welcome-to-RealWorld-project-1">
        <h1 ng-bind="$ctrl.article.title" className="ng-binding">Welcome to RealWorld project</h1>
        <p ng-bind="$ctrl.article.description" className="ng-binding">Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more</p>
        <span>Read more...</span>
        <ul className="tag-list">
            <li className="tag-default tag-pill tag-outline ng-binding ng-scope" ng-repeat="tag in $ctrl.article.tagList">
            welcome
            </li>
            <li className="tag-default tag-pill tag-outline ng-binding ng-scope" ng-repeat="tag in $ctrl.article.tagList">
            introduction
            </li>
        </ul>
        </a>
        </div>

        <div className="article-preview ng-hide" ng-hide="!$ctrl.loading">
        Loading articles...
        </div>

        <div className="article-preview ng-hide" ng-show="!$ctrl.loading &amp;&amp; !$ctrl.list.length">
        No articles are here... yet.
        </div>

        <list-pagination total-pages="$ctrl.listConfig.totalPages" current-page="$ctrl.listConfig.currentPage" ng-hide="$ctrl.listConfig.totalPages <= 1" className="ng-isolate-scope ng-hide"><nav>
        <ul className="pagination">

        <li className="page-item ng-scope active" ng-className="{active: pageNumber === $ctrl.currentPage }" ng-repeat="pageNumber in $ctrl.pageRange($ctrl.totalPages)" ng-click="$ctrl.changePage(pageNumber)">

            <a className="page-link ng-binding" href="">1</a>

        </li>

        </ul>
        </nav>
        </list-pagination>
        </article-list>

            </div>

            <div className="col-md-3">
            <div className="sidebar">

                <p>Popular Tags</p>

                <div className="tag-list" ng-show="$ctrl.tags">
                <!-- ngRepeat: tagName in $ctrl.tags --><a href="" className="tag-default tag-pill ng-binding ng-scope" ng-click="$ctrl.changeList({ type: 'all', filters: { tag: tagName } })" ng-repeat="tagName in $ctrl.tags" ng-bind="tagName">implementations</a><!-- end ngRepeat: tagName in $ctrl.tags --><a href="" className="tag-default tag-pill ng-binding ng-scope" ng-click="$ctrl.changeList({ type: 'all', filters: { tag: tagName } })" ng-repeat="tagName in $ctrl.tags" ng-bind="tagName">welcome</a><!-- end ngRepeat: tagName in $ctrl.tags --><a href="" className="tag-default tag-pill ng-binding ng-scope" ng-click="$ctrl.changeList({ type: 'all', filters: { tag: tagName } })" ng-repeat="tagName in $ctrl.tags" ng-bind="tagName">introduction</a><!-- end ngRepeat: tagName in $ctrl.tags --><a href="" className="tag-default tag-pill ng-binding ng-scope" ng-click="$ctrl.changeList({ type: 'all', filters: { tag: tagName } })" ng-repeat="tagName in $ctrl.tags" ng-bind="tagName">codebaseShow</a><!-- end ngRepeat: tagName in $ctrl.tags -->
                </div>

                <div ng-show="!$ctrl.tagsLoaded" className="ng-hide">
                Loading tags...
                </div>

                <div className="post-preview ng-hide" ng-show="$ctrl.tagsLoaded &amp;&amp; !$ctrl.tags.length">
                No tags are here... yet.
                </div>

            </div>
            </div>

        </div>
        </div>

    </div>
  );
};
export default Article;
