#!/bin/sh

# Bear Cahill - brainwashinc.com 

chDirName=$(ls -d ../Ch* | tail -1)
echo "Chapter: " $chDirName

cd $chDirName

dirname=$(ls -d *_* | tail -1)
echo "Prev: " $dirname

[[ "$dirname" =~ ([^-]+)_([^-]+) ]]
chNum=${BASH_REMATCH[1]}
# echo $chNum

vidNum=${BASH_REMATCH[2]}
newNum=`expr $vidNum + 1`
#echo $newNum

newDirNum=$(printf "%02d" $newNum)
#echo $newDirNum

newDirName=$(printf "%s_%s" $chNum $newDirNum)
echo "New: " $newDirName

mkdir $newDirName

oldDirName=$(printf "%s_%s" $chNum $vidNum)
cp -r $oldDirName/End $newDirName/Begin

cd $newDirName
mkdir End