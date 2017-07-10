

tput civis

trap 'tput cnorm; exit' INT

printf "\e[0;8m"
while 'true'; do
		clear
		eval "$@"
		sleep 60
done
