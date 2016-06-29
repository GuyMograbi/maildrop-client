var request = require('request')
var cheerio = require('cheerio')

exports.getRawContent = function (mailAddress, mailId) {
  return new Promise(function (resolve, reject) {
    request('http://maildrop.cc/inbox/' + mailAddress + '/' + mailId + '/raw', function (err, result, body) {
      if (err) {
        reject(err)
        return
      }
      var $ = cheerio.load(body.substring(body.indexOf('<body')))
      resolve($('body').text())
    })
  })
}

exports.getEmails = function (mailAddress) {
  return new Promise(function (resolve, reject) {
    request('http://maildrop.cc/inbox/' + mailAddress, function (err, result, body) {
      if (err) {
        reject(err)
        return
      }
      var $ = cheerio.load(body)
      var emails = []
      $('tbody tr[data-id]').each(function (i, elm) {
        var email = {
          sender: $(elm).find('.sender').text(),
          date: $(elm).find('.date').text(),
          id: $(elm).attr('data-id'),
          subject: $(elm).find('.subject').text()
        }
        emails.push(email)
      })
      resolve(emails)
    })
  })
}
