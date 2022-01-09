#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();

program
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <value>', 'flavour of pizza')
  .option('-c, --cheese <type>', 'add the specified type of cheese', 'blue');
// .requiredOption('-m, --mustcheese <type>', 'pizza must have cheese');
// 处理参数

const options = program.opts();

program
  .command('clone <source> [destination]')
  .description('clone a repository into a newly created directory')
  .action((source, destination) => {
    console.log(source, destination);
    console.log('clone command called');
  });

program.parse(process.argv);
