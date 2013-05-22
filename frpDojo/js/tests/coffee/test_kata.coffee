suite 'Gilded Rose', ->
  setup ->
    @worker = Elm.worker(Elm.GildedRose)

    @send = (num)->
      @lastOutput = null
      @worker.send "input", num

    @check = (@against, @lastCallback) ->

    @worker.recv "output", (evt)=>
      @lastOutput = evt.value
      @against.should.equal @lastOutput
      @lastCallback?()
      @lastCallback = null

  test 'Can calculate factorial', (done)->
    @timeout 500
    @check 6, done
    @send 3

  test 'This fails', (done)->
    @timeout 500
    @check 16, done
    @send 3
