const { translate } = require('../lib/translater');

let testData = ['编号', '名字', '年龄', '学校', '年级', '班级', '家庭地址'];

test('translate', () => {
    expect(translate(testData)).toBeInstanceOf(Object);
});
