/*!
 * @Author: CPS
 * @email: 373704015@qq.com
 * @Date: 2020-08-20 14:27:04
 * @Last Modified by: CPS
 * @Last Modified time: 2021-04-07 00:30:42
 * @Projectname Electron-fileWatcher
 * @file_path D:\CPS\MyProject\sublime testt\sublime text3 无插件环境\Data\Packages\testt\Plugins\pug\pugBeauty.js
 * @Filename pugBeauty.js
 */
"use strict";

// 导入处理模块
const pugBeauty = require("prettier");
const pugBeautyDefaultOptions = require("./pugBeautyDefaultOptions.js");

// 处理函数
function format(tar, options) {
  if (!tar) return;
  try {
    // 更新配置
    if (options) Object.assign(pugBeautyDefaultOptions, options);

    // 格式化
    return pugBeauty.format(tar, pugBeautyDefaultOptions);
  } catch (e) {
    // statements
    console.log("pugBeauty 出错啦", e);
    return e;
  }
}

// 测试环境
if (process.mainModule.filename === __filename) {
  // 导入test文件 (转换为 字符串 )
  const fs = require("fs");
  const testfile = "./test.pug";
  const testContent = fs.readFileSync(testfile).toString();

  //测试配置
  const testOptions = { parser: "vue", pugFramework: "vue" };

  // 更新配置
  Object.assign(pugBeautyDefaultOptions, testOptions);

  // 格式化 test.stylus
  console.log(format(testContent, pugBeautyDefaultOptions));

  //退出
  process.exit();
}

// 导出调用
module.exports = format;
