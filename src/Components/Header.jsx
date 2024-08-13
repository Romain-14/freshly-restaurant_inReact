import logo from "/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Header() {
	return (
		<header className="container">
			<a href="index.html" className="logo">
				<img src={logo} alt="Logo for Freshly Restaurant" />
				<strong><FontAwesomeIcon icon={faStar} />Freshly Restaurant<FontAwesomeIcon icon={faStar} /></strong>
			</a>
			<nav>
				<a href="#" className="active">Home</a>
				<a href="#">Menu</a>
				<a href="#">About</a>
				<a href="#">Contact</a>
			</nav>
		</header>
	);
}

export default Header;
