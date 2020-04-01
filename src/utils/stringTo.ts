import {Conveyors, Direction} from '../types';

export const stringToDirection = (name: String): Direction => {
	switch(name){
		case 'up':
			return Direction.Up;
		case 'down':
			return Direction.Down;
		case 'left':
			return Direction.Left;
		case 'right':
			return Direction.Right;
	}
}

export const stringToConveyor = (name: String): Conveyors => {
	switch(name){
		case 'base':
			return Conveyors.Base;
		case 'mover':
			return Conveyors.Mover;
		case 'adder':
			return Conveyors.Adder;
		case 'subtractor':
			return Conveyors.Subtractor;
		case 'memory_assigner':
			return Conveyors.MemoryAssigner;
		case 'memory_adder':
			return Conveyors.MemoryAdder;
		case 'memory_subtractor':
			return Conveyors.MemorySubtractor;
		case 'memory_splitter':
			return Conveyors.MemorySplitter;
		case 'returner':
			return Conveyors.Returner;
	}
}