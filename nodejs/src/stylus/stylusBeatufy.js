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
"use strict";

// 导入处理模块
const stylusBeautify = require("stylus-supremacy");
const defaultOptions = require("./stylusBeatufyDefaultOptions.js");

// 主函数
function format(tar, options) {
  if (!tar) return;
  try {
    // 更新配置
    if (options) Object.assign(defaultOptions, options);

    // 格式化
    return stylusBeautify.format(tar, defaultOptions);
  } catch (e) {
    // statements
    console.log("stylusBeautify 1出错啦1", e);
    console.log("出错时的输入： ", tar);
    return e;
  }
}

// 判断环境
if (process.mainModule.filename === __filename) {
  const fs = require("fs");
  const testfile = "./test.stylus";

  //测试配置
  const testOptions = {
    insertBraces: false, //是否使用大括号
    sortProperties: ["position", "", "width", "height"],
  };

  // 导入stylus文件 (必须时字符串)
  const testContent = fs.readFileSync(testfile).toString();

  // 更新配置
  if (testOptions) Object.assign(defaultOptions, testOptions);

  // 格式化 test.stylus
  console.log(format(testContent, defaultOptions));

  //退出
  process.exit();
}

// 导出调用
module.exports = format;
