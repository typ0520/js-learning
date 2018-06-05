#!/bin/bash
docker build -t typ0520/node-web-app .
docker run --rm -p 49160:8080 -d typ0520/node-web-app
curl -i localhost:49160