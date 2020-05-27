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



	/*
	level = {
		size: 3,
		initialInput: [0,0,0],
		input: [],
		expectedOutput: [1,1,1],
		actualOutput: []
	}
	*/

	box = {
		x: 0,
		y: 0,
		value: 0,
		returned: false
	}

	boxOperations = {

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
	isRunning: boolean = false;
	interval: number;
	
	constructor() {
		this.board.resetGrid();
		this.box = undefined;
	}

	/*
	nextLevel = () => {
		if(this.isRunning) return;
		this.levelIndex = this.levelIndex < levels.length-1? this.levelIndex+1:this.levelIndex;
		this.setLevel();
	}

	prevLevel = () => {
		if(this.isRunning) return;
		this.levelIndex = this.levelIndex > 0? this.levelIndex-1:this.levelIndex;
		this.setLevel();
	}

	setLevel = () => {
		this.level = levels[this.levelIndex];
		this.boardState = new Board(this.level.size);

		const canvasSize = this.level.size * 128;
		this.canvas.height = canvasSize;
		this.canvas.width = canvasSize;

		this.draw();

		document.getElementById("level_name").innerHTML = this.level.name;
		document.getElementById("level_name").style.color = "black";
		document.getElementById("level_description").innerHTML = this.level.description;
		document.getElementById("input").innerHTML = "Input: " + this.level.input.toString();
		document.getElementById("output").innerHTML = "Output: " + this.level.output.toString();
	}
	*/

	/*
	draw = () => {
		this.context.fillStyle = "#eeeeee";
		this.context.fillRect(0,0,this.canvas.width, this.canvas.height)
		this.boardState.draw(this.context, this.canvas.width, this.canvas.height);
		this.boxHandler.draw(this.context, this.canvas.width, this.canvas.height, this.boardState.size);
	}
	*/

	/*
	start = () =>{
		document.getElementById("level_name").style.color = "black";
		const button = document.getElementById("start");
		button.innerHTML = "Stop";

		this.isRunning = true;
		this.update();
		this.draw();

		this.interval = setInterval(() => {
			this.update();
			this.draw();
		}, 300);
	}

	reset = (won: boolean = false) => {
		const button = document.getElementById("start");
		button.innerHTML = "Start";

		this.boxHandler.reset(won);

		clearInterval(this.interval);
		this.isRunning = false;

		this.boardState.memory.A = 0;
		this.boardState.memory.B = 0;
		this.boardState.memory.C = 0;

		this.draw();
	}
	*/
}