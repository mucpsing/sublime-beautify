/*
 * @Author: CPS
 * @Date:   2020-08-20 10:26:14
 * @Last Modified by: CPS
 * @Last Modified time: 2020-08-31 02:40:08
 */

const vuePugDefaultOptions = require("../pug/pugBeautyDefaultOptions.js");

const vueDefaultOptions = {
  semi: true, // 行尾添加分号
  printWidth: 80, // 换行长度
  tabWidth: 2, // 缩进长度
  useTabs: false, // 是否使用/t缩进
  singleQuote: false, // 始终使用 单引号
  endOfLine: "lf", // lf|crlf|cr|auto 行末采用哪种结束符号
  // 组件、vue等内部的html格式
  jsxSingleQuote: false, // JSX 语法使用单引号

  // 组件文件内的 '>' 是否用放在结尾还是新建一行
  jsxBracketSameLine: true,

  // 对象的属性是否采用引号括起来
  // as-needed  -> 按需
  // consistent -> 如果其中一个属性需要引号，则其他属性都使用引号
  // preserve   -> 不修改
  quoteProps: "consistent",

  // 数组，对象等尾巴是否添加逗号结尾，默认不添加
  // es5  ->
  // none ->
  // all  ->
  trailingComma: "none",

  // 大括号内是否添加空格分离
  // true -> { foo: bar }
  // false ->{foo: bar}
  bracketSpacing: true,

  // 箭头函数单参数的时候是否添加 括号
  // "always" - (x) => x
  // "avoid" -  x => x
  arrowParens: "avoid",

  // 使用哪个解释器[vue、html、pug、等]
  // https://prettier.io/docs/en/options.html
  parser: "babel",

  // 注释的头部 使用 @prettier/@format
  requirePragma: false,

  // 配合 上面使用
  insertPragma: false,

  // 是否缩进 vue等 <script> and <style> 标签内的代码，如果不缩进，可能某些ide无法折叠代码
  vueIndentScriptAndStyle: true,

  // html 空格敏感度
  // "css" - Respect the default value of CSS display property.
  // "strict" - Whitespaces are considered sensitive.
  // "ignore" - Whitespaces are considered insensitive.
  htmlWhitespaceSensitivity: "css",

  // 是否开启自动处理内嵌其他语法格式化（例如 js内部嵌入 html ，是否处理这内嵌的html）
  // "auto" – Format embedded code if Prettier can automatically identify it.
  // "off" - Never automatically format embedded code.
  embeddedLanguageFormatting: "auto",
};

module.exports = {
  ...vuePugDefaultOptions,
  ...vueDefaultOptions,
};
