// 1. Type untuk Book
export type Book = {
  title: string;
  author: string;
  publicationYear: number;
};

// 2. Database buku dalam array
let books: Book[] = [];

// 3. Fungsi menambah buku
export function addBook(book: Book) {
  books.push(book);
  return book;
}

// 4. Fungsi menampilkan list buku
export function listBooks() {
  return books;
}

// 5. Fungsi mencari buku berdasarkan judul
export function searchBook(title: string) {
  return (
    books.find((b) => b.title.toLowerCase() === title.toLowerCase()) || null
  );
}
