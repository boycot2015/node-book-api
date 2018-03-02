/**
 * Created by 12 on 2017/7/3.
 */
const query = require('../utils/utils');
const resultsObj = {}
const router = (req, res) => {
  const id = req.query.id;
  query(`select * from booklist where ratings<=3.1;`, [1], (err, results, fields) => {
    if (err) throw err
    resultsObj.new = results;
    // res.send(results)
    query(`select * from booklist where ratings>=4.8;`, [1], (err, results, fields) => {
      if (err) throw err
      resultsObj.hot = results;
      query(`select * from booklist where ratings<=3.5 and ratings>=3.4 ;`, [1], (err, results, fields) => {
        if (err) throw err
        resultsObj.classes = results;
        res.send(resultsObj)
      })
    })
  })
}

module.exports = router