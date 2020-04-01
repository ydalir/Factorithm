import { Level } from "./types";

const level1: Level = {
	name: "Get a move on",
	description: "Move the box from top to the bottom using the mover-conveyor",
	input: [1,2,5],
	output: [1,2,5],
	size: 3,
}

const level2: Level = {
	name: "Adding up",
	description: "Add one to each input using the adder-conveyor",
	input: [1, 5, -1],
	output: [2, 6, 0],
	size: 3,
}

const level3: Level = {
	name: "Take it away",
	description: "Subtract three from each input using the subtract-conveyor",
	input: [3, 8, 0],
	output: [0, 5, -3],
	size: 3,
}

const level4: Level = {
	name: "Null null null",
	description: "Turn the input into zeroes using the memory-conveyor",
	input: [3, 8, 0],
	output: [0, 0, 0],
	size: 5,
}

const level5: Level = {
	name: "Two and a half boxes",
	description: "Divide the input by two",
	input: [2, 6, -4],
	output: [1, 3, -2],
	size: 5,
}

const level6: Level = {
	name: "Two and a half boxes 2: Electric boogaloo",
	description: "Divide the input by two, round up for odd numbers",
	input: [2, 3, 7, -3, -4],
	output: [1, 2, 4, -2, -2],
	size: 7,
}

const level7: Level = {
	name: "Remember the last one",
	description: "Add the previous output to the input",
	input: [1, 1, 1],
	output: [1, 2, 3],
	size: 5,
}

const levels: Level[] = [
	level1,
	level2,
	level3,
	level4,
	level5,
	level6,
	level7,
]

export default levels;