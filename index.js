/* Mobile Menu */
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links a");

  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });
  }



/* Close Menu When Link Clicked (Mobile) */
  links.forEach(link => {
    link.addEventListener("click", function () {
      navLinks.classList.remove("show");
    });
  });

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


/****** Contact ******/

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("status");
    const sheetURL = "https://script.google.com/macros/s/AKfycby116iTo8F52F7A5gIOQuSGeIWt79ZAreDHqG5eNk8VSrLgLBpOeCq0RWBCPwO9HdVx3Q/exec"; // Replace with your Google Apps Script Web App URL

    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const formData = {
        user_name: form.user_name.value,
        user_email: form.user_email.value,
        user_prof: form.user_prof.value,
        user_orf: form.user_org.value,
        message: form.message.value
      };

      fetch(sheetURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        if(data.status === 'success'){
          status.innerHTML = "<span class='text-success'>Message sent successfully!</span>";
          form.reset();
        } else {
          status.innerHTML = "<span class='text-danger'>Failed to send message.</span>";
        }
      })
      .catch(err => {
        console.error(err);
        status.innerHTML = "<span class='text-danger'>Failed to send message.</span>";
      });
    });
  });
   
  // (function() {
  //   emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
  // })();

  // // Wait until DOM is fully loaded
  // document.addEventListener("DOMContentLoaded", function() {
  //   const form = document.getElementById("contact-form");
  //   const status = document.getElementById("status");

  //   form.addEventListener("submit", function(e) {
  //     e.preventDefault(); // Prevent default form submission

  //     emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form)
  //       .then(() => {
  //         status.innerHTML = "<span class='text-success'>Message sent successfully!</span>";
  //         form.reset();
  //       })
  //       .catch((err) => {
  //         status.innerHTML = "<span class='text-danger'>Failed to send message. Try again.</span>";
  //         console.error("EmailJS error:", err);
  //       });
  //   });
  // });






/* Contact */
// function sendMsg(e){
//   e.preventDefault();
//   alert("Message sent! (Connect EmailJS to make it live)");
// }


// function sendMail() {
//   let name = document.getElementById("name").value;
//   let email = document.getElementById("email").value;
//   let message = document.getElementById("message").value;

//   let subject = "Contact Form Message";
//   let body =
//     "Name: " + name + "%0D%0A" +
//     "Email: " + email + "%0D%0A%0D%0A" +
//     message;

//   window.location.href =
//     "mailto:dhang.prakriti@email.com?subject=" +
//     encodeURIComponent(subject) +
//     "&body=" +
//     body;
// }

