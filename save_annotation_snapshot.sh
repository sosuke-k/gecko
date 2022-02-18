#!/usr/bin/bash

# Check ip
# docker exec -it 177385bd19ef cat /etc/hosts
# Set alias
# sudo mc alias set geckominio http://172.21.0.2:9000 empath empathempath

rm -rf .annotations
mkdir .annotations
mc cp -r geckominio/gecko/annotations .annotations/

ts=$(date "+%Y%m%d%H%M%S")
zip -r .annotations/annotations_${ts}.zip .annotations/annotations/

echo "Copy .annotations/annotations_${ts}.zip to /nfs/datasets/annotations/"
cp .annotations/annotations_${ts}.zip /nfs/datasets/annotations/
echo "Copied .annotations/annotations_${ts}.zip to /nfs/datasets/annotations/"
