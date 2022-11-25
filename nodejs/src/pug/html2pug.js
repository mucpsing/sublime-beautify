/*!
 * @Author: CPS
 * @email: 373704015@qq.com
 * @Date: 2020-09-17 17:51:59
 * @Last Modified by: CPS
 * @Last Modified time: 2021-04-07 00:44:48
 * @Projectname Electron-fileWatcher
 * @file_path D:\CPS\MyProject\sublime testt\sublime text3 无插件环境\Data\Packages\testt\Plugins\pug\html2pug.js
 * @Filename html2pug.js
 */
'use strict';
// const html2pug = require("html2pug"); //新版
const html2jade = require('html2jade'); //旧版
const html2pugDefaultOptions = require('./html2pugDefaultOptions.js');

// 处理函数
function format(tar, options) {
  if (!tar) return;

  let res;

  try {
    // 更新配置
    if (options) Object.assign(html2pugDefaultOptions, options);

    html2jade.convertHtml(tar, html2pugDefaultOptions, function (err, pug) {
      // 格式化 pug 文件
      res = pug;
    });
  } catch (e) {
    // statements
    console.log(e);
  }

  return res;
}

// 测试环境
if (process.mainModule.filename === __filename) {
  const fs = require('fs');

  const testfile = './test.html';

  const testContent = fs.readFileSync(testfile).toString();

  const res = format(testContent);

  console.log(res);
}

// 导出调用
module.exports = format;
