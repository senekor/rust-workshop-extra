_default:
    just --list --unsorted

setup:
    ./dev/scripts/setup.sh

# render slides on a dev server
slides day:
    cd slides && npm run slidev -- --port 304{{day}} day/{{day}}/index.md

serve-paekli-rs:
    just paekli-rs/serve

zellij:
    zellij --layout dev/zellij/default.kdl

_demo day name:
    #!/bin/bash
    set -euo pipefail
    cd demos/day_{{ day }}/{{ name }}
    alacritty --option 'font.size=18' --command zellij --layout ../../../dev/zellij/demo.kdl

demo-1-mutable_references:
    @just _demo "1" mutable_references
demo-1-destructors:
    @just _demo "1" destructors

demo-2-declare_mod:
    @just _demo "2" declare_mod
demo-2-error_handling:
    @just _demo "2" error_handling
demo-2-exhaustiveness:
    @just _demo "2" exhaustiveness

demo-3-adapters:
    @just _demo "3" adapters
demo-3-for_loops:
    #!/bin/bash
    set -euo pipefail
    cd demos/day_3/for_loops
    just zellij-window

demo-4-cargo_deny:
    @just _demo "4" cargo_deny
demo-4-divan:
    @just _demo "4" divan
demo-4-itertools:
    @just _demo "4" itertools
demo-4-serde:
    @just _demo "4" serde
demo-4-use_lib:
    @just _demo "4" use_lib
