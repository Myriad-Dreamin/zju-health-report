# Health-Report

## Compile and Run

The example of `src/conf.ts`:

```typescript
import { HealthReportRequest } from "./interface";

// geo_api_info = got.get(https://api.map.baidu.com/reverse_geocoding/v3/?output=json&coordtype=wgs84ll&ak=auth_key_from_health_report_url&location=your_location)
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
npx tsc; node ./dist/main.js
```
