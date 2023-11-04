#!/bin/bash

. .env

PROJECT=`cat package.json | egrep '"name":' | sed 's/"name": "//;s/",//' | egrep -o '[a-z\-]+'`
TAG=$DOCKER_REPOSITORY/$PROJECT

docker build . -t "$TAG"
echo pushing into $TAG
docker push "$TAG"
