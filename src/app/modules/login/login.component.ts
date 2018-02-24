import controller from './login.controller';

export default class LoginComponent implements ng.IComponentOptions {
    public controller: any;
    public template: string;
    public controllerAs: string;

    constructor() {
        this.controller = controller;
        this.controllerAs = 'vm';
        this.template = require('./login.partial.html');
    }
}
