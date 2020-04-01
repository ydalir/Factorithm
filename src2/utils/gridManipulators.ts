import { Conveyors } from "../types";

// Move back to main-model???
export const createGrid = (size: number) => {
	const grid = Array(size).fill(undefined)
	.map(()=>Array(size).fill(undefined))

	grid.map((row) => (row.map(() => (new filler))))

	return grid;
}

class filler {

}

const fillEmptyGrid = (grid) => {
	//TODO: replace with non-filler
	grid.map((row) => (row.map(() => (new filler))))
}

export const createConveyor = (type: Conveyors) => {
	switch(type){
		case Conveyors.Base:
			return new filler;
		default:
			return new filler;
	}
}