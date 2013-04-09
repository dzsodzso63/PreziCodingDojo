#!/bin/bash 
export SHUNIT_HOME=ShUnit

. "$SHUNIT_HOME/shUnitPlus"
. ./dojo_script.sh

shuSetUp()
{
  #Clean up
  rm -rf tmp/
  mkdir tmp/
  mkdir tmp/dir
  echo -e "The first line is about a Cat and then\nin the second line we will mention the Dog\nand here is nothing." >> tmp/regular-file
  echo -e "The first line is about a Cat and then\nin the second line we will mention the Dog\nand here is nothing.\nin the fourth line also contains Dog information" >> tmp/regular-file-with2dogs
}

TestScriptExists()
{
  shuNonZeroFile dojo_script.sh
}

TestReturnsMatchesFromAllFilesIfDirectory()
{
  EXPECTED=$'in the second line we will mention the Dog\nin the second line we will mention the Dog\nin the fourth line also contains Dog information'
  RESULT=`lines_contains tmp Dog`
  test "${EXPECTED}" = "${RESULT}" 
  shuAssert "Test lines_contains" $?
}

TestReturnLinesOfMatches()
{
  EXPECTED=$'in the second line we will mention the Dog\nin the fourth line also contains Dog information'
  RESULT=`lines_contains tmp/regular-file-with2dogs Dog`
  test "${EXPECTED}" = "${RESULT}" 
  shuAssert "Test lines_contains" $?
}

TestReturnLineOfMatch()
{
  EXPECTED="in the second line we will mention the Dog"
  RESULT=`lines_contains tmp/regular-file Dog`
  test "${EXPECTED}" = "${RESULT}" 
  shuAssert "Test lines_contains" $?
}


TestIsDirFile()
{
  EXPECTED="File exists" 
  RESULT=`is_dir_file tmp/regular-file`
  test "${EXPECTED}" = "${RESULT}" 
  shuAssert "Test is_dir_file" $?
  
  EXPECTED="Directory exists" 
  RESULT=`is_dir_file tmp/dir`
  test "${EXPECTED}" = "${RESULT}" 
  shuAssert "Test is_dir_file" $?
  
  RESULT=`is_dir_file tmp/something`
  shuDeny "Test is_dir_file" $?

  RESULT=`is_dir_file`
  shuDeny "Test is_dir_file" $?

}

TestErrorMsgIfIsNotDir()
{
  EXPECTED="The directory tmp/something not exist or it is not directory"
  RESULT=`is_dir tmp/something`
  test "${EXPECTED}" = "${RESULT}" 
  shuAssert "Test is_dir" $?
}

TestExistsWithOneIfIsNotDir()
{
  RESULT=`is_dir tmp/something`
  shuDeny "Test is_dir" $?
}

TestIsDir()
{
    EXPECTED="Directory exists" 
    RESULT=`is_dir tmp/dir`
    test "${EXPECTED}" = "${RESULT}" 
    shuAssert "Test is_dir" $?
}

TestErrorMsgIfIsNotDirOrFile()
{
  EXPECTED="The file or directory tmp/something3 does not exist"
  RESULT=`is_dir_file tmp/something3`
  test "${EXPECTED}" = "${RESULT}" 
  shuAssert "Test is_dir_file" $?
}

TestLinesContains()
{
  RESULT=`lines_contains tmp/something`
  exitcode=$?
  test $exitcode -eq 1
  shuAssert "Test lines_contains" $?
  RESULT=`lines_contains tmp/regular-file`
  exitcode=$?
  test $exitcode -eq 1
  shuAssert "Test lines_contains" $?
  EXPECTED="No result"
  RESULT=`lines_contains tmp/regular-file Elephant`
  test "$EXPECTED" = "$RESULT"
  shuAssert "Test lines_contains" $?
  echo "a Dog is hidden here" > tmp/no-permission
  chmod 000 tmp/no-permission
  EXPECTED="No result"
  RESULT=`lines_contains tmp/no-permission Elephant`
  test "$EXPECTED" = "$RESULT"
  shuAssert "Test lines_contains" $?
}

InitFunction()
{ 
    shuRegTest TestScriptExists
    shuRegTest TestIsDir 
    shuRegTest TestExistsWithOneIfIsNotDir
    shuRegTest TestErrorMsgIfIsNotDir
    shuRegTest TestIsDirFile
    shuRegTest TestErrorMsgIfIsNotDirOrFile
    shuRegTest TestLinesContains
    shuRegTest TestReturnLinesOfMatches
    shuRegTest TestReturnLineOfMatch
    shuRegTest TestReturnsMatchesFromAllFilesIfDirectory
    #shuRegTest TestIsDir 
} 

shuStart InitFunction