function shfaqReklamatm() {
    // Merr të dy kontejnerët
    
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
   
    
    if (container2) {
        container2.innerHTML = html;
    }
}

// Thirre kur të ngarkohet faqja
document.addEventListener('DOMContentLoaded', function() {
    shfaqReklamatm();
});