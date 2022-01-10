const { version } = require('../package.json');

exports.VERSION = version;

// 用户的根目录
const HOME = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];

// 配置文件目录
exports.RC = `${HOME}/.eosrc`;

exports.DEFAULTS = {
  registry: 'YvetteLau',
  type: 'users',
};

console.log(HOME);
