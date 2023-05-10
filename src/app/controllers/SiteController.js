class SiteController {
  // GET /site
  index(req, res) {
    console.log(1);
    res.render("site");
  }

  // GET /site/:slug
  show(req, res) {
    res.send("site details");
  }
}

module.exports = new SiteController();
