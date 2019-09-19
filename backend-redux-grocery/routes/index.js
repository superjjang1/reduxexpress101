var express = require('express');
var router = express.Router();
const db = require('../db');
/* GET home page. */
router.get('/dairy-inv', function(req, res, next) {
 const getDiaryQuery = `SELECT * FROM dairy`;
 db.query(getDiaryQuery, (err,results)=>{
    if(err){throw err}
    res.json(results)
 })

});
router.post('/update-dept/:dept',(req,res)=>{
    const dept=req.params.dept.toLowerCase();
    const newQuantity = req.body.newQuantity;
    const food = req.body.food;
    const updateFoodQuery = `
    UPDATE ?? 
    SET quantity = ?
    WHERE food = ? ` //to make it so that hackerz can't see what they're updating

    db.query(updateFoodQuery, [dept, newQuantity, food], (err, results)=>{
        if(err){throw err}
    })
})




module.exports = router;
