const query = require('../utils/utils')

const router = (req, res) => {
  let id = req.query.id;
  
  query(`select * from user where username = '${req.query.username}' ;`, [1], (err, results, fields) => {
    if (err) throw err 
    console.log(results[0].likebookid);
    var ids = results[0].likebookid; 
    if(ids){      
      ids = ids+',';
      ids = ids + id;
    }else{
      ids =  id;
    } 
    query(`update user set  likebookid ='${ids}' where username = '${req.query.username}';`, [1], (err, results, fields) => {
      if (err) throw err
    })
  })
  
}

module.exports = router