var Book = require('../models/book');

exports.index = function(req, res) {
    res.send('Not implemented: Site Home Page');
};

/* --------------------------- Read --------------------------- */

// Display list of all books.
exports.book_list = function(req, res) {
    res.send('Not implemented: Book list');
};

// Display detail page for a specific book.
exports.book_detail = function(req, res) {
    res.send('Not implemented: Book detail: ' + req.params.id);
};

/* --------------------------- Create --------------------------- */

// Display book create form on GET.
exports.book_create_get = function(req, res) {
    res.send('Not implemented: Book create GET');
};

// Handle book create on POST.
exports.book_create_post = function(req, res) {
    res.send('Not implemented: Book create POST');
};

/* --------------------------- Delete --------------------------- */

// Display book delete form on GET.
exports.book_delete_get = function(req, res) {
    res.send('Not implemented: Book delete GET');
};

// Handle book delete on POST.
exports.book_delete_post = function(req, res) {
    res.send('Not implemented: Book delete POST');
};

/* --------------------------- Update --------------------------- */

// Display book update form on GET.
exports.book_update_get = function(req, res) {
    res.send('Not implemented: Book update GET');
};

// Handle book update on POST.
exports.book_update_post = function(req, res) {
    res.send('Not implemented: Book update POST');
};