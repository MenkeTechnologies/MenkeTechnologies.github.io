#!/usr/bin/env bash
#{{{                    MARK:Header
#**************************************************************
##### Author: JACOBMENKE
##### Date: Mon Jul 10 19:32:05 EDT 2017
##### Purpose: bash script to upload to web dir of RPi
##### Notes:
#}}}***********************************************************
if [[ -z "$1" ]]; then
    echo "usage: uploadWebPi.sh <file>" >&2
    exit 1
fi

address="pi@$MY_IP:/var/www/html"

printf "${ZPWR_COLOR_BLUE}"
printf "Uploading $* to $address\n" | "$ZPWR_SCRIPTS/macOnly/combo.sh"

#loop through all arguments and upload with scp recursively to pi server

w=80

python -c "print('_'*$w)" | lolcat
printf "${ZPWR_COLOR_BLUE}"
total=$#
count=0
for i in "$@"; do
    scp -r -P $RPI_PORT "$i" "$address" 2>/dev/null
    ((++count))
    if ((count == total)); then
        link="http://$MY_IP:$RPI_HTML_PORT/$i"
        echo "Download at $link" | figletRandomFontOnce.sh | ponysay | splitReg.sh -- --------- lolcat
        printf "$link" | pbcopy
    fi
done

#decolorize prompt with ZPWR_COLOR_RESET environment variable
perl -le "print'_'x $w" | lolcat
printf "${ZPWR_COLOR_BLUE}Done\n${ZPWR_COLOR_RESET}"

#if just uploading to website one html file
if [[ "$#" == 1 && "$1" =~ .*.html ]]; then
    open "http://$MY_IP:2/$1"
    #open -a "Sublime Text"
fi
