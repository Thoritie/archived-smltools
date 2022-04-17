#!/usr/bin/env bash

files=(users project resource tasks stakeholders collaboration requirement)
for each in ${files[*]};do
    printf " %s\n" $each
    mongoimport --db sml --collection $each --drop --file ${each}.json --jsonArray
done
