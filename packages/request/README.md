# `@rookie/request`

> 前端统一请求工具

## Installing

Using npm:

```bash
$ npm install @rookie/request -S
```

Using yarn:

```bash
$ yarn add @rookie/request -S
```

## Usage

```
import Request from "@/rookie/request";

// const Request = require('@rookie/request');
```

## Api

#### request(config)

```
const request = new Request({
  timeout: 6000,
  withCredentials: true,
  successCode: 0
})
```

| 参数            | 类型                                                      | 默认值 | 备注            |
| --------------- | --------------------------------------------------------- | ------ | --------------- |
| timeout         | number                                                    | 60000  | 请求超时时间    |
| successCode     | number                                                    | 必须   | 成功响应码      |
| withCredentials | boolean                                                   | false  | 是否携带 cookie |
| responeseType   | arraybuffer \| blob \| document \| json \| text \| stream | /      | 响应类型        |

#### request.get(url[, config])

#### request.post(url[, config])

#### request.put(url[, config])

config 选项

```js
{
  // 请求url
  url: string,

  // get 请求参数
  params: {},

  // post 请求参数
  data: {},

  // 自定义配置，headers之类
  customConfig: {}
}
```
