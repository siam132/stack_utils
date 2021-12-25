const express = require("express");
const router = express();
const { mergeSortedArrays } = require("./util_funcs");

router.post("/mergeTwoArrays", function (req, res) {
  const { a, b } = req.body;
  const sortedMergedArr = mergeSortedArrays(a, b);
  res.status(200).send({ sortedMergedArr });
});

module.exports = router;