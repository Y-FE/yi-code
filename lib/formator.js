function toCalmCase(str) {
    let words = str.split(' ');
    let result = [words[0].toLowerCase()].concat(words.splice(1).map(word => word.replace(/^\S/, s => s.toUpperCase())));
    return result.join('');
}

function toLodash(str) {
    let words = str.split(' ');
    let result = words.map(word => word.toLowerCase(word)).join('_');
    return result;
}

module.exports = {
    toCalmCase,
    toLodash
}