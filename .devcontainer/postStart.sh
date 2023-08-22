#!/bin/bash


PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=true \
# comes from backstopjs
PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
pnpm install

pnpx playwright@1.37.0 install --with-deps webkit
