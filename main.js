// 1. WhatsApp Form Logic
const formButton = document.querySelector('.btn-submit');

// Agar button exist karta hai tabhi ye chalega
if(formButton) {
    formButton.addEventListener('click', function(e) {
        e.preventDefault(); // Page refresh hone se rokta hai

        // Input fields se data lena
        const inputs = document.querySelectorAll('.glass-input');
        
        // Check karte hain ki inputs sahi se mil rahe hain ya nahi
        if(inputs.length < 3) return;

        const name = inputs[0].value;
        const phone = inputs[1].value;
        const message = inputs[2].value;

        // Validation: Agar naam ya phone khali hai toh alert dega
        if(name.trim() === "" || phone.trim() === "") {
            alert("Please enter your Name and Phone number.");
            return;
        }

        // --- YAHAN AAPKA NUMBER SET HAI ---
        const myNumber = "917855901395"; 

        // WhatsApp Link Banana
        const whatsappUrl = `https://wa.me/${myNumber}?text=`
        + `*New Website Inquiry*%0a`
        + `*Name:* ${name}%0a`
        + `*Phone:* ${phone}%0a`
        + `*Requirement:* ${message}`;

        // Nayi tab mein WhatsApp kholna
        window.open(whatsappUrl, '_blank').focus();
    });
}

// 2. Card Selection Effect (Click karne par glow change hona)
const cards = document.querySelectorAll('.glass-card');

cards.forEach(card => {
    card.addEventListener('click', function() {
        // Purani active class hatana
        document.querySelector('.active-glow')?.classList.remove('active-glow');
        // Jis par click kiya uspar active class lagana
        this.classList.add('active-glow');
    });
});

// 3. Smooth Scrolling (Navbar links ke liye)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
