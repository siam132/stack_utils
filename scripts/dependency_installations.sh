#!/bin/bash
# Install node package
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
export NVM_DIR="$HOME/.nvm"
source ~/.bashrc
nvm install node
# Change directory to source code and install npm pacakges
cd /home/ec2-user/stack_utils
npm install