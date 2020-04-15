import { StateClass } from './state';
import { ViewClass } from './view';
import { stringToConveyor, stringToDirection } from './utils/stringTo'
import { Conveyors } from './types';

const setSize = () => {
	const grid = document.getElementById('grid');
	const width = grid.parentElement.clientWidth;
	const height = grid.parentElement.clientHeight;
	const size = width > height ? height : width;
	grid.style.height = size + "px";
	grid.style.width = size*1.5 + "px";

	if(width > height*1.5){
		grid.style.height = height + "px";
		grid.style.width = height*1.5 + "px";
		console.log("height")
	}
	if(height*1.5 > width) {
		grid.style.height = width*2/3 + "px";
		grid.style.width = width + "px";
		console.log("width")
	}
}

class Controller {
	state: StateClass;
	view: ViewClass;

	constructor() {
		this.state = new StateClass();
		this.view = new ViewClass(this.state.menu.selectedDirection);

		const canvas: HTMLCanvasElement = document.querySelector("#canvas");
		canvas.onclick = this.canvasOnClick;

		const conveyorButtons: NodeListOf<HTMLImageElement> = document.querySelectorAll(".conveyor_buttons");
		conveyorButtons.forEach((button: HTMLImageElement) => {
			button.onclick = this.conveyorButtonOnClick;
		});

		const directionButtons: NodeListOf<HTMLImageElement> = document.querySelectorAll(".direction_buttons");
		directionButtons.forEach((button: HTMLImageElement) => {
			button.onclick = this.directionButtonOnClick;
		});

		// TEMP remove later
		(document.querySelector("#tmpbutton") as HTMLElement).onclick = this.gameLoop.start;
		(document.querySelector("#tmpbutton2") as HTMLElement).onclick = this.gameLoop.stop;
		(document.querySelector("#mover") as HTMLImageElement).onload = this.gameLoop.draw;
		// TEMP

	}

	gameLoop = {
		// Functions and data that relates to the main gameloop
		timerId: undefined,
		isRunning: false,
		update: () => {
			// TODO: Move most of this into state
			if(this.state.box == undefined){
				this.state.box = {
					x: 0,
					y: 0,
					value: this.state.level.input.shift(),
					returned: false
				}
			} else {
				const x = this.state.box.x;
				const y = this.state.box.y;

				this.state.board.grid[x][y].update(this.state.box);
			}

			if(this.state.box.returned){
				// TODO: Move into state as function
				this.state.level.actualOutput.push(this.state.box.value);
				this.state.box = undefined;
			}

			if(this.gameLoop.failureStateDetector()) {
				this.gameLoop.stop();
				console.log("failed");
				return;
			}

			if(this.state.level.actualOutput.length === this.state.level.expectedOutput.length) {
				this.gameLoop.stop();
				console.log("ya did it")
				// TODO: Add level completion handling
				return;
			}

			this.gameLoop.draw();
		},

		draw: () => {
			this.view.drawCells(this.state.board.grid, this.state.level.size);
			this.view.drawBox(this.state.box, this.state.level.size);
		},

		failureStateDetector: () => {
			// TODO: Move into state
			const wrongNumber = !this.state.level.actualOutput.every((value, index) => (
				value === this.state.level.expectedOutput[index]
			));

			if(this.state.box === undefined) {
				return wrongNumber;
			}

			const failure = (
				this.state.box.x < 0 ||
				this.state.box.y < 0 ||
				this.state.box.x >= this.state.level.size ||
				this.state.box.y >= this.state.level.size
			)

			// TODO: Add displaying reason for failure

			return failure;
		},

		start: () => {
			if(this.gameLoop.isRunning) return;
			this.gameLoop.isRunning = true;
			this.state.level.input = [...this.state.level.initialInput];
			this.gameLoop.timerId = setInterval(this.gameLoop.update, 300);
		},

		stop: () => {
			this.gameLoop.isRunning = false;
			clearInterval(this.gameLoop.timerId);

			this.state.box = undefined;
			this.state.board.memory = {
				A:0,
				B:0,
				C:0
			}
			this.state.level.actualOutput = []

			this.gameLoop.draw();
		},
	}

	conveyorButtonOnClick = (e: MouseEvent) => {
		const element = (e.target as HTMLImageElement);
		this.state.menu.selectedConveyor = stringToConveyor(element.id);
		this.view.setConveyorButtonBorderColor(element);
	}

	directionButtonOnClick = (e: MouseEvent) => {
		const element = (e.target as HTMLImageElement);
		this.state.menu.selectedDirection = stringToDirection(element.id);
		this.view.updateConveyorButtonImages(this.state.menu.selectedDirection);
	}

	canvasOnClick = (e: MouseEvent) => {
			if(this.gameLoop.isRunning) return;

			const divisor = (e.target as HTMLElement).clientHeight/this.state.level.size;

			const xclick = Math.floor(e.offsetX/divisor);
			const yclick = Math.floor(e.offsetY/divisor);

			if(xclick == 0 && yclick == 0) {
				return;
			}

			this.state.board.updateGrid(xclick, yclick);

			this.gameLoop.draw()
	}
}

window.onload = setSize;
window.onresize = setSize;

new Controller();