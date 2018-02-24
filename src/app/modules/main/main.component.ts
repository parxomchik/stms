import controller from './main.controller';

export default class MainComponent implements ng.IComponentOptions {
    public controller: any;
    public template: string;
    public controllerAs: string;

    constructor() {
        this.controller = controller;
        this.controllerAs = 'vm';
        this.template = require('./main.partial.html');
    }
}
