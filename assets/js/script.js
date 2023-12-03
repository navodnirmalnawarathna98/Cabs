window.addEventListener('scroll', function() {
    var whatsappBtn = document.getElementById('whatsappBtn');
    var footer = document.querySelector('footer');
  
    // Get the footer position relative to the viewport
    var footerPos = footer.getBoundingClientRect().top;
  
    // Show/hide the WhatsApp button based on the footer position
    if (footerPos <= window.innerHeight) {
      whatsappBtn.style.display = 'none'; // Hide the WhatsApp button
    } else {
      whatsappBtn.style.display = 'block'; // Show the WhatsApp button
    }
  });
  