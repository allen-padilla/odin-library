let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book){
    let read = book.read == "true" ? true : false;
    myLibrary.push(new Book(book.title, book.author, book.pages, read))
    bookLoop();
}

Book.prototype.changeStatus = function(){
    this.read = !this.read;
}

function bookLoop(){
    let library = document.createElement('div');
    library.setAttribute('class', 'library');

    myLibrary.forEach((book, index) => {
        let card = document.createElement('div');
        card.setAttribute('class', 'card');

        let cardHeader = document.createElement('div');
        cardHeader.setAttribute('class', 'card-header');
        cardHeader.textContent = `"${book.title}"`;

        let cardBody = document.createElement('div');
        cardBody.setAttribute('class', 'card-body');
        let pTag = document.createElement('p');
        pTag.innerHTML += `${book.author}<br>`;
        pTag.innerHTML += `${book.pages} pages`;
        cardBody.appendChild(pTag);

        const btnRead = document.createElement('button');
        btnRead.setAttribute('data-id', index);
        btnRead.setAttribute('class', 'btn-read');
        btnRead.textContent = book.read ? 'Read' : 'Unread';
        card.style.background = book.read ? 'lightgreen' : 'lightcoral';

        const btnRemove = document.createElement('button');
        btnRemove.setAttribute('class', 'btn-remove');
        btnRemove.textContent = "Remove";
        btnRemove.setAttribute('data-id', index);


        card.appendChild(cardHeader);
        card.appendChild(cardBody);
        card.appendChild(btnRead);
        card.appendChild(btnRemove);


        library.appendChild(card);
    });

    let oldLibrary = document.getElementsByClassName('library')[0];
    oldLibrary.innerHTML = library.innerHTML;

    const listReads = document.getElementsByClassName('btn-read')

    for(let i = 0; i < listReads.length; i ++){
        listReads[i].addEventListener("click", event => {
            let id = event.target.getAttribute("data-id");
            myLibrary[i].read = ! myLibrary[i].read;
            bookLoop();
        })
    }

    const listRemove = document.getElementsByClassName('btn-remove')

    for(let i = 0; i < listRemove.length; i ++){
        listRemove[i].addEventListener("click", event => {
            let id = event.target.getAttribute("data-id");
            myLibrary.splice(id, 1);
            bookLoop();
        })
    }
}

document.getElementById('form-new-book').addEventListener("submit", event => {
    event.preventDefault();
    let book = Object.fromEntries(new FormData(event.target))
    addBookToLibrary(book);
    event.target.reset();
})