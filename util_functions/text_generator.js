const words = require("./random_words.json");

const generate_text = (length) => {
  const result = [];
  while (result.length < length) {
    i = Math.floor(Math.random() * words.length);
    result.push(words[i])
  }
  return result.join(" ")
};

module.exports = { generate_text };
