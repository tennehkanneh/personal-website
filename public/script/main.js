function loadContent(page) {
    const mainContent = document.getElementById('main-content');
    mainContent.classList.add('hidden'); // Hide content before loading new one

    // Fetch the page content
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            mainContent.innerHTML = data;
            mainContent.classList.remove('hidden'); // Show new content
            
            // Remove 'active' class from all links and add to clicked one
            const links = document.querySelectorAll('nav ul li a');
            links.forEach(link => link.classList.remove('active'));

            // Find the currently selected link and apply the 'active' class
            const selectedLink = document.querySelector(`nav ul li a[href="#"][onclick="loadContent('${page}')"]`);
            if (selectedLink) {
                selectedLink.classList.add('active');
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            mainContent.innerHTML = '<p>Sorry, content could not be loaded.</p>';
        });
}

window.onload = function() {
    loadContent('about.html');
};