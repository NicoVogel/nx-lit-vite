#!/bin/bash

npm install --global pnpm@8.6.12 nx@16.7.1

echo 'alias pnx="pnpm exec nx"
source /usr/share/bash-completion/completions/git
if [ -f ~/.env ]; then 
    . ~/.env
fi' >> ~/.bashrc

pnpm config set store-dir /home/node/.pnpm-store