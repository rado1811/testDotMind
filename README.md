TEST TECHNIQUE REACT

Spécifications
➔ Créer un repository gratuit sur Github / GitLab / Bitbucket
➔ Utiliser create-react-app ( https://github.com/facebook/create-react-app )
➔ Ne pas utiliser de librairies externes .
Objectifs
À l’aide du fichier JSON suivant (https://gist.github.com/bltnico/f46b7d186b13832b04c2b978fead2741) réaliser une application React composée de deux
parties:
➔ Une barre de recherche
➔ Une liste d’image (sous forme de grille)
Par défaut toutes les images sont visibles (trié par index si il n’y pas de bookmark ).
Affichez le nom de l’utilisateur en dessous de l’image. Simulez une attente (comme
un retour d’api) avant l’affichage de la liste (de préférence avec un message stipulant
que l’application charge).
À la recherche (par la clé username du JSON), la liste s’actualise automatiquement
pour afficher seulement les résultats correspondants.
Au clic sur une image, elle se sauvegarde en localStorage ou au contraire se
supprime si elle était déjà enregistrée. Ajoutez un élément visuel qui montre que ce
bloc (image + username) est enregistré en local.
À l’actualisation de la page si des images sont sauvegardées, elles doivent
apparaître en haut de la liste. Le reste étant toujours trié par index .
L’utilisation de Redux est totalement optionnelle mais pas interdite si vous le
souhaitez !