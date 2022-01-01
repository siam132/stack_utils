const express = require('express')
const router = express()

router.post('/add', (req, res) => {
    if (req.body.elm == undefined){
        res.status(403).send({msg:"[Invalid Payload!!] Usage: {elm:[1,2,3..]}"})
        return;
    }
    const elms = [...req.body.elm]
    const sum = elms.reduce((acc, val) => acc + val, 0);
  res.status(200).send({sum})
})

router.post('/subtract', (req, res) => {
    if (req.body.elm == undefined || req.body.elm.length > 2){
        res.status(403).send({msg:"[Invalid Payload!!] Usage: {elm:[1,2]}"})
        return;
    }
    const elms = [...req.body.elm]
    const diff = elms[0] - elms[1]
  res.status(200).send({diff})
})


router.post('/multiply', (req, res) => {
    if (req.body.elm == undefined){
        res.status(403).send({msg:"[Invalid Payload!!] Usage: {elm:[1,2,3..]}"})
        return;
    }
    const elms = [...req.body.elm]
    const multiple = elms.reduce((acc, val) => acc * val, 1);
  res.status(200).send({multiple})
})

module.exports = router;