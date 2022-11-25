/*
 * @Author: CPS
 * @Date:   2020-08-20 10:26:14
 * @Last Modified by: CPS
 * @Last Modified time: 2020-08-31 02:40:08
 */

module.exports = {
  "insertColons": false, //颜色属性是否使用冒号
  "insertSemicolons": false, //颜色属性是否使用分号结尾
  "insertBraces": false, //是否使用大括号
  "insertNewLineAroundImports": true,// @import/@require 使用空行分隔 
  "insertNewLineAroundBlocks": true, // 每组样式使用空行分隔
  "insertNewLineAroundProperties": true, //每组属性使用换行分割
  "insertNewLineAroundOthers": true, //其他属性使用换行分割
  "preserveNewLinesBetweenPropertyValues": false, //变量和属性是否使用空行隔开（shadow/tran)
  "insertSpaceBeforeComment": true, //注释斜杠前面添加空格
  "insertSpaceAfterComment": true, //注释斜杠后面添加空格
  "insertSpaceAfterComma": true, // 函数参数的分隔符添加空格
  "insertSpaceInsideParenthesis": false, //mixin括号添加空格
  "insertParenthesisAfterNegation": false, // 负数添加括号
  "insertParenthesisAroundIfCondition": true, //if 表达式添加括号
  "insertNewLineBeforeElse": false, // else 是否添加新行
  "insertLeadingZeroBeforeFraction": true, // 所有小数省略0
  "selectorSeparator": ", ", // 选择器的分隔符 ", ": "," | ", " | ",\n" | "\n"
  "tabStopChar": "  ", // 缩进使用 空格还是\t
  "newLineChar": "\n", // 换行使用 空格还是\n \r\n
  "quoteChar": "'", // 使用双引号 还是单引号 "'"|"\""
  "sortProperties": false, //属性排序 false | "alphabetical" | "grouped" | array<string>
  "alwaysUseImport": false, // 将 @require 替换为 @import
  "alwaysUseNot": false, // 条件判断始终使用 not 而不是！
  "alwaysUseAtBlock": false, //block的定义格式 是否使用 大括号
  "alwaysUseExtends": false, //@extend 替换为 @extends
  "alwaysUseNoneOverZero": false, // 替换所有0为none
  "alwaysUseZeroWithoutUnit": false, // 所有0不设置单位
  "reduceMarginAndPaddingValues": true, // margin和padding是否使用简写
  "ignoreFiles": [] //要忽略的文件
}
