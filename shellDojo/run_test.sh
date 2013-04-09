#!/bin/bash 
export SHUNIT_HOME=ShUnit

. "$SHUNIT_HOME/shUnitPlus"
. ./dojo_script.sh

shuSetUp()
{
  #Clean up
  rm -rf tmp/
  mkdir tmp/
}

TestScriptExists()
{
  shuNonZeroFile dojo_script.sh
}

TestIsDir()
{
    EXPECTED="hello world" 
    RESULT=`is_dir "$EXPECTED"`
    test "${EXPECTED}" = "${RESULT}" 
    shuAssert "Test is_dir" $?
    EXPECTED="Bazinga!" 
    RESULT=`is_dir "$EXPECTED"`
    test "${EXPECTED}" = "${RESULT}" 
    shuAssert "Test is_dir2" $?
}

InitFunction()
{ 
    shuRegTest TestScriptExists
    shuRegTest TestIsDir 
} 

shuStart InitFunction