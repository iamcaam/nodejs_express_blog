var BookInstance = require("../models/bookinstance");

/* --------------------------- Read --------------------------- */

// Display list of all BookInstances.
exports.bookinstance_list = function(req, res, next) {

    BookInstance.find()
      .populate('book')
      .exec(function (err, list_bookinstances) {
        if (err) { return next(err); }
        // Successful, so render
        res.render('bookinstance_list', { title: 'Book Instance List', bookinstance_list: list_bookinstances });
      });
      
  };

// Display detail page for a specific BookInstances.
exports.bookinstance_detail = function(req, res) {
    res.send("Not implemented: BookInstance detail: " + req.params.id);
}

/* --------------------------- Create --------------------------- */

// Display BookInstance create form on GET.
exports.bookinstance_create_get = function(req, res) {
    res.send('Not implemented: BookInstance create GET');
};

// Handle BookInstance create on POST.
exports.bookinstance_create_post = function(req, res) {
    res.send('Not implemented: BookInstance create POST');
};

/* --------------------------- Delete --------------------------- */

// Display BookInstance delete form on GET.
exports.bookinstance_delete_get = function(req, res) {
    res.send('Not implemented: BookInstance delete GET');
};

// Handle BookInstance delete on POST.
exports.bookinstance_delete_post = function(req, res) {
    res.send('Not implemented: BookInstance delete POST');
};

/* --------------------------- Update --------------------------- */

// Display BookInstance update form on GET.
exports.bookinstance_update_get = function(req, res) {
    res.send('Not implemented: BookInstance update GET');
};

// Handle bookinstance update on POST.
exports.bookinstance_update_post = function(req, res) {
    res.send('Not implemented: BookInstance update POST');
};