const countVowels = (word) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowerCaseWord = word.toLowerCase();
    return lowerCaseWord.split('').filter(letter => vowels.includes(letter)).length;
};

const showVowelCount = () => {
    const word = document.getElementById('wordInput').value;
    const vowelCount = countVowels(word);
    document.getElementById('result').textContent = `Number of vowels: ${vowelCount}`;
};
