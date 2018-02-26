import * as angular from 'angular';

describe('root module', () => {
	describe('during initialization', () => {
		it('is alive', () => {
			expect(angular).toBeDefined;
		});
	});
});
