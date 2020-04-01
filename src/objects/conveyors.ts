import {Direction, Conveyors, MemoryType, Memory, Box} from '../types';
import { getImage } from '../image-loader';

export function ConveyorFactory(type: Conveyors, direction: Direction, memory_type: MemoryType, memory) {
	switch(type){
		case Conveyors.Base:
			return new Base(direction);
		case Conveyors.Mover:
			return new Mover(direction);
		case Conveyors.Adder:
			return new Adder(direction);
		case Conveyors.Subtractor:
			return new Subtractor(direction);
		case Conveyors.MemoryAssigner:
			return new MemoryAssigner(direction, memory_type, memory)
		case Conveyors.MemoryAdder:
			return new MemoryAdder(direction, memory_type, memory)
		case Conveyors.MemorySubtractor:
			return new MemorySubtractor(direction, memory_type, memory)
		case Conveyors.MemorySplitter:
			return new MemorySplitter(direction, memory_type, memory)
		case Conveyors.Returner:
			return new Returner(direction)
		default:
			return new Base(direction);
	}
}

export class Base {
	direction: Direction;
	constructor(direction: Direction){
		this.direction = direction;
	}
	update(box: Box) {};
	draw(ctx: CanvasRenderingContext2D, 
			width: number, height: number, size: number,
			x: number, y: number) {

		let img = getImage(this.direction, this.type);

		ctx.drawImage(
			img,
			width/size*x, height/size*y,
			width/size, height/size);
	}
	type = Conveyors.Base;
}

export class Returner extends Base {
	type = Conveyors.Returner;
	update(box: Box) {
		// TODO: Have this interact with state somehow
		box.returned = true;
	}
}

export class Mover extends Base {
	type = Conveyors.Mover;
	constructor(direction: Direction){
		super(direction);
	}

	update(box: Box) {
		switch(this.direction){
			case Direction.Right:
				box.x++;
				break;
			case Direction.Down:
				box.y++;
				break;
			case Direction.Left:
				box.x--;
				break;
			case Direction.Up:
				box.y--;
				break;
		}
	}
}

export class Adder extends Mover {
	type = Conveyors.Adder;
	constructor(direction: Direction) {
		super(direction);
	}

	update(box: Box) {
		super.update(box);
		box.value++;
	}
}

export class Subtractor extends Mover {
	type = Conveyors.Subtractor;

	update = (box: Box) => {
		super.update(box);
		box.value--;
	}
}

export class MemoryAssigner extends Mover {
	type = Conveyors.MemoryAssigner;
	memory_type: MemoryType;
	memory: Memory;
	value: number;

	constructor(direction: Direction, memory_type: MemoryType, memory: Memory){
		super(direction);
		this.memory_type = memory_type;
		this.memory = memory;
	}

	update = (box: Box) => {
		super.update(box);
		switch(this.memory_type){
			case MemoryType.A:
				this.memory.A = box.value;
				break;
			case MemoryType.B:
				this.memory.B = box.value;
				break;
			case MemoryType.C:
				this.memory.C = box.value;
				break;
		}
	}
}

export class MemoryAdder extends Mover {
	type = Conveyors.MemoryAdder;
	memory_type: MemoryType;
	memory: Memory;
	constructor(direction: Direction, memory_type: MemoryType, memory: Memory){
		super(direction);
		this.memory_type = memory_type;
		this.memory = memory;
	}

	update = (box: Box) => {
		super.update(box);
		switch(this.memory_type){
			case MemoryType.A:
				this.memory.A++;
				break;
			case MemoryType.B:
				this.memory.B++;
				break;
			case MemoryType.C:
				this.memory.C++;
				break;
		}

	}
}

export class MemorySubtractor extends Mover {
	type = Conveyors.MemorySubtractor;
	memory_type: MemoryType;
	memory: Memory;
	constructor(direction: Direction, memory_type: MemoryType, memory: Memory){
		super(direction);
		this.memory_type = memory_type;
		this.memory = memory;
	}

	update = (box: Box) => {
		super.update(box);
		switch(this.memory_type){
			case MemoryType.A:
				this.memory.A--;
				break;
			case MemoryType.B:
				this.memory.B--;
				break;
			case MemoryType.C:
				this.memory.C--;
				break;
		}
	}
}

export class MemorySplitter extends Mover {
	type = Conveyors.MemorySplitter;
	memory_type: MemoryType;
	memory: Memory;

	constructor(direction: Direction, memory_type: MemoryType, memory: Memory){
		super(direction);
		this.memory_type = memory_type;
		this.memory = memory;
	}

	update = (box: Box) => {
		switch(this.memory_type){
			case MemoryType.A:
				Splitter(box, this.direction, this.memory.A);
				break;
			case MemoryType.B:
				Splitter(box, this.direction, this.memory.B);
				break;
			case MemoryType.C:
				Splitter(box, this.direction, this.memory.C);
				break;
		}
	}
}

function Splitter(box: Box, direction: Direction, value: number){
	if(value > 0){
		switch(direction){
			case Direction.Right:
				box.y--;
				break;
			case Direction.Down:
				box.x++;
				break;
			case Direction.Left:
				box.y++;
				break;
			case Direction.Up:
				box.x--;
				break;
		}
	// If value < 0, go to the left
	} else if (value < 0){
		switch(direction){
			case Direction.Right:
				box.y++;
				break;
			case Direction.Down:
				box.x--;
				break;
			case Direction.Left:
				box.y--;
				break;
			case Direction.Up:
				box.x++;
				break;
		}
	// If value == 0, follow direction
	} else {
		switch(direction){
			case Direction.Right:
				box.x++;
				break;
			case Direction.Down:
				box.y++;
				break;
			case Direction.Left:
				box.x--;
				break;
			case Direction.Up:
				box.y--;
				break;
		}
	}
}