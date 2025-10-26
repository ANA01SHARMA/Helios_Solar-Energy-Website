document.addEventListener("DOMContentLoaded", function() {
    // Fetch footer.html
    fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        // Insert footer HTML into the placeholder element
        // Ensure the element is available in the DOM
        const navbarPlaceholder = document.getElementById("footer-placeholder");
        if (navbarPlaceholder) {
            navbarPlaceholder.innerHTML = data;
        } else {
            console.error('Footer placeholder element not found');
        }
    })
    .catch(error => {
        console.error('Error fetching footer:', error);
    });
});
