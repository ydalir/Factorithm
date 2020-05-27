//import { Level } from "./types";

class Level {
	size: number;
	initialInput: Array<number>;
	input: Array<number>;
	expectedOutput: Array<number>;
	actualOutput: Array<number>;
	description: string;
	constructor(size: number, input: Array<number>, output: Array<number>, description: string){
		this.size = size;
		this.initialInput = input;
		this.expectedOutput = output;
		this.description = description;

		this.actualOutput = [];
		this.input = [];
	}
}

const level1 = new Level(3, [0,0,0], [0,0,0], "Get the boys up in there buddy");
const level2 = new Level(3, [0,0,0], [1,1,1], "Add em up fellas");

const level3 = {
	name: "Take it away",
	description: "Subtract three from each input using the subtract-conveyor",
	input: [3, 8, 0],
	output: [0, 5, -3],
	size: 3,
}

const level4 = {
	name: "Null null null",
	description: "Turn the input into zeroes using the memory-conveyor",
	input: [3, 8, 0],
	output: [0, 0, 0],
	size: 5,
}

const level5 = {
	name: "Two and a half boxes",
	description: "Divide the input by two",
	input: [2, 6, -4],
	output: [1, 3, -2],
	size: 5,
}

const level6 = {
	name: "Two and a half boxes 2: Electric boogaloo",
	description: "Divide the input by two, round up for odd numbers",
	input: [2, 3, 7, -3, -4],
	output: [1, 2, 4, -2, -2],
	size: 7,
}

const level7 = {
	name: "Remember the last one",
	description: "Add the previous output to the input",
	input: [1, 1, 1],
	output: [1, 2, 3],
	size: 5,
}

const levels: Level[] = [
	level1,
	level2,
]

export default levels;