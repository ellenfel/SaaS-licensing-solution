// Get the modal, buttons, and input elements
const modal = document.getElementById("myModal");
const generateKeyButton = document.getElementById("generateKeyButton");
const confirmButton = document.getElementById("confirmButton");
const closeButton = document.getElementsByClassName("close")[0];
const expireTimeInput = document.getElementById('expireTime');

// Function to add event listeners to 'Active' cells
function addActiveStateEventListeners() {
    document.querySelectorAll('#keysTable tbody td:nth-child(5)').forEach((item) => {
        item.removeEventListener('click', toggleActiveState);
        item.addEventListener('click', toggleActiveState);
    });
}


// Function to toggle the active state of a key
function toggleActiveState(event) {
    const keyId = event.target.parentElement.firstElementChild.textContent;
    fetch('/toggle_active/' + keyId, { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            const activeState = data.active ? 'Yes' : 'No';
            event.target.textContent = activeState;
            event.target.className = activeState === 'Yes' ? 'active' : 'inactive';
            addActiveStateEventListeners();
        });
}

// Event listeners
generateKeyButton.onclick = () => { modal.style.display = "block"; };
closeButton.onclick = window.onclick = event => {
    if (event.target == modal || event.target == closeButton) {
        modal.style.display = "none";
    }
};

confirmButton.onclick = () => {
    modal.style.display = "none";
    const expireTime = expireTimeInput.value || 30;
    fetch('/keygen', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ expireTime: expireTime })
    })
        .then(response => response.json())
        .then(data => {
            const keysTableBody = document.querySelector('#keysTable tbody');
            keysTableBody.innerHTML = '';

            //0
            data.keys.forEach(item => {
                const tr = document.createElement('tr');
                ['id', 'key', 'created', 'expireTime', 'active'].forEach(field => {
                    const td = document.createElement('td');
                    td.textContent = item[field];
                    if (field === 'active') {
                        td.className = item[field] === 'Yes' ? 'active' : 'inactive';
                    }
                    tr.appendChild(td);
                });
            
                keysTableBody.appendChild(tr);
            });
            

            addActiveStateEventListeners();
        });
};

document.addEventListener('DOMContentLoaded', addActiveStateEventListeners);


//0
// This function fetches the keys from the server and displays them in the table
function loadKeys() {
    // Fetch the keys from the server
    fetch('/keys', {
        method: 'GET'
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
            tdActive.className = item.active === 'Yes' ? 'active' : 'inactive';
            const tdCreated = document.createElement('td');
            tdCreated.textContent = item.created;
            tr.appendChild(tdId);
            tr.appendChild(tdKey);
            tr.appendChild(tdExpireTime);
            tr.appendChild(tdActive);
            tr.appendChild(tdCreated);
            keysTableBody.appendChild(tr);
        });
        

        // Add event listeners to the 'Active' cells
        addActiveStateEventListeners();
    });
}

// Run the loadKeys function when the page is loaded
document.addEventListener('DOMContentLoaded', loadKeys);

