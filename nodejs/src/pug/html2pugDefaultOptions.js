/*
 * @Author: CPS
 * @Date:   2020-08-20 10:26:14
 * @Last Modified by: CPS
 * @Last Modified time: 2020-09-24 18:40:39
 */

module.exports = {
  tabs: false, //是否使用tag缩进  Boolean false Use tabs instead of spaces for indentation
  commas: true, //是否使用逗号分割属性 Boolean true  Use commas to separate node attributes
  doubleQuotes: false, //使用双引号还是单引号  Boolean false Use double quotes instead of single quotes for attribute values
  fragment: true, //是否使用html和body  Boolean false Wraps result in enclosing <html> and <body> tags if false
  bodyless: true, //[html2jade 是否使用html和body
  numeric: false,
  donotencode: true, //保留 {{namexxxxx}} &#x &name; &#dddd;
  scalate: true, //生成jade语法的缩放变体,
  noattrcomma: false, //是否使用 逗号分割
  noemptypipe: true, //是否使用 |
};
