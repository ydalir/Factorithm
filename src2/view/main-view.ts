import converter from '../utils/stringToConveyor';
import getImage from './image-loader';
import {Direction} from '../types';


//TODO: make view its own object

export const setDirectionBorder = (direction: Direction) => {

}

export const drawGrid = (ctx: CanvasRenderingContext2D, grid, direction) => {
	grid.forEach((row) => {
		row.forEach((cell) => {
			ctx.drawImage(
				getImage(direction, cell.type),
				width/size*x, height/size*y,
				width/size, height/size
			);
		})
	})
}

export const setCanvasOnClick = (
	canvasOnClick: (MouseEvent) => void,
	canvas: HTMLCanvasElement
) => {
	canvas.onclick = canvasOnClick;
}

export const setDirectionOnClick = (
	setDirection: (MouseEvent) => void,
	buttons: NodeListOf<HTMLImageElement>
	) => {
		buttons.forEach((button) => {
			button.onclick = setDirection;
		})
};

export const initializeView = (
	menuButtons: NodeListOf<HTMLImageElement>,
	grid: HTMLDivElement,
	canvas: HTMLCanvasElement,
	direction: Direction
) => {
	setGridSize(grid);
	initializeButtons(menuButtons, direction);
	initializeCanvas(canvas);
}

const initializeCanvas = (canvas: HTMLCanvasElement) => {
	const ctx = canvas.getContext("2d");
	ctx.fillStyle = "#eeeeee";
	canvas.getContext("2d").fillRect(0,0,canvas.width, canvas.height);
}

const setGridSize = (grid: HTMLDivElement) => {
	const width = grid.parentElement.clientWidth;
	const height = grid.parentElement.clientHeight;
	const size = width > height ? height : width;
	grid.style.height = size + "px";
	grid.style.width = size*1.5 + "px";
}

const initializeButtons = (elements: NodeListOf<HTMLImageElement>,direction: Direction ) => {
	elements.forEach((element: HTMLImageElement) => {
		setImageSource(element, direction);
		preventDrag(element);
	});
}

const setImageSource = (element: HTMLImageElement, direction: Direction) => {
		const imageSource = getImage(direction, converter(element.getAttribute('id'))).src;
		element.setAttribute('src', imageSource);
}

const preventDrag = (element: HTMLImageElement) => {
	// TODO: Refactor to initalizeButtons if nothing else is added
	// Refactor to initialize one time stuff if more is added
		element.ondragstart = (e) => {
			e.preventDefault();
		}
}