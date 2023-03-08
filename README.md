# Normalize ws url protocol

Use ws:// or wss:// depending on environment (if https or not).

## Installation

```shell
 $ npm i normalize-ws-url-protocol
```

## Usage



```ts
import normalizeWsUrlProtocol from "normalize-ws-url-protocol"

normalizeWsUrlProtocol("/ws") // ws://localhost/ws // wss://example.com/ws
normalizeWsUrlProtocol("https://example.com") // wss://example.com
```

## Contribute

All feedback is appreciated. Create a pull request or write an issue.
