const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const year = document.getElementById("year");

if (year) year.textContent = new Date().getFullYear();

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => nav.classList.toggle("show"));
}

function handleLead(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name?.value || "";
  const phone = form.phone?.value || "";
  const service = form.service?.value || "Website Development";
  const message = form.message?.value || "";

  const text =
`Hello Netbuild.in,
Name: ${name}
Phone: ${phone}
Service: ${service}
Message: ${message}`;

  const url = "https://wa.me/917855901395?text=" + encodeURIComponent(text);
  window.open(url, "_blank");
  return false;
}
window.handleLead = handleLead;
