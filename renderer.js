let users = [];
let userId = 1;

const userTable = document.getElementById('userTable').getElementsByTagName('tbody')[0];
const userForm = document.getElementById('userForm');
const addUserBtn = document.getElementById('addUserBtn');
const saveUserBtn = document.getElementById('saveUserBtn');
const cancelBtn = document.getElementById('cancelBtn');

addUserBtn.addEventListener('click', () => {
    userForm.style.display = 'block';
});

cancelBtn.addEventListener('click', () => {
    userForm.style.display = 'none';
    resetForm();
});

saveUserBtn.addEventListener('click', () => {
    const userName = document.getElementById('userName').value;
    const userAge = document.getElementById('userAge').value;

    if (userName && userAge) {
        users.push({ id: userId++, name: userName, age: userAge });
        resetForm();
        updateTable();
    }
});

function resetForm() {
    document.getElementById('userName').value = '';
    document.getElementById('userAge').value = '';
    userForm.style.display = 'none';
}

function updateTable() {
    userTable.innerHTML = '';
    users.forEach(user => {
        const row = userTable.insertRow();
        row.insertCell(0).textContent = user.id;
        row.insertCell(1).textContent = user.name;
        row.insertCell(2).textContent = user.age;
    });
}
