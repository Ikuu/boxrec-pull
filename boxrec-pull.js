var request = require('request');
var cheerio = require('cheerio');

function extractInfo(data) {
  var $ = cheerio.load(data);

  var boxer = {
    name: $('.boxerTitle').first().text().trim(),
    nickname: $('span[itemprop="alternateName"]').text(),
    record: {
      w: $('.bgwonBlock').first().text(),
      l: $('.bglostBlock').first().text(),
      d: $('.bgdrawBlock').first().text()
    }
  };

  return boxer;
}

module.exports = {
  findById: function(id, cb) {
    request('http://boxrec.com/boxer/' + id, function(err, response, body) {
      cb(extractInfo(body));
    });
  },

  findByName: function(name, cb) {
    request('http://www.google.com/search?q=' + name + '%20site%3Aboxrec.com', function(err, response, body) {
      var $ = cheerio.load(body);
      var id = $('cite').first().text().slice(17);

      request('http://boxrec.com/boxer/' + id, function(err, response, body) {
        cb(extractInfo(body));
      });
    });
  }
}