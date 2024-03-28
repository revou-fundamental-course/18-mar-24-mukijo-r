let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); 
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); 

        if (validateForm()) {
            alert("Terima kasih telah menghubungi kami, silahkan periksa email untuk proses selanjutnya");
            document.getElementById("contact-form").reset();
        }
    });
});

function validateForm() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var produk = document.getElementById("produk").value;

    if (nama == "" || email == "" || produk == "Select Option") {
        alert("Semua isian harus diisi");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Email tidak valid");
        return false;
    }

    return true; 
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

