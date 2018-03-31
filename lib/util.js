function splitToArray(input, splitter = '\n') {
    let result = [];
    if (input instanceof Array) {
        result = input;
    } else if (typeof input === 'string') {
        switch (splitter) {
            case '\n':
                result = input
                    .split('\r\n')
                    .reduce((p, c) => p.concat(c.split('\n')), []);
                break;
            default:
                result = input.split(splitter);
                break;
        }
    }
    return result;
}

exports.splitToArray = splitToArray;
