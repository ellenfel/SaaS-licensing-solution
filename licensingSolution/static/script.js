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
            // Clear the keys table
            const keysTableBody = document.querySelector('#keysTable tbody');
            keysTableBody.innerHTML = '';

            // Create a new table row for each key and add it to the 'keysTable' table
            data.keys.forEach(item => {
                const tr = document.createElement('tr');
                const tdId = document.createElement('td');
                tdId.textContent = item.id;
                const tdKey = document.createElement('td');
                tdKey.textContent = item.key;
                tr.appendChild(tdId);
                tr.appendChild(tdKey);
                keysTableBody.appendChild(tr);
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

