export class Route {
  constructor(app) {
    this.app = app;
  }

  route() {
    const app = this.app;
    app.get("/", function (req, res) {
      res.render("index.html", {});
    });

    app.get("/.well-known/pki-validation/", function (req, res) {
      res.send("asdfasdf");
    });

    //1. enetry point
    app.listen(9916, function () {
      console.log("gwp intro Server listen on *:9916");
    });
  }
}
