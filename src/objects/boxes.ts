import { Base } from './conveyors';
import { Level } from '../types';
import { Board } from './board';

class BoxHandler {
	boxes: Box[] = [];
	boxIndex: number = 0;

	update(level: Level, boardState: Board, reset: any) {
		if(this.boxes.length == 0) {this.boxes.push(new Box(Math.floor(boardState.size/2),0,
			level.input[this.boxIndex]))}

		else {this.boxes.forEach((box) => {box.update(boardState.board)});}

		// rename
		const endBox = this.boxes.find((box: Box) => {
			const x = box.x == Math.floor(boardState.size/2);
			const y = box.y == boardState.size
			return x && y;
		});

		if(endBox) {
			// make this less confusing
			const val = endBox.value == level.output[this.boxIndex];
			if(!val) {reset(); return;}
			else {this.boxes = [];}
			this.boxIndex++;
			if(this.boxIndex >= level.input.length){
				reset(true);
			}
		}

		const outOfBounds = this.boxes.find((box: Box) => {
			const left = box.x < 0;
			const right = box.x >= boardState.size;
			const top = box.y < 0;
			const bottom = box.y >= boardState.size;

			return left || right || top || bottom;
		});

		if(outOfBounds) {reset(); return;}

	}

	draw = (ctx: CanvasRenderingContext2D, width: number, height: number, size: number) => {
		this.boxes.forEach((box) => {
			box.draw(ctx, width, height, size);
		});
	}
	reset = (won: boolean) => {
		this.boxIndex = 0;
		this.boxes = [];
		if(won){
			document.getElementById("level_name").style.color = "green";
		}
	}
}

class Box {
	value: number;
	x: number;
	y: number;

	constructor(x: number, y: number, value: number = 0) {
		this.value = value;
		this.x = x;
		this.y = y;
	}

	update = (conveyors: Base[][]) => {
		conveyors[this.x][this.y].update(this);
	}

	draw = (ctx: CanvasRenderingContext2D, width: number, height: number, size: number) => {
		// TODO: make this pretty
		ctx.fillStyle = "#000000";
		ctx.fillRect(width/size*this.x,height/size*this.y, width/size, height/size);
		ctx.fillStyle = "#ffffff";
		ctx.font = "50px sans-serif"
		ctx.fillText(this.value.toString(), width/size*this.x, height/size*(this.y+1));
	}
}