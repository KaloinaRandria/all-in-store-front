## bootstrap

Framework CSS utilisé pour créer rapidement une interface moderne et responsive.
Il fournit des classes prêtes à l’emploi pour :

* les boutons (`btn`, `btn-primary`)
* les grilles (`container`, `row`, `col`)
* les formulaires, navbar, etc.

---

## axios

Client HTTP qui permet de communiquer avec ton backend (Spring Boot).
Il simplifie les requêtes API (`GET`, `POST`, `PUT`, `DELETE`) et gère :

* les headers (ex: token JWT)
* les interceptors (pour sécuriser les requêtes)
* les réponses et erreurs

---

## jwt-decode

Permet de décoder un token JWT côté frontend.
Utile pour :

* récupérer les informations utilisateur (id, rôle…)
* vérifier l’expiration du token

⚠️ Ne sert pas à sécuriser, seulement à lire le token.

---

## react-icons

Bibliothèque d’icônes prête à l’emploi.
Tu peux importer facilement des icônes (FontAwesome, Material, etc.) et les utiliser comme des composants React.

---

## react-toastify

Permet d’afficher des notifications (toast) dans l’application :

* succès (ex: "Enregistrement réussi")
* erreur (ex: "Échec de connexion")
* avertissement

Améliore beaucoup l’expérience utilisateur.

---

## react-hook-form

Librairie pour gérer les formulaires de manière performante.
Elle permet :

* de récupérer les données facilement
* de valider les champs
* d’éviter trop de re-render (meilleure performance)

Très utilisée en production.

---

## @reduxjs/toolkit + react-redux

Outils pour gérer l’état global de l’application.

Utilisé pour :

* stocker l’utilisateur connecté
* partager des données entre plusieurs pages
* gérer une logique complexe

Redux Toolkit simplifie Redux (moins de code, plus propre).

---

## recharts

Bibliothèque pour créer des graphiques :

* courbes (line chart)
* barres (bar chart)
* camemberts (pie chart)

Utile pour les dashboards (statistiques, rapports).

---

# Conclusion

Ces dépendances couvrent les besoins essentiels de ton application :

* UI → bootstrap, react-icons
* API → axios
* Auth → jwt-decode
* UX → react-toastify
* Formulaires → react-hook-form
* State global → redux
* Graphiques → recharts

