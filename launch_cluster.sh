#! /bin/bash

echo "Launching WikiVent cluster"
docker-compose rm -f
docker-compose pull
docker-compose up --build --force-recreate