document.getElementById('form-halloween').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nom = e.target.elements[0].value;
    const prix = document.getElementById('formule').value;
    const mode = document.getElementById('paiement').value;
    const messageZone = document.getElementById('message-validation');
    const detailsZone = document.getElementById('details-confirmation');
    const enteteForm = document.getElementById('entete-form');

    alert(`🎃 BOO ! Merci ${nom}. \nTa place est bloquée. \nFais ton transfert de ${prix} FCFA au 767747165 (${mode}).`);

    e.target.style.display = 'none';
    enteteForm.style.display = 'none';
    
    messageZone.style.display = 'block';
    detailsZone.innerHTML = `
        <span style="font-size: 2rem;">🎃</span><br>
        Salut <strong>${nom}</strong>,<br><br>
        Ta réservation pour la <strong> Horror Movie Night</strong> est enregistrée.<br>
        Envoie vite tes <strong>${prix} FCFA</strong> via <strong>${mode}</strong> au :<br>
        <span style="font-size: 1.6rem; color: #ff9f43; display: block; margin: 15px 0;"><strong>76 774 71 65</strong></span>
        On t'attend à 20H à la Fenêtre Mermoz... Ne sois pas en retard.
    `;
});
function demarrerChrono() {
    // Date de l'événement : 31 Octobre 2026 à 20:00:00
    const dateEvenement = new Date("Oct 31, 2026 20:00:00").getTime();

    const intervalle = setInterval(function() {
        const maintenant = new Date().getTime();
        const distance = dateEvenement - maintenant;

        // Calcul du temps pour les jours, heures, minutes et secondes
        const j = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);

        // Affichage des résultats
        document.getElementById("jours").innerText = j < 10 ? "0" + j : j;
        document.getElementById("heures").innerText = h < 10 ? "0" + h : h;
        document.getElementById("minutes").innerText = m < 10 ? "0" + m : m;
        document.getElementById("secondes").innerText = s < 10 ? "0" + s : s;

        // Si le compte à rebours est fini
        if (distance < 0) {
            clearInterval(intervalle);
            document.getElementById("chrono").innerHTML = "<h3>LA NUIT A COMMENCÉ... 🎃</h3>";
        }
    }, 1000);
}

// Lancer le chrono au chargement de la page
demarrerChrono();