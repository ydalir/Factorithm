import converter from '../utils/stringToConveyor';
import getImage from './image-loader';
import {Direction} from '../types';

export const initializeView = (
	menuButtons: NodeListOf<HTMLImageElement>,
	grid: HTMLDivElement,
	canvas: HTMLCanvasElement,
	direction: Direction
) => {
	setGridSize(grid);
	initializeButtons(menuButtons, direction);
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