cd /home/kamiyoru/work/js/zju-health-report
export DATA_PATH=$PWD
mkdir -p logs
file_log=logs/"$(date +"%Y-%m-%d %T")".log
echo "date: $(date +"%Y-%m-%d %T")" > "${file_log}" 2>&1
echo "cwd: $PWD" >> "${file_log}"
/opt/node/node-v14.15.4-linux-x64/bin/node dist/main.js >> "${file_log}"
XDG_RUNTIME_DIR=/run/user/$(id -u) /usr/bin/notify-send Health-Report "Crontab: `tail -n 1 "${file_log}"`"
