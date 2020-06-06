// const superagent = require('superagent')
// const app = require('./app')
// function request() {
//     return superagent(app.listen())
// }
// describe("豆瓣接口测试", function() {
//     it("电影🎬接口", function(done) {
//         request()
//         .get('/test')
//         .expect('Content-Type', /json/)
//         .expect(200)
//         .end(function(err, res){
//             if (res.data === 'Hello, Word') {
//                 done()
//             } else {
//                 done(err)
//             }
//         })
//     })
// })


const fetch = require('cross-fetch');

describe("接口测试", function () {
  it("node🎬接口", function (done) {
    fetch('http://localhost:3000/test')
      .then(function(response) {
        return response.json();
      })
      .then(function(res) {
        if (res.data === 'Hello World') {
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

