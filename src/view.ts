import { Direction, Conveyors } from "./types";
import {getImage} from "./image-loader"
import { stringToConveyor } from "./utils/stringTo";
import { Base } from "./objects/conveyors";

export class ViewClass {
	canvas: HTMLCanvasElement;
	ctx: CanvasRenderingContext2D;
	menuButtons: NodeListOf<HTMLImageElement>;
	conveyorButtons: NodeListOf<HTMLImageElement>;
	directionButtons: NodeListOf<HTMLImageElement>;

	constructor(direction: Direction){
		this.canvas = document.querySelector('#canvas');
		this.ctx = this.canvas.getContext('2d');
		this.initializeCanvas();

		this.menuButtons = document.querySelectorAll(".menu_buttons");
		this.conveyorButtons = document.querySelectorAll(".conveyor_buttons");
		this.directionButtons = document.querySelectorAll(".direction_buttons");
		this.initializeButtons(direction);
	}

	drawBox = (box, size) => {

		if(box == undefined) return;

		const width = this.canvas.width;
		const height = this.canvas.height;
		
		this.ctx.fillStyle = "#000000";
		this.ctx.fillRect(width/size*box.x,height/size*box.y, width/size, height/size);
	}

	drawCells = (grid: Array<Array<Base>>, size: number) => {
		const width = this.canvas.width;
		const height = this.canvas.height;

		for(var x = 0; x < grid.length; x++){
			for(var y = 0; y < grid.length; y++){
				const conveyor = grid[x][y];

				const img = getImage(
					conveyor.direction,
					conveyor.type
				)

				this.ctx.drawImage(
					img,
					width/size*x, height/size*y,
					width/size, height/size);
					// TODO: Modify to draw 0,0 as special cell
			}
		}
	}

	initializeCanvas = () => {
		// TODO: Resize on level change
		this.canvas.setAttribute("height", "48")
		this.canvas.setAttribute("width", "48")
		this.ctx.fillStyle = "#eeeeee";
		this.ctx.fillRect(0,0,this.canvas.width, this.canvas.height)
	}

	setConveyorButtonBorderColor = (element: HTMLImageElement) => {
		const buttons = document.querySelectorAll(".conveyor_buttons")
		buttons.forEach((button: HTMLImageElement) => {
			button.style.borderColor = "#000000"
		});
		element.style.borderColor = "#00FF00";
	}

	initializeButtons = (direction: Direction) => {
		this.updateConveyorButtonImages(direction);

		this.directionButtons.forEach((element: HTMLImageElement) => {
			let direction = undefined;
			switch(element.id){
				case 'up':
					direction = Direction.Up;
					break;
				case 'down':
					direction = Direction.Down;
					break;
				case 'left':
					direction = Direction.Left;
					break;
				case 'right':
					direction = Direction.Right;
					break;
			}
			const imageSource = getImage(direction,Conveyors.Mover).src;
			element.setAttribute('src', imageSource);
		});

		(document.querySelector("#base") as HTMLImageElement).style.borderColor = "#00FF00";

		this.menuButtons.forEach((element: HTMLImageElement) => {
			element.ondragstart = (e) => {
				e.preventDefault();
			}
		});
	}

	updateConveyorButtonImages = (direction: Direction) => {
		this.conveyorButtons.forEach((element: HTMLImageElement) => {
			const imageSource = getImage(direction, stringToConveyor(element.getAttribute('id'))).src;
			element.setAttribute('src', imageSource);
		});
	}
}