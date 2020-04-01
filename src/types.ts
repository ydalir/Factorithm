import { Board } from "./objects/board";

export interface Box {
	x: number,
	y: number,
	value: number,
	returned: boolean
}

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
	Returner
}

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
	selectedConveyor: Conveyors;
	selectedMemory: MemoryType;
	selectedDirection: Direction;
	boardState: Board;
	level: Level;
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