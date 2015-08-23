var should = require('chai').should();
var boxrec = require('../boxrec-pull');

describe("findById", function() {
  it("should return Gennady Golovkin", function(done) {
    boxrec.findById(356831, function(err, boxer) {
      boxer.name.should.equal('Gennady Golovkin');
      done();
    });
  });

  it("should return an error if id is incorrect", function(done) {
    boxrec.findById('id', function(err, boxer) {
      err.should.equal(true);
      done();
    });
  });
});

describe("findByName", function() {
  it("should return Carl Froch", function(done) {
    boxrec.findByName('Carl Froch', function(err, boxer) {
      boxer.name.should.equal('Carl Froch');
      done();
    });
  });
});