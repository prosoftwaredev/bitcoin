/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  console.log('hehehe');
  res.render('home', {
    title: 'Home',
    bodyclass: 'landing-page'
  });
};
