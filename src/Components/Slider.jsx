import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCircle,
	faCircleArrowLeft,
	faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const slide = [
	{
		id: 1,
		img: "slider-01.jpg",
		alt: "Table seen from the top with drinks and plates with food",
	},
	{
		id: 2,
		img: "slider-02.jpg",
		alt: "Zoom on a plate seen from the top and red chilli",
	},
	{
		id: 3,
		img: "slider-03.jpg",
		alt: "Table seen from the top with drinks and plates with food",
	},
];

function Slider() {
	const [index, setIndex] = useState(0);

	const imagePath = `/src/assets/images/slider/${slide[index].img}`;
	const imageUrl = new URL(imagePath, import.meta.url).href;

	function nextSlide() {
		if (index === slide.length - 1) {
			setIndex(0);
			return;
		}
		setIndex(index + 1);
	}

	function previousSlide() {
		if (!index) {
			setIndex(slide.length - 1);
			return;
		}
		setIndex(index - 1);
	}

	return (
		<>
			<div className="slider">
				<div>
					<img src={imageUrl} alt={slide[index].alt} />
				</div>
				<FontAwesomeIcon
					icon={faCircleArrowLeft}
					onClick={previousSlide}
				/>
				<FontAwesomeIcon
					icon={faCircleArrowRight}
					onClick={nextSlide}
				/>
			</div>
            
			<div className="dot-slides">
				{slide.map((dot, i) => (
					<FontAwesomeIcon
						key={Math.random()}
						icon={faCircle}
						style={{ color: i === index ? "#950000" : "grey" }}
                        onClick={() => setIndex(i)}
					/>
				))}
			</div>
		</>
	);
}

export default Slider;
