# 简介|Introductions

主要是用来格式化前端代码文件，暂时支持：js、html、css、pug、stylus、less、sass、vue、ts

原理是调用`prettier`，电脑中必须安装了node，否则插件无法正常使用。

sublimeText上已有功能更加完善的插件，这个插件是当初本人学习sublimetext插件时的练手项目。



# 相关配置

- `Packages/User/cps.sublime-settings`
- 全局配置可以参考：
- pug配置可以参考：
- stylus配置可以参考：

```js
 {
   "cps_beautify": {
    "format_on_save": false,                  // 保存的时候自动格式化(默认不开启)
    "rebuild_ctags_file_on_save": true,       // 保存文件时，重建　.ctags 索引文件
    "show_view_at_center_when_format": false, // 格式化后视图居中

    /* html转换pug 格式化选项 */
    "pug2html": {},

    // html转换成pug 同时格式化
    "html2pug": {
      "tabs": false, //是否使用tag缩进  Boolean false Use tabs instead of spaces for indentation
      "commas": false, //是否使用逗号分割属性 Boolean true  Use commas to separate node attributes
      "doubleQuotes": false, //使用双引号还是单引号  Boolean false Use double quotes instead of single quotes for attribute values
      "fragment": true //是否使用html和body  Boolean false Wraps result in enclosing <html> and <body> tags if false
    },

    /* prettier的配置选项，User文件夹下存在 .prettierc.json，则最终根据该文件生成最终配置*/
    "global": {
      "semi": true, // 行尾添加分号
      "printWidth": 80, // 换行长度
      "tabWidth": 2, // 缩进长度
      "useTabs": false, // 是否使用/t缩进
      "singleQuote": true, // 始终使用 单引号
      "endOfLine": "lf", // lf|crlf|cr|auto 行末采用哪种结束符号

      // 组件、vue等内部的html格式
      "jsxSingleQuote": false, // JSX 语法使用单引号

      // 组件文件内的 '>' 是否用放在结尾还是新建一行
      "jsxBracketSameLine": true,

      "pugFramework": "vue",

      // 对象的属性是否采用引号括起来
      // as-needed  -> 按需
      // consistent -> 如果其中一个属性需要引号，则其他属性都使用引号
      // preserve   -> 不修改
      "quoteProps": "consistent",

      // 数组，对象等尾巴是否添加逗号结尾，默认不添加
      // es5  ->
      // none ->
      // all  ->
      "trailingComma": "es5",

      // 大括号内是否添加空格分离
      // true -> { foo: bar }
      // false ->{foo: bar}
      "bracketSpacing": true,

      // 箭头函数单参数的时候是否添加 括号
      // "always" - (x) => x
      // "avoid" -  x => x
      "arrowParens": "avoid",

      // 使用哪个解释器[vue、html、pug、等]
      // https://prettier.io/docs/en/options.html
      "parser": "babel",

      // 注释的头部 使用 @prettier/@format
      "requirePragma": false,

      // 配合 上面使用
      "insertPragma": false,

      // 是否缩进 vue等 <script> and <style> 标签内的代码，如果不缩进，可能某些ide无法折叠代码
      "vueIndentScriptAndStyle": false,

      // html 空格敏感度
      // "css" - Respect the default value of CSS display property.
      // "strict" - Whitespaces are considered sensitive.
      // "ignore" - Whitespaces are considered insensitive.
      "htmlWhitespaceSensitivity": "css",

      // 是否开启自动处理内嵌其他语法格式化（例如 js内部嵌入 html ，是否处理这内嵌的html）
      // "auto" – Format embedded code if Prettier can automatically identify it.
      // "off" - Never automatically format embedded code.
      "embeddedLanguageFormatting": "auto"
    },

    /* 指定不同的格式 */
    "stylus": {
      "insertColons": false, //是否使用冒号
      "insertSemicolons": false, //是否使用分号结尾
      "insertBraces": false, //是否使用大括号
      "insertNewLineAroundImports": true,
      "insertNewLineAroundBlocks": true, //每组样式使用换行分割
      "insertNewLineAroundProperties": true, //每组属性使用换行分割
      "insertNewLineAroundOthers": true, //其他属性使用换行分割
      "preserveNewLinesBetweenPropertyValues": false, //变量使用
      "insertSpaceBeforeComment": true, //去除多余空格
      "insertSpaceAfterComment": true, //在注释前添加空格
      "insertSpaceAfterComma": true, // 函数参数的分隔符添加空格
      "insertSpaceInsideParenthesis": false, //mixin括号添加空格
      "insertParenthesisAfterNegation": true,
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
    },

    /* pug 格式化选项 */
    // pug 格式化配置，同时 html转换pug的时候，也会读取此配置
    "pug": {
      "parser": "pug",
      "pugBracketSpacing": true,

      // 单行属性换行的最大字符限制
      "pugPrintWidth": 140,

      // 属性是否换行
      // -1 自动
      // 0 始终换行
      // 1 大于1个属性才换行
      // 2 大于2个属性换行
      "pugWrapAttributesThreshold": 3,

      // 使用单引号
      "pugSingleQuote": true,

      // 缩进
      "pugTabWidth": 2,
      //
      // 缩进使用 tab
      "pugUseTabs": true,

      // pugArrowParens: "<>",

      // 是否添加逗号分隔
      // always    - button(type="submit", (click)="play()", disabled)
      // as-needed - button(type="submit", (click)="play()" disabled)
      // none      - button(type="submit" @click="play()" :style="style" disabled)
      "pugAttributeSeparator": "always",

      // 结尾括号的位置
      // last-line 行末
      // new-line  新建一行
      "pugClosingBracketPosition": "last-line",

      // 去掉多余空格 默认：keep-all
      // keep-all     ___this _is __a __comment_
      // keep-leading ___this is a comment
      // trim-all     this is a comment
      "pugCommentPreserveSpaces": "trim-all",

      // 属性排序关系
      // 'as-is' -> Foo(a c d b)
      // 'asc' -> Foo(a b c d)
      // 'desc' -> Foo(d c b a)
      "pugSortAttributes": "as-is",

      // 空属性的格式
      // 'as-is' -> foo(a, b="", c)
      // 'none' -> foo(a, b, c)
      // 'all' -> foo(a="", b="", c="")
      "pugEmptyAttributes": "all",

      // 匹配正则，某些属性始终换行
      // pugWrapAttributesPattern: [],
      //
      // 匹配正则，某些空属性的排序
      // pugEmptyAttributesForceQuotes: [],

      // 定义当前 pug 所在的框架， 类似 vue svelte angular 等
      "pugFramework": "vue",

      // 在vue或者svelte等组件文件中，是否额外添加缩进
      "pugSingleFileComponentIndentation": false,

      // 类名格式
      // 'literal' -> foo.bar.baz
      // 'as-is' -> foo.bar(class="baz")
      "pugClassNotation": "as-is",

      // id格式
      // 'literal' -> foo#bar
      // 'as-is' -> foo(id="bar")
      "pugIdNotation": "literal"
    },

    /* javascript 格式化选项 (详细格式 参考global_options)*/
    "javascript": {},
    "typescript": {},

    /* html 格式化选项 (详细格式 参考global_options)*/
    "html": {},

    /* vue 格式化选项 (详细格式 参考global_options)*/
    "vue": {
      "pugFramework": "vue",
      "embeddedLanguageFormatting": "auto",
      "vueIndentScriptAndStyle": false
    },

    /* css 格式化选项 (详细格式 参考global_options)*/
    "css": {}
  }
```

