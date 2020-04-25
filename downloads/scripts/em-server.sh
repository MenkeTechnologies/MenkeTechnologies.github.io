#!/usr/bin/env bash
#{{{ MARK:Header
#**************************************************************
##### Author: MenkeTechnologies
##### GitHub: https://github.com/MenkeTechnologies
##### Date: Thu Apr 16 22:16:13 EDT 2020
##### Purpose: bash script to
##### Notes:
#}}}***********************************************************
out="$(command ps -e |& command grep -v -E '\bgrep\b')"
if echo "$out" | command grep -i -qs 'emacs.*bg-daemon'; then
    loggConsolePrefix "not starting emacs daemon"
else
    loggConsolePrefix "starting emacs daemon"
    echo "$out" | command grep -s 'emacs.*bg-daemon'
    command emacs -nw --daemon 2>> "$ZPWR_LOGFILE" 1>&2
fi

# if there is a frame
if emacsclient -n -s instance1 -e "(if (> (length (frame-list)) 1) 't)" 2> /dev/null | command grep -sq t; then
    #attach client
    loggConsolePrefix "attach frame"
    command emacsclient -nw "$@"
else
    #create frame and attach
    loggConsolePrefix "create frame"
    command emacsclient -nw -c "$@"
fi
