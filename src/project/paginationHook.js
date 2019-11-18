import { useContext } from 'react';
import { ImageContext } from '../store/image';
export default function paginationHook() {
	const { index, setIndex } = useContext(ImageContext);
	const imgLinks = [
		'https://via.placeholder.com/150',
		'https://via.placeholder.com/250',
		'https://via.placeholder.com/350'
	];
	const currentImage = imgLinks[index];
	function nextSlide() {
		if (index >= imgLinks.length - 1) {
			return setIndex(0);
		} else {
			setIndex(index + 1);
		}
	}
	function prevSlide() {
		if (index <= 0) {
			return setIndex(imgLinks.length - 1);
		} else {
			setIndex(index - 1);
		}
	}
	return { currentImage, prevSlide, nextSlide };
}
