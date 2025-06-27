#!/bin/bash
cd /home/kavia/workspace/code-generation/remixportfolio-91581-be40f83f/portfolio_frontend_workspace/portfolio_frontend
npm run lint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

