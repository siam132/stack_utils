#!/bin/bash
sudo npm i -g pm2
export PATH=$PATH:/opt/node/lib/node_modules/pm2/bin
source ~/.bashrc
pm2 status
pm2 start index.js