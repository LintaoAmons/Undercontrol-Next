#!/usr/bin/env bash

# https://openapi-generator.tech/docs/generators/typescript-axios
# https://openapi-generator.tech/docs/usage#examples

getOpenapiDoc() {
  if [[ $1 == "local" ]]; then
    curl http://localhost:8088/v3/api-docs -o openapi.json
  else
    curl https://oatnil.top/undercontrol/api/v3/api-docs -o openapi.json
  fi
}

getOpenapiDoc "$2"

npx openapi -i openapi.json -o "$1" -c axios
