export class Route {
  constructor(app, dirname) {
    this.app = app;
    this.dirname = dirname;
  }

  route() {
    const app = this.app;
    const dirname = this.dirname;
    app.get("/", function (req, res) {
      res.render("index.html", {});
    });

    app.get("/.well-known/pki-validation/", function (req, res) {
      console.log(dirname);
      res.sendFile(dirname + "/596F0F30EDFD078D024EDC085AC1A9D5.txt");
    });

    //1. enetry point
    app.listen(9916, function () {
      console.log("gwp intro Server listen on *:9916");
    });
  }
}
