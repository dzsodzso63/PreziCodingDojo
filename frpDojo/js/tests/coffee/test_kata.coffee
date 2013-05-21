suite 'Gilded Rose', ->
  setup ->
    @worker = Elm.worker(Elm.GildedRose)

  test 'Can calculate factorial', (done)->
    @timeout 500
    @worker.recv "output", (result)->
      result.should.equal 6
      done()
    @worker.send "factorial", 3

