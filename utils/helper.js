/**
 * Generate a random auther with first name John as default.
 *
 */
 exports.generateRandomBook = () => {
  const word1 = Math.random().toString(36).substring(4);
  const word2 = Math.random().toString(36).substring(4);
  const word3 = Math.random().toString(36).substring(4);

  return (`Book: ${word1} ${word2} ${word3}`).toString();
}

/**
 * Generate a random aisle value using a range.
 *
 * @param {Number} min Minimum integer value
 * @param {Number} max Maximum integer value
 */
 exports.generateRandomAisle = (min = 000, max = 999) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (Math.floor(Math.random() * (max - min + 1)) + min).toString();;
}

/**
 * Generate a random ISBN value using a range.
 *
 * @param {Number} min Minimum integer value
 * @param {Number} max Maximum integer value
 */
 exports.generateRandomISBN = (min = 00000, max = 99999) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (Math.floor(Math.random() * (max - min + 1)) + min).toString();;
}

/**
 * Generate a random auther with first name John as default.
 *
 */
 exports.generateRandomAuthor = () => {
  let lastName = Math.random().toString(36).substring(4);
  return (`John ${lastName}`.substr(0, 15)).toString();
}