const statementButton = document.getElementById('personalStatement');
const blogButton = document.getElementById('blog');
const otherButton = document.getElementById('otherThings');
const contentDisplay = document.getElementById('contentDisplay');

statementButton.addEventListener('click', () => {
    fetch('personalstatement.html')
        .then(response => response.text())
        .then(html => {
            contentDisplay.innerHTML = html;
        });
});

blogButton.addEventListener('click', () => {
    contentDisplay.innerHTML = '<h2>Blog Title</h2><p>Here is some blog content.</p>';
});

otherButton.addEventListener('click', () => {
    contentDisplay.innerHTML = '<p>Other things content.</p>';
});