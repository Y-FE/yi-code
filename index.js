#!/usr/bin/env node
const fs = require('fs');
const test = require('./lib/index');
const path = require('path');

const program = require('commander');
program
    .version('0.0.1')
    .description('快速构建界面')
    .option('-s --show', '展示组件名称')

program
    .command('setup [name]')//定义命令，参数可以用 <> 或 [] 修饰
    .description('构建组件 输入需要的组件名称')
    .option('-i, --inputName [fileName]', '输入文件名')
    .option('-o, --outputName [fileName]', '输出文件名')
    //options是init命令的参数对象、是action回调方法的最后一个参数
    .action(function(cmd, options) {
        if(!cmd) {
            console.log('请输入要创建的组件名，-s 可查看组件名称');
            return;
        }
        if(!options.inputName) {
            console.log('请输入文件名');
            return;
        }
        test(cmd, options.inputName, options.outputName);
    });

program.parse(process.argv);

if(program.show) {
    const data = fs.readFileSync(path.join(__dirname, '/template/show'), 'utf-8');
    // console.log( __dirname, __filename);
    console.log(data);
}