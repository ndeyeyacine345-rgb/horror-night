document.getElementById('form-halloween').addEventListener('submit', function(e) {
    e.preventDefault();
    const nom = e.target.elements[0].value; // Premier champ (Nom)
    const prixUnitaire = parseInt(document.getElementById('formule').value);
    const quantite = parseInt(document.getElementById('quantite').value);
    const mode = document.getElementById('paiement').value;
    const total = prixUnitaire * quantite;
    
        const monNumero = "221767747165"; 

    const messageZone = document.getElementById('message-validation');
    const detailsZone = document.getElementById('details-confirmation');
    const enteteForm = document.getElementById('entete-form');
    alert("🎃 BOO ! " + nom + ", tes " + quantite + " places sont réservées.\nTotal à payer : " + total + " FCFA.");
    e.target.style.display = 'none';
    enteteForm.style.display = 'none';
    messageZone.style.display = 'block';
    detailsZone.innerHTML = `
        <br>Salut <strong>${nom}</strong>,<br><br>
        Ta réservation pour <strong>${quantite} ticket(s)</strong> est bien enregistrée.<br>
        Montant total : <strong style="color: #ff9f43;">${total} FCFA</strong><br>
        À envoyer via <strong>${mode}</strong> au :<br>
        <span style="font-size: 1.6rem; color: #ff9f43; display: block; margin: 15px 0;"><strong>76 774 71 65</strong></span>
        
        <p style="margin-bottom: 20px; font-size: 0.9rem;">⚠️ <strong>DERNIÈRE ÉTAPE :</strong> Clique sur le bouton ci-dessous pour m'envoyer la <strong>capture d'écran</strong> du transfert.</p>
        
        <a href="https://wa.me/${monNumero}?text=Salut,%20je%20suis%20${nom}.%20Voici%20ma%20capture%20de%20paiement%20de%20${total}%20FCFA%20pour%20la%20Horror%20Movie%20Night%20🎃" 
           target="_blank" 
           style="display: inline-block; background: #25D366; color: white; padding: 15px 25px; border-radius: 10px; text-decoration: none; font-weight: bold; font-family: sans-serif; box-shadow: 0 4px 10px rgba(0,0,0,0.5);">
           📱 ENVOYER MA CAPTURE SUR WHATSAPP
        </a>
    `;
});

function demarrerChrono() {
    // Date cible : 31 Octobre 2026 à 20h
    const dateEvenement = new Date("Oct 31, 2026 20:00:00").getTime();

    const intervalle = setInterval(function() {
        const maintenant = new Date().getTime();
        const distance = dateEvenement - maintenant;
        const j = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("jours").innerText = j < 10 ? "0" + j : j;
        document.getElementById("heures").innerText = h < 10 ? "0" + h : h;
        document.getElementById("minutes").innerText = m < 10 ? "0" + m : m;
        document.getElementById("secondes").innerText = s < 10 ? "0" + s : s;
        if (distance < 0) {
            clearInterval(intervalle);
            document.getElementById("chrono").innerHTML = "<h3>LA NUIT A COMMENCÉ... 🎃</h3>";
        }
    }, 1000);
}

demarrerChrono();