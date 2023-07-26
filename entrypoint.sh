#!/bin/bash
set -ex

yarn run prisma:db:push

exec "$@"