import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// fichier json de données automatiquement converti en tableau d'objets
// ou équivalent moins optimisé ligne 13 d'un tableau d'objets classique
import datas from "../assets/datas/menus.json";

import Slider from "./Slider";

import location from "../assets/images/location.jpg";
import Menu from "./Menu";

// const menus = [
//     {
//         id: 1,
//         title: "Meat menu",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc.",
//         ingredients : ["meat", "potatoes", "salad"],
//         price: 15.99,
//         image: "meat-menu.jpg"
//     },
//     {
//         id: 2,
//         title: "Fish menu",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc.",
//         ingredients : ["fish", "rice", "vegetables"],
//         price: 17.99,
//         image: "fish-menu.jpg"
//     },
//     {
//         id: 3,
//         title: "Vegetarian menu",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc.",
//         ingredients : ["vegetables", "rice", "salad"],
//         price: 12.99,
//         image: "vegetarian-menu.jpg"
//     }
// ]

function Home() {
	return (
		<main className="container">
			<Slider />

			<section className="intro">
				<h1>
					<FontAwesomeIcon icon={faStar} />
					Welcome to Freshly Restaurant
					<FontAwesomeIcon icon={faStar} />
				</h1>

				<img
					src={location}
					alt="view of the main dining room"
					className="intro-img"
				/>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Voluptas sunt veritatis ipsam ipsa saepe unde possimus dicta
					accusantium nulla sequi praesentium commodi repudiandae,
					fugiat aperiam reiciendis impedit eius aspernatur at dolore
					placeat quae maxime laudantium optio sapiente! Architecto
					sequi totam qui illo doloribus nisi cupiditate perspiciatis
					culpa quam recusandae facere tempore necessitatibus expedita
					iusto facilis, quis nihil id dignissimos ex corporis minima
					sit. Eos deserunt maxime at animi obcaecati error rem
					numquam ullam vitae hic ducimus labore, in, iure nostrum!
				</p>
				<p>
					Soluta corporis est explicabo magni ducimus praesentium
					dignissimos hic laudantium accusantium maxime animi illum
					expedita sunt illo, eveniet voluptas reprehenderit quia,
					ipsam velit deserunt doloribus fugit iusto! Odit natus
					officia facere quae sunt eos unde repellat similique fugiat
					consectetur sint et qui, quod reiciendis perferendis.
					Corporis harum molestias doloribus, eaque est, quas. Amet
					doloribus aperiam voluptatem ad nemo minus voluptas ratione
					dolores in cumque dolore eius nostrum ipsa deleniti minima
					modi, officia odit temporibus velit excepturi, eligendi odio
					qui facere obcaecati.
				</p>
			</section>

			<section className="menu">
				<h2>
					<FontAwesomeIcon icon={faStar} />
					Special menus
					<FontAwesomeIcon icon={faStar} />
				</h2>

				{
                    datas.length > 0 &&
					    datas.map((menu) => <Menu key={menu.id} menu={menu} />)
                }
			</section>
		</main>
	);
}

export default Home;
