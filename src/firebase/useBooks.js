import { useState } from 'react';
import { store } from './firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, doc, addDoc, updateDoc, deleteDoc, getDoc, query, where, getDocs } from 'firebase/firestore';

const useBooks = () => {
  const booksRef = collection(store, "libros");
  const [books, loading, error] = useCollection(booksRef);
  const [bookToEdit, setBookToEdit] = useState();

  const addBook = async (newBook) => {
    try {
      await addDoc(booksRef, newBook);
    } catch (error) {
      console.error('Error adding book:', error.message);
    }
  };

  const updateBook = async (bookId, updatedBook) => {
    try {
      const bookRef = doc(booksRef, bookId);
      await updateDoc(bookRef, updatedBook);
    } catch (error) {
      console.error('Error updating book:', error.message);
    }
  };

  const deleteBook = async (bookId) => {
    try {
      const bookRef = doc(booksRef, bookId);
      await deleteDoc(bookRef);
    } catch (error) {
      console.error('Error deleting book:', error.message);
    }
  };

  const filterBooks = async (filters) => {
    let query = booksRef;

    if (filters.titulo) {
      query = query.where('titulo', '==', filters.titulo);
    }

    if (filters.autor) {
      query = query.where('autor', '==', filters.autor);
    }

    if (filters.disponibilidad !== undefined) {
      query = query.where('disponibilidad', '==', filters.disponibilidad);
    }

    if (filters.anioPublicacion) {
      query = query.where('anioPublicacion', '==', filters.anioPublicacion);
    }

    const filteredBooks = await query.get();
    return filteredBooks.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  };

  const selectBookToEdit = (book) => {
    setBookToEdit(book);
  };

  const unSelectBookToEdit = () => {
    setBookToEdit(null);
  };

  const borrowBook = async (bookId, borrowedBy) => {
    try {
      const bookDocRef = doc(booksRef, bookId);
      const bookToUpdateSnapshot = await getDoc(bookDocRef);
      if (!bookToUpdateSnapshot.exists()) return;
      const bookFound = bookToUpdateSnapshot.data();
      if ((bookFound.prestadoPor !== "" && bookFound.prestadoPor !== undefined && bookFound.prestadoPor !== null) || bookFound.disponible === false) return;
      const updatedBook = { ...bookFound, prestadoPor: borrowedBy, disponible: false };
      await updateDoc(bookDocRef, updatedBook);
    } catch (error) {
      console.error('Error borrowing book:', error.message);
    }
  };

  const turnBackBook = async (bookId) => {
    try {
      const bookDocRef = doc(booksRef, bookId);
      const bookToUpdateSnapshot = await getDoc(bookDocRef);
      if (!bookToUpdateSnapshot.exists()) return;
      const bookFound = bookToUpdateSnapshot.data();
      if (bookFound.prestadoPor === "" || bookFound.disponible === true) return;
      const updatedBook = { ...bookFound, prestadoPor: "", disponible: true };
      await updateDoc(bookDocRef, updatedBook);
    } catch (error) {
      console.error('Error borrowing book:', error.message);
    }
  };

  const getBooksBorrowedBy = async (borrowedBy) => {
    try {
      let bookByBorrowedBy = query(booksRef);
      bookByBorrowedBy = query(bookByBorrowedBy, where("prestadoPor", '==', borrowedBy));
      const bookSnapshot = await getDocs(bookByBorrowedBy);
      if (!bookSnapshot.docs) return null;
      const books = bookSnapshot.docs.data();
      return books;
    } catch (error) {
      console.error('Error fetching borrowed books:', error.message);
    }
  };

  return {
    books,
    loading,
    error,
    bookToEdit,
    addBook,
    updateBook,
    deleteBook,
    filterBooks,
    selectBookToEdit,
    unSelectBookToEdit,
    borrowBook,
    turnBackBook,
    getBooksBorrowedBy,
  };
};

export default useBooks;
