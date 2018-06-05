#!/bin/bash
docker build -t koa-hello-world .
docker run -p 49160:8080 -d koa-hello-world
curl -i localhost:49160