let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(book){
    
}

Book.prototype.changeStatus = function(){
    this.read = !this.read
}

function bookLoop(){
    myLibrary.forEach(book => function(){
        console.log(book);
    });
}