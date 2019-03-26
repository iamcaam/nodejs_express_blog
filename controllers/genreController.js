var Genre = require('../models/genre');

/* --------------------------- Read --------------------------- */

// Display list of all Genre.
exports.genre_list = function(req, res) {
    res.send('Not implemented: Genre list');
};

// Display detail page for a specific Genre.
exports.genre_detail = function(req, res) {
    res.send('Not implemented: Genre detail: ' + req.params.id);
};

/* --------------------------- Create --------------------------- */

// Display Genre create form on GET.
exports.genre_create_get = function(req, res) {
    res.send('Not implemented: Genre create GET');
};

// Handle Genre create on POST.
exports.genre_create_post = function(req, res) {
    res.send('Not implemented: Genre create POST');
};

/* --------------------------- Delete --------------------------- */

// Display Genre delete form on GET.
exports.genre_delete_get = function(req, res) {
    res.send('Not implemented: Genre delete GET');
};

// Handle Genre delete on POST.
exports.genre_delete_post = function(req, res) {
    res.send('Not implemented: Genre delete POST');
};

/* --------------------------- Update --------------------------- */

// Display Genre update form on GET.
exports.genre_update_get = function(req, res) {
    res.send('Not implemented: Genre update GET');
};

// Handle Genre update on POST.
exports.genre_update_post = function(req, res) {
    res.send('Not implemented: Genre update POST');
};