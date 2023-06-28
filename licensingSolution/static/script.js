// Get all the configurator buttons
const configButtons = document.querySelectorAll('.config-btn');

// Add a click event listener to each button
configButtons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        // Get the text of the clicked button
        const btnText = event.target.textContent;
        // Get the main content div
        const mainContent = document.querySelector('#main-content');
        // Set the text of the main content div to the button text
        mainContent.textContent = btnText;
    });
});

// Add event listener to the Generate Key button
document.getElementById('generateKeyButton').addEventListener('click', function() {
    fetch('/keygen', { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            // Create a new list item and add it to the 'keysList' unordered list
            const li = document.createElement('li');
            li.textContent = data.key;
            document.getElementById('keysList').appendChild(li);
        });
});
