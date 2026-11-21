# Travailler à deux sur le portfolio

## De la demande à la fusion

1. Précisez ensemble le résultat attendu et les pages concernées. Vérifiez `git status` avant de modifier les fichiers. Pour un nouveau sujet, partez d’une copie de travail propre et créez une branche avec `git fetch origin`, puis `git switch -c nom-du-sujet origin/main`.
2. Travaillez et testez en local. Gardez les changements centrés sur la demande et suivez les conventions du fichier modifié. La pull request vient quand la version peut être essayée par l’autre personne.
3. Relisez `git diff`, ajoutez les fichiers concernés avec `git add`, puis vérifiez `git diff --cached`. Faites le commit et poussez avec `git push -u origin nom-du-sujet`.
4. Sur GitHub, ouvrez une **pull request** de la branche vers `main`. Expliquez ce qui change, comment le tester et ce qui reste à vérifier. L’autre personne peut commenter ou demander des corrections. Chaque nouveau commit poussé sur cette branche met à jour la même demande.
5. Après la relecture et les essais, la personne qui valide peut fusionner sur GitHub. Pour repartir du résultat, revenez sur `main` et lancez `git pull --ff-only`.

## Refaire le test de l’admin

Depuis la racine, avec Node.js 26 et PowerShell, lancez `npm.cmd ci`. Dans `.env.local` à la racine, ajoutez une ligne `ADMIN_PASSWORD=code-local-de-votre-choix`. Ce fichier est ignoré par Git. Lancez `npm.cmd run admin` et ouvrez `http://127.0.0.1:5174/admin`. Si vous choisissez un autre port via `ADMIN_PORT`, utilisez ce port dans l’adresse. Le portfolio se lance séparément avec `npm.cmd run dev`.

Connectez-vous, cochez CV et Contact, puis passez de 7 à 30 jours. Déconnectez-vous et vérifiez que `/admin/data` renvoie 401. Lancez aussi `npm.cmd run build` et `npm.cmd run lint` avant la revue.

## D’où viennent les chiffres

- Dans le portfolio, `src/main.tsx` utilise `VITE_POSTHOG_PROJECT_TOKEN` et `VITE_POSTHOG_HOST` pour envoyer les vues de page à PostHog. Ces variables sont publiques et lues lors de la compilation.
- Dans l’admin, `admin/server.mjs` vérifie le code côté serveur et crée une session de 30 minutes. Le graphique appelle `GET /admin/data` avec le cookie de session. Changer de page à comparer ou de période redessine le graphique dans le navigateur.
- `admin/traffic.mjs` utilise `POSTHOG_PROJECT_ID` et `POSTHOG_PERSONAL_API_KEY` côté serveur pour compter les vues du domaine par page et par jour. Gardez la clé personnelle dans l’environnement serveur. Le rapport est conservé en mémoire 24 heures. Le bouton **Actualiser** demande une nouvelle lecture via `POST /admin/data`.
- Pour la démo, laissez les deux variables de lecture PostHog absentes. Le graphique indique alors que les chiffres sont fictifs. Pour ajouter une page à comparer, reprenez son chemin dans le routeur du portfolio et ajoutez-le à la liste `pages` de `admin/traffic.mjs`.

Cette version de l’admin écoute sur l’adresse locale du PC. La mise en ligne de `/admin` sur Railway et la validation avec les données réelles constituent une étape ultérieure.
