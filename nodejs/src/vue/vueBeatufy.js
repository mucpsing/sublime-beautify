/*!
 * @Author: CPS
 * @email: 373704015@qq.com
 * @Date: 2020-08-20 14:27:04
 * @Last Modified by: CPS
 * @Last Modified time: 2020-09-24 00:48:09
 * @Projectname Electron-fileWatcher
 * @file_path Z:\CPS\IDE\SublimeText\3176x32前端\Data\Packages\testt\TesttBeautify\stylus-beautify.js
 * @Filename stylus-beautify.js
 */
'use strict';

// 导入处理模块
const prettier = require('prettier');
const defaultOptions = require('./vueBeatufyDefaultOptions.js');

// 导入 stylus模块
const stylusBeautify = require('../stylus/stylusBeatufy.js');

function formatVueStylus(vueFormatObj, options) {
  const input = Object.assign({}, vueFormatObj);
  const str = input.formatted.toString();
  const stylusStart = /<style.*lang=(\'|\")sty(l|lus)(\'|\").*>/;
  const stylusEnd = /<\/style>.*?/;

  // 匹配
  const endIndex = str.match(stylusEnd);
  const startIndex = str.match(stylusStart);

  if (!startIndex || !endIndex) return input;

  const stylusStr = str.slice(
    startIndex.index + startIndex[0].length,
    endIndex.index
  );
  if (stylusStr.length > 0) {
    const newStr = stylusBeautify(stylusStr, options);
    input.formatted =
      str.slice(0, startIndex.index + startIndex[0].length) +
      newStr +
      str.slice(endIndex.index - 1, -1);
  }

  return input;
}

// 主函数
function format(tar, options) {
  if (!tar) return;
  try {
    // vue格式文件内部的pug配置修复
    if (options.hasOwnProperty('pugFramework')) {
      options.pugFramework = 'vue';
    }

    // 更新配置
    if (options) Object.assign(defaultOptions, options);

    // 格式化 vue
    let vueFormat = prettier.formatWithCursor(tar, defaultOptions);

    let stylueFormat = formatVueStylus(vueFormat, defaultOptions);

    return stylueFormat;
  } catch (e) {
    console.log('vueBeautify 出错啦1', e, defaultOptions);
    // console.log('vueBeautify 出错啦2', tar);
    return e;
  }
}

// 判断环境
if (process.mainModule.filename === __filename) {
  const fs = require('fs');
  const testfile = './test.vue';

  //测试配置
  const testOptions = {
    parser: 'html',
    cursorOffset: 0,
    pugFramework:'vue',
  };

  // 导入stylus文件 (必须时字符串)
  const testContent = fs.readFileSync(testfile, 'utf-8').toString();
  // console.log(testContent);

  // 更新配置
  if (testOptions) Object.assign(defaultOptions, testOptions);

  // 格式化
  let res = format(testContent, defaultOptions);

  if (res.hasOwnProperty('formatted')) {
    const strRes = JSON.stringify(res);
    console.log(JSON.parse(strRes).formatted);
  } else {
    console.log(res);
  }

  //退出
  process.exit();
}

// 导出调用
module.exports = format;
