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
const prettier = require("prettier");
const defaultOptions = require("./jsBeatufyDefaultOptions.js");

// 主函数
function format(tar, options) {
  if (!tar) return;
  try {
    // 更新配置
    if (options) Object.assign(defaultOptions, options);

    // 格式化
    return prettier.formatWithCursor(tar, defaultOptions);
  } catch (e) {
    // statements
    console.log("js 出错啦", e);
    return e;
  }
}

// 判断环境
if (process.mainModule.filename === __filename) {
  const fs = require("fs");
  const testfile = "Z:/CPS/MyProject/test/eraserCanvas.d.ts";

  //测试配置
  const testOptions = {
    parser: "typescript",
    cursorOffset: 0, // 记录鼠标位置
  };

  // 导入stylus文件 (必须时字符串)
  const testContent = fs.readFileSync(testfile).toString();

  // 更新配置
  if (testOptions) Object.assign(defaultOptions, testOptions);

  // 格式化
  let res = format(testContent, defaultOptions);
  if (res.hasOwnProperty("formatted")) {
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
