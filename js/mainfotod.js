

// Shto këtë kod në main.js
function shfaqReklamatd() {
    const container = document.getElementById('reklamat-container');
    if (!container) return;
    
    // Lista e fotove (shto sa të duash)
    const reklamat = [
        { titull: "Reklamë", foto: "ad1.jpg" },
        { titull: "Oferta Speciale", foto: "ad2.jpg" },
        { titull: "Produkte të Reja", foto: "ad3.jpg" },
        { titull: "Ulje Çmimesh", foto: "ad4.jpg" }
    ];
    
    let html = '';
    reklamat.forEach(reklama => {
        html += `
            <div class="ad-box">
                <h4>${reklama.titull}</h4>
                <img src="images/${reklama.foto}" alt="${reklama.titull}">
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Thirre këtë funksion kur të ngarkohet faqja
document.addEventListener('DOMContentLoaded', function() {
    shfaqReklamatd();
});



/*
function shfaqReklamat() {
    // Merr të dy kontejnerët
    const container1 = document.getElementById('reklamat-container');
    const container2 = document.getElementById('reklamatm-container');
    
    // Lista e fotove
    const reklamat = [
        { titull: "Reklamë", foto: "ad1.jpg" },
        { titull: "Oferta Speciale", foto: "ad2.jpg" },
        { titull: "Produkte të Reja", foto: "ad3.jpg" },
        { titull: "Ulje Çmimesh", foto: "ad4.jpg" }
    ];
    
    // Krijo HTML-in
    let html = '';
    reklamat.forEach(reklama => {
        html += `
            <div class="ad-box">
                <h4>${reklama.titull}</h4>
                <img src="images/${reklama.foto}" alt="${reklama.titull}">
            </div>
        `;
    });
    
    // Vendose HTML-in në të dy kontejnerët (nëse ekzistojnë)
    if (container1) {
        container1.innerHTML = html;
    }
    
    if (container2) {
        container2.innerHTML = html;
    }
}

// Thirre kur të ngarkohet faqja
document.addEventListener('DOMContentLoaded', function() {
    shfaqReklamat();
});
*/