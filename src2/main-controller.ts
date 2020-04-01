import * as view from './view/main-view';
import { Direction } from './types';

class Controller {
	constructor() {
		this.initializeView(Direction.Down);
	}

	initializeView = (direction: Direction) => {
		view.initializeView(
			document.querySelectorAll('.menu_buttons'),
			document.querySelector('#grid'),
			document.querySelector('#canvas'),
			direction
			)
	}
}

new Controller();