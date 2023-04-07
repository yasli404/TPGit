// Récupération des éléments du formulaire
const form = document.querySelector('form');
const nom = document.querySelector('#nom');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

// Fonction de validation du formulaire
const validerFormulaire = (event) => {
  event.preventDefault(); // Empêche l'envoi du formulaire par défaut

  // Vérification des champs requis
  if (nom.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
    alert('Veuillez remplir tous les champs.');
    return;
  }

  // Vérification de l'e-mail
  const regexEmail = /^\S+@\S+\.\S+$/;
  if (!regexEmail.test(email.value)) {
    alert('Veuillez saisir une adresse e-mail valide.');
    return;
  }

  // Envoi du formulaire si tout est OK
  alert('Formulaire envoyé !');
  form.reset();
};

// Ajout de l'événement "submit" sur le formulaire
form.addEventListener('submit', validerFormulaire);
