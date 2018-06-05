#!/bin/bash
docker build -t koa-docker .
docker run -p 49160:8080 -d koa-docker
curl -i localhost:49160