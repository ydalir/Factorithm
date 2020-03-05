//import { Board } from "./objects/board";
//import { BoxHandler } from "./objects/boxes";

export enum Direction {
	Up,
	Down,
	Left,
	Right
}

export enum Conveyors {
	Base,
	Mover,
	Adder,
	Subtractor,
	MemoryAssigner,
	MemoryAdder,
	MemorySubtractor,
	MemorySplitter,
}

/*
export interface Memory {
	A: number;
	B: number;
	C: number;
}

export enum MemoryType {
	A,
	B,
	C
}

export interface State {
	selectedPiece: Conveyors;
	selectedMemory: MemoryType;
	direction: Direction;
	boardState: Board;
	level: Level;
	canvas: HTMLCanvasElement;
	context: CanvasRenderingContext2D;
	boxHandler: BoxHandler;
	isRunning: boolean;
	update: () => void;
	start: () => void;
	reset: (won?:boolean) => void;
	nextLevel: () => void;
	prevLevel: () => void;
}

export interface Level {
	name: string,
	description: string,
	input: number[],
	output: number[],
	size: number,
}
*/