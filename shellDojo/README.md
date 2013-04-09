# Prezi Shell Script Coding Dojo


## The Kata

### 1. `is_dir`

Write a method which get an input as directory with path i.e. `is_dir tmp/pam.d`,
  1. if directory with path exists then will print "`Directory exists`"
  2. if input (`tmp/pamdd`) is wrong or not a directory then it exits with code 1
  3. if input (`tmp/pamdd`) is wrong or not a directory then will print "`The directory tmp/pamdd not exist or it is not directory`"

### 2. `is_dir_file`

Write a method which get an input as directory or file with path i.e. `is_dir_file tmp/install.log`,
  1. if directory or file with path exists then will print "`Directory exists`" or "`File exists`" 
  2. if input (`tmp/pamdd`) is wrong or not a directory or file then it exits with code 1
  3. if input (`tmp/pamdd`) is wrong or not a directory or file then will print "`The directory tmp/pamdd not exist or it is not directory`"

### 3. `lines_contains`

Write a method, which get an input as directory or file and an input string i.e. `lines_contains tmp/install.log "Dog"`,

  1. If a parameter missing or the first is not a file or directory, it exits with code 1.
  2. It lists all the lines from the file wich contains the given string.
  3. If a directory was given, it searches all the included files.
  4. If a directory was given, it searches recursively.
  5. If no matching lines, it prints "No result".
  6. It should work with many parameters, like `lines_contains tmp/install.log "Dog" "Cat"`.
  7. It should work with regexp, like `lines_contains tmp/install.log /^Dog/ /C(a|u)t/"`.

### 4. _Extra_ `lottery`

Write a method, which get an input as directory or file i.e. `lottery tmp/install.log`,

  1. If the parameter missing or not a file or directory, it exits with code 1.
  2. It gives 5 random number, each followed by a new line.
  3. It should output the 5 numbers in sorted (low to high)
  4. For the same input it should give the same output (if the content of the input not changed)
  5. If the input is a file, the numbers should change if the file content changes.
  6. If the input is a directory, any changes (new file, deleted file, file content change) should change the output numbers

