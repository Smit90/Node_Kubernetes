var request = require("supertest");
var app = require("../index.js");
describe("GET /about", function () {
  it("respond with json message", function (done) {
    request(app)
      .get("/about")
      .expect(
        { response: "CI/CD pipeline with jenkins and kubernetes deployment" },
        done
      );
  });
});
