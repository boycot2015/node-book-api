const query = require('../../utils/utils')

const router = (req, res) => {
  let userData = {}
  for (const key in req.body) {
    if (req.body.hasOwnProperty(key)) {     
      userData = JSON.parse(key);    
    }
  }
  
  query(`select * from user where username='${userData.account}' and password='${userData.password}';`, [1], (err, results, fields) => {
    if (err) throw err
    console.log(results);
    if(results.length<=0){
      res.send(JSON.stringify({
        code:500,
        message:'用户名或密码错误！'
      }))
    }else{
      res.send(JSON.stringify({
        code:200,
        message:'登录成功！'
      }))
      query(`update user set islogin='true';`, [1], (err, results, fields) => {
        if (err) throw err
      })
    }
  })
}

module.exports = router