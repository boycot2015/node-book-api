/**
 * Created by 12 on 2017/7/3.
 */
const query = require('../utils/utils');

const router = (req, res) => {
  if (req.query.ids) {
    const ids = req
      .query
      .ids
      .split(',');
    const bookArr = [];
    for (let i = 0; i < ids.length; i++) {
      query(`select * from booklist where id=${ids[i]};`, [1], (err, results, fields) => {
        if (err) 
          throw err
        bookArr.push(results[0]);
        if (bookArr.length == ids.length) {
          res.send(bookArr);
        }
      })
    }
  } else {
    const id = req.query.id || 0;
    query(id
      ? `select * from booklist where id=${id};`
      : `select * from booklist limit 0,32 ;`, [1], (err, results, fields) => {
      if (err) 
        throw err
      id
        ? res.send(results[0])
        : res.send(results)
    })
  }
}

module.exports = router