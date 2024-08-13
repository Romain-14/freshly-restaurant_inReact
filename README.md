# Refactorisation en react de Freshly Restaurant

Les ressources
- styles, polices d'écriture, images, vidéos, données en json(menus)

Se trouvent dans le dossier `src/assets`.

Vous trouverez les logos ou images décoratives peu utilisés dans le dossier `public`.

Un dossier `Components` simple, permets de mettre en place les différentes composants requis pour le bien de l'application.

- Le `header`
- La page principal `home`
- Le `Slider`
- Le `Menu`
  - composant sur lequel on boucle depuis le `Home` afin d'afficher chaque menu
  - dans celui ci, structure d'un article pour afficher le menu avec les données de la props transmise depuis le composant `Home`
  - on boucle également sur les ingrédients pour les afficher sous forme de liste
- Le `footer`

## Pour gérer les icônes, utilisation du module FontAwesome :
Installer les packages principaux
```bash
npm install @fortawesome/fontawesome-svg-core
npm install @fortawesome/react-fontawesome@latest
```

Installer le theme de l'icône (solid - regular etc..)

```bash
npm i @fortawesome/free-solid-svg-icons
npm i @fortawesome/free-brands-svg-icons
```

Utiliser une icône :
au clic sur une icône, une modal propose plusieurs options
Cliquer sur l'onglet react puis Individual import, pour cliquer sur le composant pour le copier

Se rendre dans le composant où l'icône sera utilisé :

```jsx
// Importer le composant principal puis l'icône du composant
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// coller le composant copié précédemment sur le site 
return (
    <FontAwesomeIcon icon={faStar} />
)
```

## Pour gérer les images dans l'outil vite :

Image statique

### Image dans le dossier `src`
Type d'image lié à un composant de décoration, et/ou légère.
On l'importe comme on importerai n'importe quel autre module, relativement.

```jsx
import kebab from "./kebab-paysage.webp";

function MyComponent() {
    return <img src={kebab} alt="The Alt" />;
}
```

### Image stockée dans le dossier `public`
Type d'image amenée à ne pas changer, lourdes, et/ou utilisés pour décorer le site.
Utilisée pour un composant ou dans un fichier css.

```css
body{
    background-image: url('/background.webp');
}
```

```jsx
function Header() {
    const imageUrl = import.meta.env.BASE_URL + 'header-banner.webp';
    return <img src={imageUrl} alt="Site Banner" />;
}
```

## image dynamique
On forme une nouvelle URL en utilisant l'objet URL de JavaScript qui permets de manipuler des URL.
`new URL` prend en paramètre l'URL de base et le chemin relatif de l'image
`import.meta.url` est l'URL du module courant.
`href` est l'URL complète de l'image.

```jsx
function MyComponent() {
    const url_img = new URL(`/src/assets/kebab-paysage.webp`, import.meta.url).
    return <img src={url_img} alt="The Alt" />;
}
```

## image sur un serveur

on indique sur quel serveur se trouve l'image.
Ca peut être une banque d'image, notre serveur API ou externe etc...

```jsx
function MyComponent() {
    return <img src="http://localhost:9000/images/kebab-paysage.webp" alt="The Alt" />;
}
```
