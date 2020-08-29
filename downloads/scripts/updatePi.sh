#!/usr/bin/env bash
#{{{                    MARK:Header
#**************************************************************
##### Author: JACOBMENKE
##### Date: Mon Jul 10 12:03:45 EDT 2017
##### Purpose: bash script to update all PIs
##### Notes:
#}}}***********************************************************

source="${BASH_SOURCE[0]}"
while [ -h "$source" ]; do # resolve $source until the file is no longer a symlink
  dir="$( cd -P "$( dirname "$source" )" >/dev/null 2>&1 && pwd )"
  source="$(readlink "$source")"
  [[ $source != /* ]] && source="$dir/$source" # if $source was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done
dir="$( cd -P "$( dirname "$source" )" >/dev/null 2>&1 && pwd )"

if ! source "$dir/init.sh"; then
    echo "could not source dir '$dir/init.sh'"
fi

function updatePI() {
    #first argument is user@host and port number configured in .ssh/config
    #-t to force pseudoterminal allocation for interactive programs on remote host
    #pipe yes into programs that require confirmation
    #alternatively apt-get has -y option
    # -x option to disable x11 forwarding

    local hostname manager

    hostname="$(echo "$1" | awk -F: '{print $1}')"
    manager="$(echo "$1" | awk -F: '{print $2}')"
    prettyPrint "Updating $hostname with $manager"

    if [[ "$manager" == "apt" ]]; then
        ssh -x "$hostname" '
        yes | sudo apt update
        yes | sudo apt dist-upgrade
        yes | sudo apt-get autoremove
        yes | sudo apt-get clean'
    elif [[ "$manager" == zypper ]]; then
        ssh -x "$hostname" 'sudo zypper --non-interactive refresh
        sudo zypper --non-interactive update
        sudo zypper --non-interactive dist-upgrade
        sudo zypper --non-interactive clean -a'
    elif [[ "$manager" == dnf ]]; then
        ssh -x "$hostname" 'yes | sudo dnf upgrade
        yes | sudo dnf clean all'
    else
        :
    fi

    #update python packages
    ssh -x "$hostname" bash < <(cat "$ZPWR_LIB" "$ZPWR_SCRIPTS/updaterPip.sh")
    #here we will update the Pi's own software and vim plugins (not included in apt-get)
    #avoid sending commmands from stdin into ssh, better to send stdin script into bash
    ssh -x "$hostname" bash < <(cat "$ZPWR_LIB" "$ZPWR_SCRIPTS/rpiSoftwareUpdater.sh")
}

#for loop through arrayOfPI, each item in array is item is .ssh/config file for
for pi in "${PI_ARRAY[@]}"; do
    updatePI "$pi"
done
