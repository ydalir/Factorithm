import { State, Direction, Conveyors, MemoryType } from "./types";
import { Base, Mover, Adder, Subtractor, MemoryAdder, MemorySubtractor, MemorySplitter, MemoryAssigner } from "./objects/conveyors";
import { getBlank } from "./images/loader";

export const inputHandler = (state: State) => {
	const handleKeyboard = (c: KeyboardEvent) => {
		switch(c.key){
			case "ArrowRight":
				console.log("right")
				state.direction = Direction.Right;
				break;
			case "ArrowDown":
				console.log("down")
				state.direction = Direction.Down;
				break;
			case "ArrowLeft":
				console.log("left")
				state.direction = Direction.Left;
				break;
			case "ArrowUp":
				console.log("up")
				state.direction = Direction.Up;
				break;
			case "Enter":
				if(state.isRunning) state.reset();
				else state.start();
				break;

		}
	}
	document.onkeydown = handleKeyboard;

	const handleButtonClick = (c: MouseEvent) => {
		const button = (c.target as HTMLElement);

		switch(button.id){
			case "base":
				state.selectedPiece = Conveyors.Base
				break;
			case "mover":
				state.selectedPiece = Conveyors.Mover
				break;
			case "adder":
				state.selectedPiece = Conveyors.Adder
				break;
			case "subtractor":
				state.selectedPiece = Conveyors.Subtractor
				break;
			case "memory":
				state.selectedPiece = Conveyors.MemoryAssigner
				break;
			case "memory_adder":
				state.selectedPiece = Conveyors.MemoryAdder
				break;
			case "memory_subtractor":
				state.selectedPiece = Conveyors.MemorySubtractor
				break;
			case "memory_splitter":
				state.selectedPiece = Conveyors.MemorySplitter
				break;
			case "memory_a":
				state.selectedMemory = MemoryType.A;
				break;
			case "memory_b":
				state.selectedMemory = MemoryType.B;
				break;
			case "memory_c":
				state.selectedMemory = MemoryType.C;
				break;
			case "start":
				if(state.isRunning) state.reset();
				else state.start();
				break;
			case "next_level":
				state.nextLevel();
				break;
			case "prev_level":
				state.prevLevel();
				break;
		}
	}

	// TODO: Investigate why images are loaded so often
	// TODO: Add click handler to this
	//(document.getElementById("base") as HTMLImageElement).src = getBlank().src

	const buttons: HTMLCollectionOf<Element> =
		document.getElementsByTagName("button");

	Array.from(buttons).forEach((a: HTMLButtonElement) =>{
		a.onclick = handleButtonClick
	});

	const handleBoardClick = (c: MouseEvent) => {
		if(state.isRunning) return;
		const divisor = (c.target as HTMLElement).clientHeight/state.boardState.size;
		const xclick = Math.floor(c.offsetX/divisor);
		const yclick = Math.floor(c.offsetY/divisor);

		let conv: Base;

		switch(state.selectedPiece) {
			case Conveyors.Base:
				conv = new Base(state.direction);
				break;
			case Conveyors.Mover:
				conv = new Mover(state.direction);
				break;
			case Conveyors.Adder:
				conv = new Adder(state.direction);
				break;
			case Conveyors.Subtractor:
				conv = new Subtractor(state.direction);
				break;
			case Conveyors.MemoryAssigner:
				conv = new MemoryAssigner(state.direction, state.selectedMemory, state.boardState.memory);
				break;
			case Conveyors.MemoryAdder:
				conv = new MemoryAdder(state.direction, state.selectedMemory, state.boardState.memory);
				break;
			case Conveyors.MemorySubtractor:
				conv = new MemorySubtractor(state.direction, state.selectedMemory, state.boardState.memory);
				break;
			case Conveyors.MemorySplitter:
				conv = new MemorySplitter(state.direction, state.selectedMemory, state.boardState.memory);
				break;
		}

		state.boardState.board[xclick][yclick] = conv;
		state.boardState.draw(state.context, state.canvas.width, state.canvas.height);
	}

	state.canvas.onmousedown = handleBoardClick;
}