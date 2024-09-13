# -*- coding: utf-8 -*-
#
# @Author: CPS
# @email: 373704015@qq.com
# @Date:
# @Last Modified by: CPS
# @Last Modified time: 2021-08-06 11:16:54.145176
# @file_path "Z:\CPS\IDE\SublimeText\sublime_text_4113.21_win64_test\Data\Packages\testt_comments_creater\core"
# @Filename "utils.py"
# @Description: 功能描述
#


import re, json, datetime
from typing import Dict, Any

from os import path

INLINE_REG = re.compile(r"(.*)(#.*$)")


def args_to_lower(func):
    def tes(*args, **kwargs):
        nargs = []
        for each in args:
            nargs.append(each.lower().strip())

        func(*nargs)

    return func


@args_to_lower
def is_stylus(filename):
    # 通过 file_name 判断 stylus
    if filename.endswith(".stylus") or filename.endswith(".styl"):
        return True


@args_to_lower
def is_vue(filename):
    # 通过 file_name 判断 vue
    if filename.endswith(".vue"):
        return True


@args_to_lower
def is_html(filename):
    # 通过 file_name 判断 html
    if filename.endswith(".html") or filename.endswith(".xml"):
        return True


@args_to_lower
def is_pug(filename):
    # 通过 file_name 判断 pug
    if filename.endswith(".pug"):
        return True


@args_to_lower
def is_js(filename):
    for each in [".cjs", ".mjs", ".js"]:
        if filename.endswith(each):
            return True


@args_to_lower
def is_ts(filename):
    for each in [".ts", ".tsx", ".mts", ".cts"]:
        if filename.endswith(each):
            return True


@args_to_lower
def is_json(filename):
    for each in [".json"]:
        if filename.endswith(each):
            return True


@args_to_lower
def is_python(filename):
    for each in [".py"]:
        if filename.endswith(each):
            return True


@args_to_lower
def sublime_syntax_check(syntax):
    for each in ["typescript", "javascript", "json", "css", "html", "python"]:
        if syntax.rfind(each) > -1:
            return each
    print("无法识别的syntax： ", syntax)
    return False


"""
Description

: param filename:{string} paramDescription
: returns {string} returnsDescription
"""


def check_stynax(filename):
    if is_stylus(filename):
        return "stylus"
    if is_vue(filename):
        return "vue"
    if is_html(filename):
        return "html"
    if is_pug(filename):
        return "pug"
    if is_js(filename):
        return "javascript"
    if is_ts(filename):
        return "typescript"
    if is_json(filename):
        return "json"
    if is_python(filename):
        return "python"

    res = sublime_syntax_check(filename)

    return res if res else False


def get_date_now(self, fmat):
    try:
        if not fmat:
            fmat = r"%Y-%m-%d %H:%M:%S"
        return datetime.datetime.now().__format__(fmat)
    except Exception as e:
        return datetime.datetime.now().__format__(r"%Y-%m-%d %H:%M:%S")


def recursive_update(default: dict, custom: dict) -> dict:
    """递归更新字典对象"""
    if not isinstance(default, dict) or not isinstance(custom, dict):
        raise TypeError("Params of recursive_update should be dicts")

    for key in custom:
        if isinstance(custom[key], dict) and isinstance(default.get(key), dict):
            default[key] = recursive_update(default[key], custom[key])
        else:
            default[key] = custom[key]

    return default


def is_contained_dir(dir_path: str, file_path: str) -> bool:
    """
    @Description 判断一个目录和文件路径是否存在包含关系
    """
    import os

    try:
        dir_abs = os.path.abspath(dir_path)
        file_abs = os.path.abspath(file_path)

        is_contained = dir_abs == os.path.commonpath([dir_abs, file_abs])
    except Exception as e:
        print(e)

        is_contained = False
    return is_contained


def prettierrc_json_parser(file_path: str) -> dict:
    try:
        with open(file_path, "r", encoding="utf-8") as file:
            content = file.read()
            res = json.loads(content)
            return res
    except Exception as e:
        print("prettierrc_json_parser error: ", e)
        return dict()


if __name__ == "__main__":
    print(check_stynax("Packages/Python/Python.sublime-syntax"))
