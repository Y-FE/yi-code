#!/usr/bin/env node
const fs = require('fs');
const test = require('./lib/index');
const path = require('path');
const pkg = require('./package.json');

const program = require('commander');
program
    .version(pkg.version)
    .description('快速构建界面')
    .option('-s --show', '展示组件名称');

program
    .command('gen <template>') //定义命令，参数可以用 <> 或 [] 修饰
    .description('从常用模版生成组件')
    .option('-i, --input <fileName>', '输入文件名')
    .option('-o, --output [fileName]', '输出文件名')
    //options是init命令的参数对象、是action回调方法的最后一个参数
    .action(function(cmd, options) {
        if (!cmd) {
            console.log('请输入要创建的组件名，-s 可查看组件名称');
            return;
        }
        if (!options.input) {
            console.log('请指定输入文件');
            return;
        }
        test(cmd, options.input, options.outputName);
    });

program.parse(process.argv);

if (program.show) {
    const data = fs.readFileSync(
        path.join(__dirname, '/template/show'),
        'utf-8'
    );
    // console.log( __dirname, __filename);
    console.log(data);
}
