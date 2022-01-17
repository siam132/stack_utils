const expect = require("chai").expect;
const request = require("supertest");

const app = require("../../../index");

describe("POST /webUtils/generateText", () => {
  it("OK, calling MergeArray Endpoint", (done) => {
    request(app)
      .post("/webUtils/generateText")
      .send({ word_length:100 })
      .then((res) => {
        const body = res.body.generated_text;
        expect(body).to.be.a("string");
        expect(body.split(" ")).to.have.lengthOf(100);
        done();
      })
      .catch((err) => done(err));
  });
});
