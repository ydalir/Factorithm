//import { Level } from "./types";

class Level {
	size: number;
	initialInput: Array<number>;
	input: Array<number>;
	expectedOutput: Array<number>;
	actualOutput: Array<number>;
	description: string;
	completed: boolean;
	constructor(size: number, input: Array<number>, output: Array<number>, description: string){
		this.size = size;
		this.initialInput = input;
		this.expectedOutput = output;
		this.description = description;

		this.actualOutput = [];
		this.input = [];
		this.completed = false;
	}
}

const level1 = new Level(3, [0,0,0], [0,0,0], "Return the input unchanged");
const level2 = new Level(3, [1,0,3], [2,1,4], "Add one to each input");
const level3 = new Level(3, [1,2,3], [-2,-1,0], "Subtract three from each input");
const level4 = new Level(5, [4,2,-2], [0,0,0], "Output zero for all inputs");
const level5 = new Level(5, [2,5,1], [4,10,2], "Multiply input by two");
const level6 = new Level(5, [1,3,1], [1,4,5], "Add the previous output");
const level7 = new Level(7, [1,2,3], [1,4,9], "Square the input");
const level8 = new Level(9, [0,0,0,0], [1,3,6,10], "Output triangle numbers");

const levels: Level[] = [
	level1,
	level2,
	level3,
	level4,
	level5,
	level6,
	level7,
	level8,
]

export default levels;
