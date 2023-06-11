console.log('yes, i made it')

let id = 0;

   document.getElementById('add').addEventListener('click', () => {
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-start-week').value
    row.insertCell(1).innerHTML = document.getElementById('new-chore-week').value
    row.insertCell(2).innerHTML = document.getElementById('new-name').value

    let tasks = row.insertCell(3);

    tasks.appendChild(createDeteleteButton(id++))
    document.getElementById('new-start-week').value, ''

});

function createDeteleteButton (id) {
    let btn = document.createElement ('button');
    btn.className = 'btn btn-danger';
    btn.id = id;
    btn.innerHTML = 'delete';
    btn.onclick = () => {
        console.log(`Delete Row: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`)

        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;

}
        