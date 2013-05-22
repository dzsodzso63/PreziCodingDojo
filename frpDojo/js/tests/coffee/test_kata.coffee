suite 'Gilded Rose', ->
  @timeout 200
  setup ->
    @items = [
      {
        name: "Old sword",
        exipre: 10,
        quality: 5
      },
      {
        name: "wooden armour",
        exipre: 5,
        quality: 2
      }
    ]
    @worker = Elm.worker(Elm.GildedRose)

    @requestInventory = =>
      @inventory = null
      @worker.send "requestInventory", true

    @checkInventory = (@lastCallback) =>
      @requestInventory()

    @timePasses = ->
      @worker.send "timePasses", true

    @worker.recv "inventory", (evt)=>
      @lastCallback?(evt.value)

    @worker.send "items", @items

  test 'There are the items in the store', (done) ->
    @checkInventory (inventory)->
      expect(inventory).to.exist
      inventory.should.not.be.empty
      done()

  test 'There are as many items in the store what we put', (done) ->
    @checkInventory (inventory)->
      expect(inventory).to.exist
      inventory.length.should.equal @items.length
      done()

  test 'Updating inventory shouldnt change the number of items', (done) ->
    itemCount = null
    @checkInventory (inventory)->
      itemCount = inventory.length

    @timePasses()

    @checkInventory (inventory)->
      inventory.length.should.equal itemCount, "Number of items changes"
      done()
