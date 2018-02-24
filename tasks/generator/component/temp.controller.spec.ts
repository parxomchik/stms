import controller from './<%= name %>.controller';

/* tslint:disable:variable-name */

describe('<%= upCaseName %>', () => {

    let sut: controller;
    let $q: ng.IQService;
    let deferred: ng.IDeferred<any>;
    let $scope: ng.IScope;

    beforeEach(inject((
        _$q_: ng.IQService,
        _$rootScope_: ng.IRootScopeService
    ) => {
        $scope = _$rootScope_.$new();
        $q = _$q_;
        deferred = _$q_.defer();
        sut = new controller();
    }));

});
