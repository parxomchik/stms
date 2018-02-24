/* tslint:disable:no-unused-variable */
let envReleaseName: string = '<% STRATEGY_NAME %>';


export const wrapper: boolean = envReleaseName.match('<%') ? false : true;
