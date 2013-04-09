#!/bin/bash

is_dir() 
{
    dir=$1;shift
    msg=$1;shift
    if [ -d "$dir" ]; then
      echo "Directory exists"
    else
      if [ -n "$msg" ]; then
        echo $msg
      else
        echo "The directory $dir not exist or it is not directory"
      fi
      return 1      
    fi
}

is_dir_file()
{
  if [ -f "$1" ]; then
    echo "File exists"
  else
    is_dir $1 "The file or directory $1 does not exist"
  fi
}

lines_contains()
{
  [ -d "$1" -o -f "$1" ] || return 1
  [ $# -lt 2 ] && return 1
  
  output=`grep -rh "$2" "$1"` 
  if [ -z "$output" ]; then
    echo "No result"
  else
    echo "$output"
  fi
}