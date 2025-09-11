#!/bin/bash
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    for i in 1 2 3
    do
        eval arg=\${$i}
        if [ ! -z "$arg" ]; then
            echo "$arg"
        fi
    done
fi

