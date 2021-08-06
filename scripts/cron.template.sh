user_node=/opt/node/node-v14.15.4-linux-x64/bin/node
current_date=$(date +"%Y-%m-%d %T")

ubuntu_notify() {
    XDG_RUNTIME_DIR=/run/user/$(id -u) /usr/bin/notify-send Health-Report "Crontab: $1"
}

cd /home/kamiyoru/work/js/zju-health-report
export DATA_PATH=$PWD
mkdir -p logs
file_log=logs/"${current_date}".log
echo "date: ${current_date}" > "${file_log}" 2>&1
echo "cwd: $PWD" >> "${file_log}"
${user_node} dist/main.js >> "${file_log}"
ubuntu_notify `tail -n 1 "${file_log}"`
