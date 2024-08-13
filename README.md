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

Pour gérer les icônes, utilisation du module FontAwesome :
`https://discord.com/channels/1255867339543547904/1272887945023717376/1272888185831297127`


Pour gérer les images dans l'outil vite :
`https://discord.com/channels/1255867339543547904/1272114812788150283/1272888655999926354`