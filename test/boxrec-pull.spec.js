var should = require('chai').should();
var boxrec = require('../boxrec-pull');

describe("findById", function() {
  it("should return Gennady Golovkin", function(done) {
    boxrec.findById(356831, function(data) {
      data.name.should.equal('Gennady Golovkin');
      done();
    })
  });
});

describe("findByName", function() {
  it("should return Carl Froch", function(done) {
    boxrec.findByName("Carl Froch", function(data) {
      data.name.should.equal('Carl Froch');
      done();
    })
  });
});