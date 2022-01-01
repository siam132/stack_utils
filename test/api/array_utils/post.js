const expect = require("chai").expect;
const request = require("supertest");

const app = require("../../../index");

describe("POST /arrayUtils//mergeTwoArrays", () => {
  it("OK, calling MergeArray Endpoint", (done) => {
    request(app)
      .post("/arrayUtils//mergeTwoArrays")
      .send({ a: [1, 2, 3], b: [4, 5, 6] })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property("sortedMergedArr");
        expect(body.sortedMergedArr).to.deep.equal([1, 2, 3, 4, 5, 6]);
        expect(body.sortedMergedArr).to.not.deep.equal([1, 2, 3, 4, 6, 5]);
        done();
      })
      .catch((err) => done(err));
  });
});
