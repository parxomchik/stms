import * as angular from 'angular';

describe('event performance root module', () => {
	describe('during initialization', () => {
		it('is alive', () => {
			expect(angular).toBeDefined;
		});
	});
});
