#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs');
const inquirer = require('inquirer');
const ora = require('ora')
const downloadGit  = require('download-git-repo');
const program = new Command();

class Init {
  start() {
    program
      .version(require('./package.json').version)
      .option('-v, --version', '查看当前版本');

    program
      .command('init <projectName>')
      .description('create a new project')
      .action((projectName, options) => {
        console.log(projectName, options)
        inquirer
          .prompt([
            {
              type: 'list',
              name: 'template',
              message: 'please select frame type',
              choices: ['Vue', 'React']
            }
          ])
          .then((answer) => {
            const spinner = ora('downloading template ...');
            spinner.start();
            const template = answer.template === 'Vue' ? 'vue-template' : 'react-template';
            const api = `github:xiumubai/cli-template-store#${template}`;
            downloadGit(api, projectName, (err) =>{
              if (err) {
                spinner.fail('模板下载失败')
              } else {
                spinner.succeed('模板下载成功')
              }
            })
          })
      });
    program.parse(process.argv);
  }
}

new Init().start();
