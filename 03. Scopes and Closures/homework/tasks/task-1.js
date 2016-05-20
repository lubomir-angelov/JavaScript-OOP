/* Task Description */
/* 
	*	Create a module for working with books
		*	The module must provide the following functionalities:
			*	Add a new book to category
				*	Each book has unique title, author and ISBN
				*	It must return the newly created book with assigned ID
				*	If the category is missing, it must be automatically created
			*	List all books
				*	Books are sorted by ID
				*	This can be done by author, by category or all
			*	List all categories
				*	Categories are sorted by ID
		*	Each book/catagory has a unique identifier (ID) that is a number greater than or equal to 1
			*	When adding a book/category, the ID is generated automatically
		*	Add validation everywhere, where possible
			*	Book title and category name must be between 2 and 100 characters, including letters, digits and special characters ('!', ',', '.', etc)
			*	Author is any non-empty string
			*	Unique params are Book title and Book ISBN
			*	Book ISBN is an unique code that contains either 10 or 13 digits
			*	If something is not valid - throw Error
*/
function solve() {
	var library = (function () {
		var books = [];
		var categories = [];

		function listBooks() {
			return books;
		}

		function addBook(book) {
			book.ID = books.length + 1;			

			if(!book.title || book.title.length < 2 || book.title.length > 100){
				throw new Error('Invalid title');
			}
			if(!book.author){
				throw new Error('Invalid author');
			}
			if(!(book.isbn.length === 10 || book.isbn.length === 13)){
				throw new Error('Invalid ISBN');
			}

			function checkAvailability(arr, val) {
    			return arr.some(function(arrVal){
    		  		return val === arrVal;
    			});
			}

			if(checkAvailability(books, book.title)){
				throw new Error('Existing title');
			}
			if (checkAvailability(books, book.isbn)) {
				throw new Error('Existing ISBN');
			}
			if(!book.category){
				book.category = '';
			}

			books.push(book);

			return book;
		}

		function listCategories() {
			return categories.sort();
		}

		return {
			books: {
				list: listBooks,
				add: addBook
			},
			categories: {
				list: listCategories
			}
		};
	} ());
	return library;

	if (!Array.prototype.some) {
  		Array.prototype.some = function(fun/*, thisArg*/) {
    		'use strict';

    		if (this == null) {
      		throw new TypeError('Array.prototype.some called on null or undefined');
    		}

    		if (typeof fun !== 'function') {
      		throw new TypeError();
    		}

    		var t = Object(this);
    		var len = t.length >>> 0;

    		var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    		for (var i = 0; i < len; i++) {
      		if (i in t && fun.call(thisArg, t[i], i, t)) {
        		return true;
      			}
    		}

    		return false;
  		};
	}
}

module.exports = solve;

