#!/usr/bin/env bash
readonly currentDir=$(cd $(dirname $0); pwd)
cd ${currentDir}
rm -rf dist

# $(npm bin)/ng-packagr -p ./src/app/cookie/package.json
# $(npm bin)/ng-packagr -p ./src/app/file-upload/package.json
# $(npm bin)/ng-packagr -p ./src/app/fontawesome/package.json
# $(npm bin)/ng-packagr -p ./src/app/qrcode/package.json
$(npm bin)/ng-packagr -p ./src/app/order-pipe/package.json


# $(npm bin)/ng-packagr -p ./src/app/quill-editor/package.json



