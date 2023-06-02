function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
const randomChapter = getRandomNumber(1, 21); // Example range: 1 to 50
const apiUrl = `https://bible-api.com/john%20${randomChapter}:1`;
fetch(apiUrl)
  .then(response => response.json())
  .then(verseData => {
    const verseText = verseData.text;
    const verseElement = document.getElementById('verseId');

    verseElement.innerHTML = verseText;
  });

