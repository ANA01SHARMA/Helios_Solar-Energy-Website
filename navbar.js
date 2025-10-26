document.addEventListener("DOMContentLoaded", function () {
    // Fetch navbar.html
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            // Insert navbar HTML into the placeholder element
            // Ensure the element is available in the DOM
            const navbarPlaceholder = document.getElementById("navbar-placeholder");
            if (navbarPlaceholder) {
                navbarPlaceholder.innerHTML = data;

                // Scroll to the top of the page
                window.scrollTo({ top: 0, behavior: 'smooth' }); // 'smooth' for smooth scrolling
            } else {
                console.error('Navbar placeholder element not found');
            }
        })
        .catch(error => {
            console.error('Error fetching navbar:', error);
        });
});
