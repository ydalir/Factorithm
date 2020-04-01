import {Conveyors, Direction, MemoryType} from '../types';
import { createGrid, createConveyor } from '../utils/gridManipulators';

export default class model {

	constructor(){
		this.board.grid = createGrid(this.level.levelSize);
	}

	menu = {
		selectedConveyor: Conveyors.Mover,
		selectedMemoryType: MemoryType.A,
		selectedDirection: Direction.Down,
	}

	level = {
		levelSize: 3,
	}

	board = {
		memory: {
			A: 0,
			B: 0,
			C: 0
		},

		resetMemory: () => {
			this.board.memory.A = 0;
			this.board.memory.B = 0;
			this.board.memory.C = 0;
		},

		grid: [],

		resetGrid: () => {
			this.board.grid = createGrid(this.level.levelSize);
		},

		updateGrid: (x: number, y: number) => {
			this.board.grid[x][y] = createConveyor(this.menu.selectedConveyor);
			console.log(this.board.grid);
		},
	}

	/*

	level {
		levelIndex: number = 0;
		currentLevel: Level; ???
	}

	boxState {

	}

	boardState {

	}

	isRunning: boolean = false;
	interval: number;

	*/
}