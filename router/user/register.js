const query = require('../../utils/utils')

const router = (req, res) => {
  let userData = {}
  for (const key in req.body) {
    if (req.body.hasOwnProperty(key)) {     
      userData = JSON.parse(key);    
    }
  } 
  query(`select * from user where username='${userData.account}';`, [1], (err, results, fields) => {
    if (err) throw err
    if(results.length>0){
      res.send(JSON.stringify({
        code:500,
        message:'用户名已存在!'
      }))
    }else{
      query(`insert into user (username,password) values('${userData.account}','${userData.password}');`, [1], (err, results, fields) => {
        if (err) throw err
        res.send(JSON.stringify({
            code:200,
            message:'success!'
          }))
      })     
    }
  })
}
module.exports = router