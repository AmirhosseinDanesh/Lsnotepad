// variables
const noteList = document.querySelector('#note-list')




// eventlistener
EventListeners()

function EventListeners() {
    // add submit
    document.querySelector('#form').addEventListener("submit" , newNote)

    // remove note
    document.querySelector('#note-list').addEventListener('click' ,removeNote )
}


// functions

function newNote(e) {
    e.preventDefault()
    
    
    // access to textarea value
    const note = document.querySelector('#note').value

    // create remove X
    const removeBtn = document.createElement('a')
    removeBtn.textContent = 'X' 
    removeBtn.classList = 'removebtnstyle'

    // create li for notelist
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(note))
    

    // create remove for li
    li.appendChild(removeBtn)

    // add li to notelist
    noteList.appendChild(li)


    // clear textarea after submit
    document.querySelector('#note').value = "";


    
    




}


function removeNote(e){
    if (e.target.classList.contains('removebtnstyle')) {
        e.target.parentElement.remove();
    }
}