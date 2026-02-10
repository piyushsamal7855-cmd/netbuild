const WHATSAPP_NUMBER = "917855901395"; // India code added

document.getElementById("leadForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const need = document.getElementById("need").value.trim();

  const msg =
`Hello Netbuild.in 👋
Name: ${name}
Phone: ${phone}
Requirement: ${need}`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
});

// Optional glow toggle
document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("lowGlow");
});
