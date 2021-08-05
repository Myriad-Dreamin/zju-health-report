# Health-Report

## How to use

### Pull/Build container and run (Recommended)

The example of `${your_config_file}.js`

```typescript
exports.reportConfig = {
    "uid": "",
    "address": "",
    "geo_api_info": "",
    "area": "${geo_api_info.province} ${geo_api_info.city} ${geo_api_info.district}",
    "province": "",
    "city": "",
};

exports.browserCookie = '';
exports.userAgent = '';
```

pull and run:

```bash
 $ make pull && make conf_file=/path/to/${your_config_file}.js run     
# Pull Command
docker pull myriaddreamin/health-report
Using default tag: latest
latest: Pulling from myriaddreamin/health-report
Digest: sha256:5bee29ae8636f190fa11c2a6877c442014fe73917e3076e43a381de8e737e75e
Status: Image is up to date for myriaddreamin/health-report:latest
docker.io/myriaddreamin/health-report:latest
# Run Command
docker run -it --rm -v $PWD:/data -v /path/to/${your_config_file}.js:/app/dist/conf.js --name health-report-container myriaddreamin/health-report
数据提交中, 请稍候...
page revision: 5fbab1072051b0b5ea8f05c6dd91b1ad
您今日已提交信息，无需再提交 You have submitted today, and the submission is canceled
```

Or build and run:

```bash
 $ make build && make conf_file=/path/to/${your_config_file}.js run
# Build Command
npx tsc; docker build -t myriaddreamin/health-report:latest .
Sending build context to Docker daemon  64.25MB
Step 1/8 : FROM node:16-alpine
...
 ---> 0602abe4370c
Successfully built 0602abe4370c
Successfully tagged myriaddreamin/health-report:latest
# Run Command
docker run -it --rm -v $PWD:/data -v /path/to/${your_config_file}.js:/app/dist/conf.js --name health-report-container myriaddreamin/health-report
数据提交中, 请稍候...
page revision: 5fbab1072051b0b5ea8f05c6dd91b1ad
您今日已提交信息，无需再提交 You have submitted today, and the submission is canceled
```

### Compile and Run

The example of `src/conf.ts`:

```typescript
import { HealthReportRequest } from "./interface";

export const reportConfig = {
    "uid": "",
    "address": "",
    "geo_api_info": "",
    "area": "${geo_api_info.province} ${geo_api_info.city} ${geo_api_info.district}",
    "province": "",
    "city": "",
} as unknown as HealthReportRequest;

export const browserCookie = '';
export const userAgent = '';
```

In bash or powershell:

```bash
 $ npx tsc; node ./dist/main.js
数据提交中, 请稍候...
page revision: 5fbab1072051b0b5ea8f05c6dd91b1ad
您今日已提交信息，无需再提交 You have submitted today, and the submission is canceled
```


