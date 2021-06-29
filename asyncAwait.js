const fetch = require("node-fetch");

const getLocation = async () => {
  let data = await fetch("https://ipinfo.io/json?token=fd6e94df86a532");
  if (data.status === 200) {
    let res = await data.json();
    let { country, region, city } = res;
    return `You are in ${city} ${region} ${country}`;
  } else {
    throw new Error("unable to get data");
  }
};

const getNewWord = async (wordCount = 2) => {
  let newWord = await fetch(
    `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );

  if (newWord.status === 200) {
    return newWord.json().puzzle;
  } else {
    throw new Error("Error getting data");
  }
};

console.log(getLocation((data) => data));
console.log(getNewWord(4));
