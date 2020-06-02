import { Conveyors, Direction, State, Level, MemoryType } from './types';
import {Base, ConveyorFactory} from './objects/conveyors'
import levels from './levels';

export class StateClass {
	menu = {
		selectedConveyor: Conveyors.Base,
		selectedMemory: MemoryType.A,
		selectedDirection: Direction.Down,
		selectedLevel: 0,
	}

	level = levels[this.menu.selectedLevel];

	levelOperations = {
		nextLevel: () => {
			if(this.menu.selectedLevel == levels.length - 1){
				return
			}
			this.menu.selectedLevel += 1;
			this.levelOperations.updateLevel();
		},

		prevLevel: () => {
			if(this.menu.selectedLevel == 0){
				return
			}
			this.menu.selectedLevel -= 1;
			this.levelOperations.updateLevel();
		},

		updateLevel: () => {
			this.level = levels[this.menu.selectedLevel]
		}
	}

	box = {
		x: 0,
		y: 0,
		value: 0,
		returned: false
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

		createGrid: (size: number) => {
			const grid = Array(size).fill(undefined)
			.map(()=>Array(size).fill(undefined))

			this.board.grid = grid.map((row) => (row.map(() => (
				ConveyorFactory(
					Conveyors.Base,
					Direction.Up,
					undefined,
					undefined
				)
				))))
		},

		resetGrid: () => {
			this.board.createGrid(this.level.size);
			this.board.grid[0][0] = ConveyorFactory(
				Conveyors.Mover,
				Direction.Down,
				undefined,
				undefined
			)
		},

		updateGrid: (x: number, y: number) => {
			this.board.grid[x][y] = ConveyorFactory(
				this.menu.selectedConveyor,
				this.menu.selectedDirection,
				this.menu.selectedMemory,
				this.board.memory
				);
		},
	}

	levelIndex: number = 0;
	interval: number;
	
	constructor() {
		this.board.resetGrid();
		this.box = undefined;
	}

}