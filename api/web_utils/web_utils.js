const express = require("express");
const router = express();
const { generate_text } = require("../../util_functions/text_generator");

router.post("/generateText", function (req, res) {
  const { word_length } = req.body;
  if (word_length) {
    const result = generate_text(word_length);
    res.send({generated_text:result});
  } else {
    res.status(403).send("Inavlid paramaters");
  }
});

module.exports = router;
