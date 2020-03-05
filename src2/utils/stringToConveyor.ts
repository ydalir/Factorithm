import {Conveyors} from '../types';

const stringToConveyor = (name: String): Conveyors => {
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
	}
}

export default stringToConveyor;