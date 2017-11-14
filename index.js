export const parseText = text => text.replace(/[0-9\[\]\(\)"'”“\-,\.\n\r|]+/g, ' ').split(' ');

// const parsedToArrayText = parseText(sampleText);
// console.log(parsedToArrayText);

export const findMostPopularWords = (wordsArray) => {
    return wordsArray.reduce((result, word) => {
        const lcWord = word.toLowerCase().trim();

        if (!lcWord.length || lcWord === ' ') return result;

        result[lcWord] = !result[lcWord] ? 1 : (result[lcWord] + 1);

        return result;
    }, {});
};

// const wordsCountMap = findMostPopularWords(parsedToArrayText);
// console.log(wordsCountMap);

export const sortByRating = (wordsMap) => {
    const wordsMapArray = Object.keys(wordsMap).map(word => ({rating: wordsMap[word], word}));

    console.log(wordsMapArray);
    return wordsMapArray.sort((a, b) => (b.rating - a.rating)).map(wordObj => (`${wordObj.word}: ${wordObj.rating}`));
};

// const ratedWords = sortByRating(wordsCountMap);
// console.log(ratedWords);

// ratedWords.forEach((word) => {
//     document.write(`
//         <div style="overflow: hidden;">
//             <div style="width: 200px; float: left;">${word.split(':')[0]}</div>
//             <div style="width: 200px; float: left;">${word.split(':')[1].trim()}</div>
//         </div>
//     `);
// });


window.measure = () => {
    const sampleText = document.getElementById('text').innerText;

    const parsedToArrayText = parseText(sampleText);
    const wordsCountMap = findMostPopularWords(parsedToArrayText);
    const ratedWords = sortByRating(wordsCountMap);

    ratedWords.forEach((word) => {
        document.write(`
        <div style="overflow: hidden;">
            <div style="width: 200px; float: left;">${word.split(':')[0]}</div>
            <div style="width: 200px; float: left;">${word.split(':')[1].trim()}</div>
        </div>
    `);
    });
};