#!/bin/bash
set -euo pipefail

if ! which npm &> /dev/null ; then
  echo "npm must be installed"
  exit 1
fi
(cd slides ; [ -d node_modules ] || npm install)
  
if which jj &> /dev/null ; then
  [ -d rust-workshop ] || jj git clone --colocate git@github.com:senekor/rust-workshop
  [ -d paekli-rs     ] || jj git clone --colocate git@github.com:senekor/paekli-rs
else
  [ -d rust-workshop ] || git clone git@github.com:senekor/rust-workshop
  [ -d paekli-rs     ] || git clone git@github.com:senekor/paekli-rs
fi

just paekli-rs/setup
