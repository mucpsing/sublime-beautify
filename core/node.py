# -*- coding: utf-8 -*-
#
# @Author: CPS
# @email: 373704015@qq.com
# @Date:
# @Last Modified by: CPS
# @Last Modified time: 2021-08-10 16:16:11.512184
# @file_path "Z:\CPS\IDE\SublimeText\sublime_text_4113.21_win64_test\Data\Packages\testt_syntax_beautify\core"
# @Filename "node.py"
# @Description: 功能描述
#

from subprocess import Popen, PIPE, call


COMMANDS = {
    "node": ["node", "-v"],
    "npm": ["npm", "-v"],
    "yarn": ["yarn", "-v"],
    "ts-node": ["ts-node", "-v"],
    "tsc": ["tsc", "--version"],
}


def check_command(target: str) -> bool:
    res = False
    global COMMANDS
    if target in COMMANDS.keys():
        res = run_command(COMMANDS[target]).strip()
        print(res)
    return True if res else False


def run_script(
    script: str, config_str: str, options_str: str, buffer_str: str = ""
) -> str:
    return run_command(["node", script, config_str, options_str], strBuffer=buffer_str)
    # return run_command(["node", script, config_str, options_str])


def run_command(command: list, strBuffer: str = None, shell: bool = True) -> str:
    try:
        child_process = Popen(
            command, stdout=PIPE, stdin=PIPE, stderr=PIPE, shell=shell
        )

        # 过来一遍 strBuffer
        if strBuffer != None:
            if isinstance(strBuffer, str):
                strBuffer = strBuffer.encode("utf-8")

        # 执行 command
        stdout, stderr = child_process.communicate(input=strBuffer, timeout=10000)

        if stdout:
            return stdout.decode("utf-8")

        if stderr:
            raise Exception("run_command() 结果出错:", stderr)

    except Exception:
        print("returncode: ", child_process.returncode)
        raise Exception("run_command() 运行出错:", command)


if __name__ == "__main__":
    #     commands = ['git', 'clone', "git@github.com:irvingcode/channelV3.git", "--depth=1"]

    #     res = run_command(commands, shell=True)

    #     if res['success']:
    #         print('下载成功', res["res"])
    #     else:
    #         print('下载失败', res["err"])
    res = run_command(["yarna", "-12131231"], shell=True)
    print("res: ", res)
