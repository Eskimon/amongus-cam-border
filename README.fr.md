([Click to go to English doc](README.md))

# Among Us, bordure de caméra animée

L'idée derrière ce projet est de propose un peu d'interactivité et d'animation autour de votre facecam pour votre stream lors de vos parties d'AmongUs.

- Si vous ou un de vos modos envoi le message `!imp` dans le chat, la bordure s'anime en rouge
- Si vous ou un de vos modos envoi le message `!crew` dans le chat, la bordure s'anime en bleu

Pour avoir quelque chose de plus sympa, la bordure peut-être animé selon un de ces trois modes :

- **blink** : la bordure clignote du transparent vers la couleur et vice-versa
- **rotate** : la bordure tourne autour de la facecam (voir le gif de démo ci dessous)
- **static** : la bordure ne bouge pas, il y a juste la couleur

[![Voici un gif de démo](demo/amongus-border.gif)](demo/amongus-border.mp4)

## Ajouter la bordure dans votre setup OBS Studio ou StreamLabs OBS

Pour ajouter cette bordure, créer simplement une nouvelle source "navigateur" avec l'url suivante : `https://eskimon.fr/amongus-cam-border/`

**Ensuite**, vous pourrez la parametrer avec les paramètres suivants à ajouter dans l'url elle même (exemple juste après) :

- `channel`: votre chaine Twitch ! (nécessaire pour lire le chat)
- `h`: la hauteur (en px) de votre facecam
- `w`: la largeur (en px) de votre facecam
- `t`: la position de votre camera en partant du haut (en px)
- `l`: la position de votre camera en partant de la gauche (en px)
- `style`: le style de l'animation voulu parmis : `static`, `blink`, `rotate` (défaut: rotate)
- `speed`: la vitesse de l'animation en secondes (défaut 5)
- `radius`: le rayon de la bordure en pixels (défaut 0)

Du coup par exemple si ma facecam est dans le coin en bas à gauche de ma scène (600px depuis le haut, 60px depuis la gauche) et fait une taille de 400px par 300px alors j'utiliserais l'URL suivante :

`https://eskimon.fr/amongus-cam-border/?channel=eskimon&h=300&h=400&t=600&l=60&style=blink&speed=1`

## Trouver la taille de ma facecam

Si vous ne savez pas comment trouver la taille de votre facecam c'est très simple. Cherchez tout d'abord la source camera dans votre OBS. Ensuite, faite un clic droit dessus puis appuyez sur "Edit Transform...". Dans la fenêtre qui s'affiche vous aurez alors toutes les infos nécessaires !

![Le menu "Edit Transform..."](demo/edit-modal.png)

## Commandes

Pour afficher la couleur de l'imposteur envoyez dans le chat `!i`, `!imp` ou `!impostor`.
Pour afficher la couleur du crewmate envoyez dans le chat `!c`, `!crew` ou `!crewmate`.

Ces commandes peuvent être envoyées par vous-même ou par un modérateur de votre chaine.

## Astuce

Si vous ne voulez pas faire un "alt-tab" pendant une partie rappelez vous que tout cela se commande par des messages dans le chat. Vous pouvez donc simplement utiliser un StreamDeck ou n'importe quelle solution de ce genre.

Si vous n'avez pas de StreamDeck, j'ai développé une [solution similaire 100% en ligne et gratuite](https://deckydecky.com) qui s'appelle DeckyDecky et dispo à l'adresse <https://deckydecky.com>. Avec elle vous pourrez piloter tout les aspects de votre stream et simplement créer des boutons !imp ou !crew pour envoyer les messages correspondants dans le chat. Ca fonctionne sur n'importe quelle PC,tablette ou smartphone qui traine dans les parages !

![https://deckydecky.com](demo/deckydecky.jpg)
