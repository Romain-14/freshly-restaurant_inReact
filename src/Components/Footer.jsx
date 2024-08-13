import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';

function Footer() {
	return (
		<footer>
			<div className="container flex">
				<aside>
					<h3>Opening hours</h3>
					<ul>
						<li>Monday: Closed</li>
						<li>Tue-Wed : 9am - 10pm</li>
						<li>Thu-Fri : 9am - 10pm</li>
						<li>Sat-Sun : 5pm - 10pm</li>
					</ul>
				</aside>

				<aside>
					<h3>Contact</h3>
					<address>
						<p>
							13 Christopher Street
							<br />
							New York,
							<br />
							NY 10014-3543
						</p>
						<p>+01 2000 800 9999</p>
					</address>
				</aside>

				<aside>
					<h3>Social networks</h3>
					<div className="reseaux">
						<a href="#" className="fab fa-facebook-f">
                        <FontAwesomeIcon icon={faFacebook} />
                        </a>
						<a href="#" className="fab fa-instagram">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
						<a href="#" className="fab fa-pinterest-p">
                            <FontAwesomeIcon icon={faPinterest} />
                        </a>
					</div>
				</aside>
			</div>
			<div className="footer">
				<p>
					<a
						rel="license"
						href="https://3wa.fr/propriete-materiel-pedagogique/"
					>
						<img
							alt="Propriété de la 3W Academy"
							src="https://3wa.fr/wp-content/themes/3wa2015/img/logos/big.png"
						/>
					</a>
				</p>
				<br />
				<span>Cet exercice</span> de{" "}
				<a href="https://3wa.fr">3W Academy</a> est mis à disposition{" "}
				<a
					rel="license"
					href="https://3wa.fr/propriete-materiel-pedagogique/"
				>
					pour l'usage personnel des étudiants. Pas de Rediffusion -
					Attribution - Pas d'Utilisation Commerciale - Pas de
					Modification - International
				</a>
				.<br />
				Les autorisations au-delà du champ de cette licence peuvent être
				obtenues auprès de{" "}
				<a href="mailto:contact@3wa.fr" rel="cc:morePermissions">
					contact@3wa.fr
				</a>
				. Les maquettes ont été réalisées par{" "}
				<a href="https://www.cath2nos.com">Catherine Denos</a>.
			</div>
		</footer>
	);
}

export default Footer;
