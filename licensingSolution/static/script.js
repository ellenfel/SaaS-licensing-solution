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

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("generateKeyButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the expiration time input field
var expireTimeInput = document.getElementById('expireTime');

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  // Send the POST request when the modal is closed
  var expireTime = expireTimeInput.value || 30;
  fetch('/keygen', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({expireTime: expireTime})
  })
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
          const tdExpireTime = document.createElement('td');
          tdExpireTime.textContent = item.expireTime;
          tr.appendChild(tdId);
          tr.appendChild(tdKey);
          tr.appendChild(tdExpireTime);
          keysTableBody.appendChild(tr);
      });
  });
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    // Don't send the POST request if the modal is closed by clicking outside
  }
  addActiveStateEventListeners();
}

function addActiveStateEventListeners() {
    document.querySelectorAll('#keysTable tbody td:nth-child(4)').forEach((item) => {
        // Remove any existing event listener
        item.removeEventListener('click', toggleActiveState);
        // Add the event listener
        item.addEventListener('click', toggleActiveState);
    });
}

// Get the Confirm button that confirms the input and closes the modal
var confirmBtn = document.getElementById("confirmButton");

confirmBtn.onclick = function() {
    modal.style.display = "none";
    // Send the POST request when the modal is closed
    var expireTime = expireTimeInput.value || 30;
    fetch('/keygen', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({expireTime: expireTime})
    })
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
            const tdExpireTime = document.createElement('td');
            tdExpireTime.textContent = item.expireTime;
            const tdActive = document.createElement('td');
            tdActive.textContent = item.active;

            if (item.active === 'Yes') {
                tdActive.className = 'active';
            } else {
                tdActive.className = 'inactive';
            }
            tr.appendChild(tdActive);
            

            tdActive.className = item.active === 'Yes' ? 'active' : 'inactive';  // Add 'active' or 'inactive' class
            tr.appendChild(tdId);
            tr.appendChild(tdKey);
            tr.appendChild(tdExpireTime);
            tr.appendChild(tdActive);
            keysTableBody.appendChild(tr);
        });

        // Add event listeners to the 'Active' cells
        document.querySelectorAll('#keysTable tbody td:nth-child(4)').forEach((item) => {
            item.addEventListener('click', toggleActiveState);
        });
    });
    addActiveStateEventListeners();
}



// When the user clicks on a table cell in the 'Active' column
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('#keysTable tbody td:nth-child(4)').forEach((item) => {
        item.addEventListener('click', (event) => {
            // Get the id of the key from the first cell in the row
            const keyId = event.target.parentElement.firstElementChild.textContent;
            // Send a POST request to toggle the active state of the key
            fetch('/toggle_active/' + keyId, {
                method: 'POST'
            })
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
                    const tdExpireTime = document.createElement('td');
                    tdExpireTime.textContent = item.expireTime;
                    const tdActive = document.createElement('td');
                    tdActive.textContent = item.active;
                    tr.appendChild(tdId);
                    tr.appendChild(tdKey);
                    tr.appendChild(tdExpireTime);
                    tr.appendChild(tdActive);
                    keysTableBody.appendChild(tr);
                });
            });
        });
    });
});

const activeState = data.active ? 'Yes' : 'No';


function toggleActiveState(event) {
    const keyId = event.target.parentElement.firstElementChild.textContent;
    fetch('/toggle_active/' + keyId, {
        method: 'POST'
    })
    .then(response => response.json())
    .then(data => {
        const activeState = data.active ? 'Yes' : 'No';
        event.target.textContent = activeState;

        // Update the class of the 'Active' cell to control the color
        if (activeState === 'Yes') {
            event.target.className = 'active';
        } else {
            event.target.className = 'inactive';
        }

        // Add event listeners to the 'Active' cells
        addActiveStateEventListeners();
    });
}





// Add event listeners after initial page load
document.addEventListener('DOMContentLoaded', addActiveStateEventListeners);

