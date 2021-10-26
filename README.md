# ipdata-components

## Description

NPM package containing React components for handling website visitors' IP data.

## Prerequisites

Must have an API Key from [ipdata.co](https://www.ipdata.co)

## To Install

```
npm install ipdata-components
```

## Getting User's IP data

There are two hooks to get the user's IP data. `useIPDataCookie` and `useIPData`.

`useIPDataCookie` will get the user's IP data and store the response in a cookie if consent has been given to use cookies.

`useIPData` will get the user's IP data without storing it in a cookie, which is useful if you either don't want to ask for cookie consent or if you only want to show the cookie notice if required by local laws.

### useIPData

```javascript
const [ipData, error] = useIPData(API_KEY);

const ip = ipData.ip;
const country = ipData.country_code;
```

### useIPDataCookie

```javascript
const [ipData, error] = useIPDataCookie(API_KEY, { expires: 14 });

const ip = ipData.ip;
const country = ipData.country_code;
```

Refer to [IP Data Docs](https://docs.ipdata.co/api-reference/response-fields) for full IP data response.

## Components

### CountryBlocked

Automatically determines if content is available within the user's region.

```javascript
import { CountryBlocked } from "ipdata-components";

<CountryBlocked />;
```

### CookieNotice

Displays a cookie notice and saves IP data to cookie as `ipdata` if user consents to cookies.

```javascript
import { CookieNotice } from "ipdata-components";

<CookieNotice apiKey={key} showNotice={true} expires={14} />;
```
