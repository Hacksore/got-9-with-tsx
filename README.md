# got 9 runtime bug 

Error:

```
import got, { HTTPError, ParseError } from "got";
              ^

SyntaxError: The requested module 'got' does not provide an export named 'HTTPError'
    at ModuleJob._instantiate (node:internal/modules/esm/module_job:134:21)
    at async ModuleJob.run (node:internal/modules/esm/module_job:217:5)
    at async ModuleLoader.import (node:internal/modules/esm/loader:323:24)
    at async loadESM (node:internal/process/esm_loader:28:7)
    at async handleMainPromise (node:internal/modules/run_main:113:12)

Node.js v20.12.2
```
