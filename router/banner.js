const query = require('../utils/utils')

const router = (req, res) => {
  query(`select * from banner;`, [1], (err, results, fields) => {
    if (err) throw err
    res.send(results)
  })
}

module.exports = router