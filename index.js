#!/usr/bin/env node

const { Command } = require('commander');
const inquirer = require('inquirer');
const program = new Command();

class Init {
  start() {
    program
      .version(require('./package.json').version)
      .option('-v, --version', '查看当前版本');

    program
      .command('init')
      .description('初始化项目模版')
      .action(() => {
        inquirer.prompt([
          {
            type: 'list',
            message: '请选择模板:',
            name: 'template',
            choices: ['1', '2'],
          },
        ]);
      });
    program.parse(process.argv);
  }
}

new Init().start();
