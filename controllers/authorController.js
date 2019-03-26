var Author = require("../models/author");

/* --------------------------- Read --------------------------- */

// Display list of all Author.
exports.author_list = function(req, res) {
    res.send("Not implemented: Author list");
}

// Display detail page for a specific Author.
exports.author_detail = function(req, res) {
    res.send("Not implemented: Author detail: " + req.params.id);
}

/* --------------------------- Create --------------------------- */

// Display Author create form on GET.
exports.author_create_get = function(req, res) {
    res.send('Not implemented: Author create GET');
};

// Handle Author create on POST.
exports.author_create_post = function(req, res) {
    res.send('Not implemented: Author create POST');
};

/* --------------------------- Delete --------------------------- */

// Display Author delete form on GET.
exports.author_delete_get = function(req, res) {
    res.send('Not implemented: Author delete GET');
};

// Handle Author delete on POST.
exports.author_delete_post = function(req, res) {
    res.send('Not implemented: Author delete POST');
};

/* --------------------------- Update --------------------------- */

// Display Author update form on GET.
exports.author_update_get = function(req, res) {
    res.send('Not implemented: Author update GET');
};

// Handle Author update on POST.
exports.author_update_post = function(req, res) {
    res.send('Not implemented: Author update POST');
};