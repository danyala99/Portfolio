var form = document.getElementById("my-form");

   async function handleSubmit(event) {
     event.preventDefault();
     var status = document.getElementById("status");
     var data = new FormData(event.target);
     fetch(event.target.action, {
       method: form.method,
       body: data,
       headers: {
           'Accept': 'application/json'
       }
     }).then(response => {
       status.classList.add('success');
       status.innerHTML = "Thank you!";
       form.reset();
     }).catch(error => {
       status.classList.add('error');
       status.innerHTML = "Oops! There was a problem sending your email.";
     });
   }
   form.addEventListener("submit", handleSubmit)

   window.addEventListener('scroll', function() {
     var header = document.querySelector('header');
     header.classList.toggle('sticky', window.scrollY > 0);
   });

   function toggleMenu() {
     var menuToggle = document.querySelector('.toggle');
     var menu = document.querySelector('.menu');
     menuToggle.classList.toggle('active');
     menu.classList.toggle('active');
   }
