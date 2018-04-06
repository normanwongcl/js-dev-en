#!/bin/bash
curl -H "Content-Type: application/json" --data '{"docker_tag": "master"}' -X POST
https://cloud.docker.com/api/build/v1/source/44e1c147-4941-4f95-bd13-3d88a91a3ce8/trigger/b037fcab-490c-41bc-963b-6a91362773b4/call/
