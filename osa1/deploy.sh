#!/bin/sh

DESTINATION_PATH='../../FSO2018Backend/'

npm run build
rm -rf $DESTINATION_PATH/build
cp -r build $DESTINATION_PATH
