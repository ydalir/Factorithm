import * as view from './view/main-view';
import mdl from './model/main-model';
import { Direction } from './types';

class Controller {
	isRunning: Boolean = false;
	interval: number;
	model: mdl;

	constructor() {
		this.model = new mdl();

		view.initializeView(
			document.querySelectorAll('.menu_buttons'),
			document.querySelector('#grid'),
			document.querySelector('#canvas'),
			Direction.Down
		);

		view.setDirectionOnClick(
			this.directionOnClick,
			document.querySelectorAll('.menu_direction')
		);

		view.setCanvasOnClick(
			this.canvasOnClick,
			document.querySelector('#canvas')
		);
	}

	canvasOnClick = (e: MouseEvent) => {
		const divisor = (e.target as HTMLElement).clientHeight/this.model.level.levelSize;

		const xclick = Math.floor(e.offsetX/divisor);
		const yclick = Math.floor(e.offsetY/divisor);

		this.model.board.updateGrid(xclick, yclick);

		this.updateView();
	}

	directionOnClick = (e: MouseEvent) => {
		const img: HTMLImageElement = e.currentTarget as HTMLImageElement
		const id = img.getAttribute('id');
		switch(id){
			case 'up':
				this.model.menu.selectedDirection = Direction.Up;
				break;
			case 'down':
				this.model.menu.selectedDirection = Direction.Down;
				break;
			case 'left':
				this.model.menu.selectedDirection = Direction.Left;
				break;
			case 'right':
				this.model.menu.selectedDirection = Direction.Right;
				break;
			default:
				break;
		}
		this.updateView();
	}

	updateView = () => {
		view.setDirectionBorder(this.model.menu.selectedDirection);
		view.drawGrid(
			(document.querySelector('#canvas') as HTMLCanvasElement).getContext("2d"),
			this.model.board.grid,
			Direction.Down
		);
	}
}

new Controller();