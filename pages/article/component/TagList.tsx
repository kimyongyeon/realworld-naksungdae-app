import Container from './TagDefault';

const Sidebar = () => {
  return (
    <>
        {/* ngRepeat: tagName in $ctrl.tags */}
        <a href="" className="tag-default tag-pill ng-binding ng-scope" ng-click="$ctrl.changeList({ type: 'all', filters: { tag: tagName } })" ng-repeat="tagName in $ctrl.tags" ng-bind="tagName">implementations</a>
        {/* end ngRepeat: tagName in $ctrl.tags */}
        <TagDefault></TagDefault>
        <a href="" className="tag-default tag-pill ng-binding ng-scope" ng-click="$ctrl.changeList({ type: 'all', filters: { tag: tagName } })" ng-repeat="tagName in $ctrl.tags" ng-bind="tagName">welcome</a>
        {/* end ngRepeat: tagName in $ctrl.tags */}
        <a href="" className="tag-default tag-pill ng-binding ng-scope" ng-click="$ctrl.changeList({ type: 'all', filters: { tag: tagName } })" ng-repeat="tagName in $ctrl.tags" ng-bind="tagName">introduction</a>
        {/* end ngRepeat: tagName in $ctrl.tags */}
        <a href="" className="tag-default tag-pill ng-binding ng-scope" ng-click="$ctrl.changeList({ type: 'all', filters: { tag: tagName } })" ng-repeat="tagName in $ctrl.tags" ng-bind="tagName">codebaseShow</a>
        {/* end ngRepeat: tagName in $ctrl.tags */}
        </>
  );
};

export default Sidebar;
