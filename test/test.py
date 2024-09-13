# -*- coding: utf-8 -*-
#
# @Author: CPS
# @email: 373704015@qq.com
# @Date: 2024-09-13 09:56:48.270214
# @Last Modified by: CPS
# @Last Modified time: 2024-09-13 09:56:48.270214
# @file_path "W:\CPS\IDE\SublimeText\JS_SublmieText\Data\Packages\cps_beautify\test"
# @Filename "test.py"
# @Description: 功能描述
#
import os, sys

sys.path.append("..")

from os import path


def is_contained_dir(dir_path: str, file_path: str) -> bool:
    import os

    dir_abs = os.path.abspath(dir_path)
    file_abs = os.path.abspath(file_path)

    is_contained = dir_abs == os.path.commonpath([dir_abs, file_abs])
    return is_contained


if __name__ == "__main__":
    tar = "W:\\CPS\\IDE\\SublimeText\\JS_SublmieText\\Data\\Packages\\cps_beautify"
    ftar = r"W:\CPS\IDE\SublimeText\JS_SublmieText\Data\Packages\cps_beautify\test\test.py"

    res = is_contained_dir(tar, ftar)

    print("res: ", res)
