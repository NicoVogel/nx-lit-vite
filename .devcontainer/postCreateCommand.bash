#!/bin/bash

npm install --global pnpm

echo 'pnpm config set store-dir ~/.pnpm-store' >> ~/.bashrc
mkdir ~/.pnpm-store

pnpm config set store-dir ~/.pnpm-store

npm install --global nx
pnpm dlx playwright install-deps
