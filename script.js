// Select the logo link using its class
document.querySelector('.logo').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the link
    location.reload(); // Reload the page
});
