/*!
 * @Author: CPS
 * @email: 373704015@qq.com
 * @Date: 2020-08-31 01:33:49
 * @Last Modified by: CPS
 * @Last Modified time: 2021-04-07 00:10:31
 * @Projectname Electron-fileWatcher
 * @file_path D:\CPS\MyProject\sublime testt\sublime text3 无插件环境\Data\Packages\testt\Plugins\index.js
 * @Filename index.js
 * @ 接收两个参数
 * 参数1 <string> 要处理的字符串，
 * 参数2 <jsonstringify> 对应的配置对象，
  {
    "syntax":"xxx",
    "cursorOffset":0, // 鼠标在ide的位置 
  }

  * 参数3 <string> "xxxxx",    // 文件的语法 syntax，用来判断用什么解释器

 * 返回值<转换为字符串后的json格式>:
 * { 
 *    formatted:"处理后的字符串",  //返回的结果
 *    cursorOffset:0,             //返回的鼠标位置
 * } 
 */

"use strict";
const fs = require("fs");
process.stdin.resume();
process.stdin.setEncoding("utf8");

// 接收外部数据(未作限制)
let input = "";
process.stdin.on("data", function (data) {
  input += data;
});

// 接收完成后,调用模块处理
process.stdin.on("end", function () {
  //识别要执行的处理操作
  const prettier = {
    stylus: require("./src/stylus/stylusBeatufy.js"),
    pug: require("./src/pug/pugBeauty.js"),
    html2pug: require("./src/pug/html2pug.js"),
    vue: require("./src/vue/vueBeatufy.js"),
    html: require("./src/js/jsBeatufy.js"),
    css: require("./src/js/jsBeatufy.js"),
    javascript: require("./src/js/jsBeatufy.js"),
    json5: require("./src/js/jsBeatufy.js"),
    json: require("./src/js/jsBeatufy.js"),
    typescript: require("./src/js/jsBeatufy.js"),
  };

  const parser = {
    "vue": "vue",
    "js": "babel",
    "cjs": "babel",
    "ts": "typescript",
    "mts": "typescript",
    "javascript": "babel",
    "typescript": "typescript",
    "css": "css",
    "scss": "scss",
    "sass": "scss",
    "less": "less",
    "pug": "pug",
    "json": "json",
    "json5": "json5",
    "json-stringify": "json-stringify",
    "html": "html",
  };

  try {
    /* 处理配置文件 */
    const config = JSON.parse(process.argv[2]);
    const syntax = config["syntax"];
    const filePath = config["filePath"]

    // process.stdout.write(process.argv[3]);

    /* 处理配置文件 */
    const options = JSON.parse(process.argv[3]);
    options["cursorOffset"] = config["cursorOffset"] || 0;
    // process.stdout.write(process.argv[3]);

    // /* 配置解释器 */
    if (parser.hasOwnProperty(syntax)) options["parser"] = parser[syntax];

    /* 分配处理器 */
    if (prettier.hasOwnProperty(syntax)) {

      // 读取本地文件
      // if (fs.statSync(filePath)){
      //   input = fs.readSync(filePath).toString()
      // }

      let res = prettier[syntax](input, options);

      if (res.hasOwnProperty("formatted")) {
        process.stdout.write(JSON.stringify(res));
      } else {
        process.stdout.write(
          JSON.stringify({
            formatted: res,
            cursorOffset: options["cursorOffset"],
          })
        );
      }
    } else {
      // process.exit();
      process.stdout.write(JSON.stringify({ success: false, msg: "失败！" }));
    }
  } catch (e) {
    process.stdout.write("main.js >>>>>>>>>>>>>>>>>>>>>>>> \n" + e.toString());
  }
});
