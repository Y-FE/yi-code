const trans = require('translation.js');

async function translate(data) {
    let text;
    let fields = [];
    let dataType = typeof data;

    if (dataType === 'string') {
        text = data;
        data = data.split('\r\n')
    } else if (data instanceof Array){
        text = data.join('\n');
    }
    let result = await trans.translate({
        text,
        from: 'zh-CN',
        to: 'en'
    });
    result.result.forEach((v, i) => {
        fields.push({
            prop: toCalmCase(v),
            label: data[i]
        });
    });
    console.log(chalk.yellow('\ntranslate complete: \n'), fields);
    return fields;
}

exports.translate = translate;