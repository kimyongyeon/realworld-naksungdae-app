import Container from './NavItem';

const FeedToggle = () => {
  return (
    <ul className="nav nav-pills outline-active">

        <li class="nav-item" show-authed="true" style="display: none;">
            <a href="" class="nav-link" ng-class="{ active: $ctrl.listConfig.type === 'feed' }" ng-click="$ctrl.changeList({ type: 'feed' })">
            Your Feed
            </a>
        </li>

        <li class="nav-item">
            <a href="" class="nav-link active" ng-class="{ active: $ctrl.listConfig.type === 'all' &amp;&amp; !$ctrl.listConfig.filters }" ng-click="$ctrl.changeList({ type: 'all' })">
            Global Feed
            </a>
        </li>

        <li class="nav-item ng-hide" ng-show="$ctrl.listConfig.filters.tag">
            <a href="" class="nav-link active ng-binding">
                <i class="ion-pound"></i> 
            </a>
        </li>

    </ul>
  );
};

export default FeedToggle;
