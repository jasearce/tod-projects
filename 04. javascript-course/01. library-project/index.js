console.log('Starting library project...');

let myLibrary = [];

function Book(title, author, pages, readingStatus) {

    if (!new.target) throw new Error("Must use 'new' keyword to use this constructor");

    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readingStatus = readingStatus;
}

Book.prototype.toggleReadStatus = function () {
    this.readingStatus = !this.readingStatus;
}

function addBookToLibrary(title, author, pages, readingStatus) {
    const newBook = new Book(title, author, pages, readingStatus);
    myLibrary.push(newBook);
}

function showLibrary(myLibrary) {
    // myLibrary.map(book => console.log(book.author));
    // clean-up bookshelf before looping
    const bookshelfDiv = document.getElementById("bookshelf");
    bookshelfDiv.innerHTML = '';
    console.log({ myLibrary });

    // create logic to draw card grids via 'forEach' function the 'myLibrary' array
    myLibrary.forEach(book => {
        console.log(book);
        const bookCard = document.createElement("div");
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
        <div class="book-card-content">
            <div class="book-title">${book.title}</div>
            <div class="book-author">${book.author}</div>
            <div class="book-pages">${book.pages}</div>
            <div class="book-card-content-bottom">
                <div class="book-readStatus">${book.readingStatus ? "Read" : "Pending"}</div>
                <div class="book-actions">
                    <button class="toggle-read-btn" type="button">
                        ${book.readingStatus ? "Leído" : "No leído"}
                    </button>
                    <button class="delete-btn" type="button">Eliminar</button>
                </div>
            </div>
        </div>
        `;
        // add data attribute to bookCard so JS knows which book to delete from 'myLibrary'
        bookCard.setAttribute('data-book-id', book.id);
        bookshelfDiv.appendChild(bookCard);
        const deleteBtn = bookCard.querySelector('.delete-btn');
        const toggleBtn = bookCard.querySelector('.toggle-read-btn');

        deleteBtn.addEventListener('click', () => {
            const bookId = bookCard.getAttribute('data-book-id');
            removeBookFromLibrary(bookId);
            bookCard.remove();
        });

        toggleBtn.addEventListener('click', () => {
            const bookId = bookCard.getAttribute('data-book-id');
            toggleReadStatus(bookId);
            showLibrary(myLibrary);
        });
    });
}

function toggleReadStatus(bookId) {
    const bookToToggle = myLibrary.find(book => book.id === bookId);
    if (bookToToggle) {
        bookToToggle.toggleReadStatus();
    } 
}

function removeBookFromLibrary(bookId) {
    const bookIdToDelete = String(bookId);
    // filter to get books does not match with given bookId
    myLibrary = myLibrary.filter(book => book.id !== bookIdToDelete);
}

// Testing data flow
addBookToLibrary(
    'The Lord of the Rings',
    'J.R.R. Tolkien',
    1200,
    true
);

addBookToLibrary(
    'Cien años de soledad',
    'Gabriel García Marquez',
    417,
    false
);

showLibrary(myLibrary);

const form = document.getElementById("new-book-form");

form.addEventListener('submit', event => {
    // prevent page refresh
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const readStatus = document.getElementById('readStatus').value;
    const isRead = readStatus === 'true';

    console.log(`${title}, ${author}, ${pages}, ${readStatus}, ${isRead}`);

    addBookToLibrary(title, author, pages, isRead);
    showLibrary(myLibrary);

});