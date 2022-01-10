#!/usr/bin/env node

const { Command } = require('commander');
// const ora = require('ora');
const fs = require('fs');
const inquirer = require('inquirer');

const program = new Command();

class Init {
  start() {
    program
      .version(require('./package.json').version)
      .option('-v, --version', '查看当前版本');

    program
      .command('init <templateName> [projectName]')
      .description('初始化项目模版')
      .action(() => {
        this.initCli(...process.argv.slice(3))
      });
    program.parse(process.argv);
  }

  initCli(templateName, projectName) {
    console.log(templateName, projectName);

    if (!fs.existsSync(projectName)) {
      console.log(1);
      inquirer.prompt([
        {
            name: 'description',
            message: 'Please enter the project description: '
        },
        {
            name: 'author',
            message: 'Please enter the author name: '
        }
      ]).then((answer) =>{
        // let spinit = ora('downloading template ...');
        // spinit.start();
        console.log(answer.description, answer.author);

        this.downloadLocal(templateName, projectName)
      })
      
    } else {
      console.log(3);
    }
  }
  downloadLocal(templateName, projectName) {

  }
}

new Init().start();
