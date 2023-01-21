//your code here
let evaluatedText = document.querySelector("#evaluatedText");
let wordCount = document.querySelector("#wordCount");
let count = 0;

evaluatedText.addEventListener("input", cal_word)

function cal_word() {
    let word = evaluatedText.value;
    count = word.split(' ').filter((item) => item).length;
    wordCount.innerHTML = count;
}
