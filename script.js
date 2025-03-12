// Sample books in the library
let books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isAvailable: true },
    { id: 2, title: "1984", author: "George Orwell", year: 1949, isAvailable: true },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isAvailable: false }
];

// Function to display books on the page
function displayBooks() {
    const libraryDiv = document.getElementById("library");
    libraryDiv.innerHTML = ""; // Clear the library section

    books.forEach(book => {
        let bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        // Adding book details and buttons dynamically
        bookDiv.innerHTML = `
            <h2>${book.title}</h2>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Year:</strong> ${book.year}</p>
            <p><strong>Status:</strong> ${book.isAvailable ? "Available" : "Borrowed"}</p>
            <button class="borrow" ${!book.isAvailable ? "disabled" : ""} onclick="borrowBook(${book.id})">Borrow</button>
            <button class="return" ${book.isAvailable ? "disabled" : ""} onclick="returnBook(${book.id})">Return</button>
        `;

        libraryDiv.appendChild(bookDiv); // Append each book block to the library
    });
}

// Function to borrow a book
function borrowBook(bookId) {
    const book = books.find(b => b.id === bookId);
    if (book && book.isAvailable) {
        book.isAvailable = false; // Change status to borrowed
        alert(`You have borrowed "${book.title}".`);
        displayBooks(); // Refresh the book list
    }
}

// Function to return a book
function returnBook(bookId) {
    const book = books.find(b => b.id === bookId);
    if (book && !book.isAvailable) {
        book.isAvailable = true; // Change status to available
        alert(`You have returned "${book.title}".`);
        displayBooks(); // Refresh the book list
    }
}

// Display books when the page loads
displayBooks();

