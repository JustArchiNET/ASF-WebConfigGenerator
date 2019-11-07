#!/usr/bin/env sh
set -eu

TARGET="docs" # Relative to script directory

cd "$(dirname "$(readlink -f "$0")")"

git pull

npm ci --no-progress
npm run-script build --no-progress

git reset
git add -A -f "$TARGET"
git commit -m "ASF-WebConfigGenerator build"
git push
