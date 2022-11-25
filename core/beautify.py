import sublime
import os
from . import node

PLUGIN_NAME = "testt_syntax_beautify"
NODE_SCRIPT_PATH = os.path.join(
    sublime.packages_path(), PLUGIN_NAME, "nodejs", "main.js"
)

# 根据语法格式化字符串
def beautifyStr(
    buffer_str: str, syntax: str, cursor_offset: int, options: dict, file_path: str = ""
) -> dict:
    config_str = sublime.encode_value(
        {
            "syntax": syntax,  # 当前文件语法
            "cursorOffset": cursor_offset,  # 当前鼠标位置
            "filePath": file_path,
        }
    )

    options_str = sublime.encode_value(options)

    res = node.run_script(NODE_SCRIPT_PATH, config_str, options_str, buffer_str)

    if res:
        try:
            if isinstance(res, str):
                return sublime.decode_value(res)

        except Exception as e:
            print(Exception("beautifyStr() 执行出错:", e))
            return False
