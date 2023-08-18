#!/bin/bash

PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=true pnpm install
pnpx playwright@1.37.0 install --with-deps webkit