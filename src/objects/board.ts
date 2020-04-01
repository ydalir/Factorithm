import { Base } from "./conveyors";
import { Direction, Memory } from "../types";

export class Board {
	board: Base[][];
	size: number;
	memory: Memory = {
		A: 0,
		B: 0,
		C: 0,
	}

	constructor(N: number) {
		this.size = N;
		this.board = new Array(this.size).fill(1).map(() => {
			return Array(this.size).fill(1).map(() => {
				return new Base(Direction.Right);
			})
		});
	}

	draw(ctx: CanvasRenderingContext2D, width: number, height: number) {
		for(let x = 0; x < this.size; x++) {
			for(let y = 0; y < this.size; y++){
				this.board[x][y].draw(ctx,width,height,this.size,x,y);
			}
		}
	}
}