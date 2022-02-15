// variables
const noteList = document.querySelector('#note-list')




// eventlistener
EventListeners()

function EventListeners() {
    // add submit
    document.querySelector('#form').addEventListener("submit", newNote)

    // remove note
    document.querySelector('#note-list').addEventListener('click', removeNote)

    // ls on loaded
    document.addEventListener("DOMContentLoaded", localStorageOnLoad)
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
    //document.querySelector('#note').value = "";
    this.reset()
    


    

    addNoteToLs(note)




}


function removeNote(e) {
    if (e.target.classList.contains('removebtnstyle')) {
        e.target.parentElement.remove();
    }

    // remove notes from LS
    removeNotesLs(e.target.parentElement.textContent);
}



function addNoteToLs(note) {
    const notes = getNoteFromLs()

    notes.push(note)

    localStorage.setItem('notes', JSON.stringify(notes))
}


function getNoteFromLs() {
    let notes;
    if (localStorage.getItem('notes') === null) {
        notes = []
    } else {
        notes = JSON.parse(localStorage.getItem('notes'))

    }
    return notes;
}

// get data from ls on load
function localStorageOnLoad() {
    const notes = getNoteFromLs()

    // print each data from ls
    notes.forEach(function (note) {
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
    });


}



function removeNotesLs(noteContent) {
    const noteDelete = noteContent.substring(0 , noteContent.length - 1)
    


    const notesFromLs = getNoteFromLs()
    
    notesFromLs.forEach(function(note , index) {
        if (note === noteDelete) {
            notesFromLs.splice(index , 1)
        }
    });


    // set new array of notes to ls

    localStorage.setItem('notes' , JSON.stringify(notesFromLs))
} 






