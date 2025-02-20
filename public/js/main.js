function loadPage(page) {
    fetch(`public/pages/${page}.html`)
        .then(response => {
            if (!response.ok) throw new Error("Page not found");
            return response.text();
        })
        .then(html => {
            document.getElementById("content").innerHTML = html;
        })
        .catch(error => {
            console.error("Error loading content:", error);
            document.getElementById("content").innerHTML = "<p>Error loading page.</p>";
        });
}

// Load 'about' page by default on page load
window.addEventListener("load", () => loadPage('about'));
