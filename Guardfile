
notification :growl, :sticky => false

guard 'jasmine-headless-webkit', :all_on_start => false do
  watch('js/calculator.js')
  watch('spec/calculator_spec.js')
end

guard 'livereload' do
  watch (%r{.+\.(css|js|html)}) {|m| "test_runner.html"}
end

# Add files and commands to this file, like the example:
#   watch(%r{file/path}) { `command(s)` }
#
guard 'shell' do
  watch(/(.*).txt/) {|m| `tail #{m[0]}` }
end
