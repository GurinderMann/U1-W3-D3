let newItem = document.getElementById('newitem')
newItem.addEventListener('submit', function(e){
    e.preventDefault()
    const addElement = document.getElementById('toDo')
    const addElementValue = addElement.value 
    let newListItem = document.createElement('div')
    newListItem.classList.add("newList")
    newListItem.innerHTML =   `
    <li>${addElementValue}</li>
    <button type="button" id = "delete" > X </button>
    
    `
    const listDiv = document.querySelector('.list')

    listDiv.appendChild(newListItem)

    const deleteButton = document.querySelectorAll('.newList button');
    deleteButton.forEach(function(button) {
      button.addEventListener('click', function(e) {
        let buttonClicked = e.target;
        let elementRemove = buttonClicked.parentElement;
        elementRemove.remove();
      });
    });
    

    listDiv.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
    e.target.classList.toggle('completed');
  }
});

addElement.value =""
 
})



