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
            // Clear the keys list
            const keysList = document.getElementById('keysList');
            keysList.innerHTML = '';

            // Create a new list item for each key and add it to the 'keysList' unordered list
            data.keys.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.id}. ${item.key}`;
                keysList.appendChild(li);
            });
        });
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("generateKeyButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

