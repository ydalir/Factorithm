import borders from './images/*_border.png';
import numbers from './images/numbers/*.png';
import minus from './images/numbers/minus.png';
import box from './images/box.png';
import base from './images/base.png';
import returner from './images/returner.png';
import mover from './images/*_mover.png';
import adder from './images/*_adder.png';
import subtractor from './images/*_subtractor.png';
import memory from './images/*_memory.png';
import memory_adder from './images/*_memory_plus.png';
import memory_subtractor from './images/*_memory_minus.png';
import memory_splitter from './images/*_memory_splitter.png';
import { Direction, Conveyors, MemoryType } from './types';

const loadImage = (src: string) => {
	const img = new Image();
	img.src = src;
	return img;
}

export const getImage = (direction: Direction, type: Conveyors) => {
	let imageType;

	switch(type){
		case Conveyors.Base:
			return images.base;
		case Conveyors.Returner:
			return images.returner;
		case Conveyors.Mover:
			imageType = images.mover;
			break;
		case Conveyors.Adder:
			imageType = images.adder;
			break;
		case Conveyors.Subtractor:
			imageType = images.subtractor;
			break;
		case Conveyors.MemoryAssigner:
			imageType = images.memory;
			break;
		case Conveyors.MemoryAdder:
			imageType = images.adder;
			break;
		case Conveyors.MemorySubtractor:
			imageType = images.subtractor;
			break;
		case Conveyors.MemorySplitter:
			imageType = images.memory_splitter;
			break;
	}

	switch(direction){
		case Direction.Up:
			return imageType.up;
		case Direction.Down:
			return imageType.down;
		case Direction.Left:
			return imageType.left;
		case Direction.Right:
			return imageType.right;
	}
}

export const getBoxImage = () => {
	return images.box;
}

export const getNumberImage = (num: number) => {
	var isNegative = false;
	var abs = Math.abs(num);

	if(num < 0) {
		isNegative = true;
	}

	// Numbers must be from 0-99
	const truncated = abs % 100;
	const ones = truncated % 10;
	const tens = Math.floor(truncated/10);
	
	// Magic, fix pls
	const realTens = tens == 0 ? 19:tens + 10 - 1;

	return {
		ones: images.numbers[ones],
		tens: images.numbers[realTens],
		isNegative: isNegative
	};
}

export const getMinusImage = () => (images.minus);

export const getBorderImage = (mem: MemoryType) => {
	switch(mem){
		case MemoryType.A:
			return images.borders.A;
		case MemoryType.B:
			return images.borders.B;
		case MemoryType.C:
			return images.borders.C;
	}

	return undefined;
}


const images = {
	numbers: Object.keys(numbers).map((key) => (loadImage(numbers[key]))),
	minus: loadImage(minus),
	box: loadImage(box),
	base: loadImage(base),
	returner: loadImage(returner),
	mover: {
		up: loadImage(mover.up),
		down: loadImage(mover.down),
		left: loadImage(mover.left),
		right: loadImage(mover.right),
	},
	adder: {
		up: loadImage(adder.up),
		down: loadImage(adder.down),
		left: loadImage(adder.left),
		right: loadImage(adder.right),
	},
	subtractor: {
		up: loadImage(subtractor.up),
		down: loadImage(subtractor.down),
		left: loadImage(subtractor.left),
		right: loadImage(subtractor.right),
	},
	memory: {
		up: loadImage(memory.up),
		down: loadImage(memory.down),
		left: loadImage(memory.left),
		right: loadImage(memory.right),
	},
	memory_adder: {
		up: loadImage(memory_adder.up),
		down: loadImage(memory_adder.down),
		left: loadImage(memory_adder.left),
		right: loadImage(memory_adder.right),
	},
	memory_subtractor: {
		up: loadImage(memory_subtractor.up),
		down: loadImage(memory_subtractor.down),
		left: loadImage(memory_subtractor.left),
		right: loadImage(memory_subtractor.right),
	},
	memory_splitter: {
		up: loadImage(memory_splitter.up),
		down: loadImage(memory_splitter.down),
		left: loadImage(memory_splitter.left),
		right: loadImage(memory_splitter.right),
	},
	borders: {
		A: loadImage(borders.green),
		B: loadImage(borders.red),
		C: loadImage(borders.blue),
	},
}