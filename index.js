/* Mobile Menu */
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });
  }
});


/* Modal */
const cards=document.querySelectorAll(".project-card");
const modal=document.getElementById("modal");

cards.forEach(card=>{
card.onclick=()=>{
modal.style.display="block";
document.getElementById("modal-title").textContent=card.dataset.title;
document.getElementById("modal-desc").textContent=card.dataset.desc;
};
});

function closeModal(){modal.style.display="none";}

/* Filter */
function filterProjects(cat){
  document.querySelectorAll(".project-card").forEach(card=>{
    card.style.display=(cat==='all'||card.dataset.category===cat)
    ?'block':'none';
  });
}

/* Contact */
function sendMsg(e){
  e.preventDefault();
  alert("Message sent! (Connect EmailJS to make it live)");
}


function sendEmail(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const subject = encodeURIComponent(
    "Portfolio Contact from " + name
  );

  const body = encodeURIComponent(
    "Name: " + name + "\n" +
    "Email: " + email + "\n\n" +
    "Message:\n" + message
  );

  // 👉 Replace with your Gmail ID
  window.location.href =
    `mailto:dhang.prakriti@gmail.com?subject=${subject}&body=${body}`;
}