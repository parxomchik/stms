import controller from './<%= name %>.controller';

export default class <%= upCaseName %>Component implements ng.IComponentOptions {
    public controller: any;
    public template: string;
    public controllerAs: string;

    constructor() {
        this.controller = controller;
        this.controllerAs = 'vm';
        this.template = require('./<%= name %>.partial.html');
    }
}
