import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import forkKnife from "/fork-knife.svg";

function Menu(props) {
	const imagePath = `/src/assets/images/${props.menu.image}`;
	const imageUrl = new URL(imagePath, import.meta.url).href;

	return (
		<article>
			<h3>
				<FontAwesomeIcon icon={faStar} />
				{props.menu.title}
				<FontAwesomeIcon icon={faStar} />
			</h3>
			<figure>
				<img src={imageUrl} alt={props.menu.title} />
				<figcaption>
					{props.menu.price} $<br />
					<span>soft drinks and desert included</span>
					<span>+ taxes</span>
				</figcaption>
			</figure>
			<ul>
				{props.menu.ingredients.map((ingredient) => (
					<li key={Math.random()}>
						<FontAwesomeIcon icon={faStar} />
						{ingredient}
					</li>
				))}
			</ul>
			<a href="menus.html" className="details">
				<img src={forkKnife} alt="" />
				See more
			</a>
		</article>
	);
}

export default Menu;
