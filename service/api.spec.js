const fetch = require('cross-fetch');

describe("接口测试", function () {
  it("node🎬接口", function (done) {
    fetch('http://localhost:3000/test')
      .then(function(response) {
        return response.json();
      })
      .then(function(res) {
        if (res.data === 'Hello World 111') {
          done()
        } else {
          done(new Error('数据格式错误🙅‍♂️'))
        }
      })
      .catch(err => {
        done(err)
      });
  })
})

