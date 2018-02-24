export class Draggable implements ng.IDirective {
	/* tslint:disable:member-ordering */
	static instance(): ng.IDirectiveFactory {
		let directive: ng.IDirectiveFactory = ($document: ng.IDocumentService, $window: ng.IWindowService) => new Draggable($document, $window);
		directive.$inject = ['$document', '$window'];
		return directive;
	}

	constructor(private $document: ng.IDocumentService, private $window: ng.IWindowService) {
		'ngInject';
	}

	/* tslint:disable:no-string-literal */
	public restrict: string = 'A';
	public scope: any = {
		startY: '<',
		startX: '<',
		onCoordinatesChanged: '&'
	};
	public link: ng.IDirectiveLinkFn = (scope: any, elem: ng.IAugmentedJQuery, attrs: any): void => {
		const self: Draggable = this;

		let startX: number = 0;
		let startY: number = 0;

		// set initial position
		let x: number = scope.startX;
		let y: number = scope.startY;

		elem.css({
			position: 'absolute',
			cursor: 'pointer',
			top: y + 'px',
			left: x + 'px'
		});


		function mousemove(event: any): void {
			y = event.pageY - startY;
			x = event.pageX - startX;
			elem.css({
				top: y + 'px',
				left: x + 'px'
			});
		}

		function mouseup(): void {
			scope.onCoordinatesChanged({ coordinates : { x , y } });

			self.$document.unbind('mousemove', mousemove);
			self.$document.unbind('mouseup', mouseup);
		}

		elem.on('mousedown', (event: any): void => {
			event.preventDefault();
			startX = event.pageX - x;
			startY = event.pageY - y;

			this.$document.on('mousemove', mousemove);
			this.$document.on('mouseup', mouseup);
		});
	};
}
