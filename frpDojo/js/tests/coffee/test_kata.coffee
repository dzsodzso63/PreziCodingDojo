suite 'Gilded Rose', ->
  @timeout 200
  setup ->
    @items = [
      {
        name: "Old sword",
        expire: 10,
        quality: 5
      },
      {
        name: "wooden armour",
        expire: 5,
        quality: 2
      }
    ]

    assert.isDefined Elm.GildedRose,
      "GildedRose is not defined!"

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


  test 'There are the items in the store', (done) ->
    @worker.send "items", @items
    @checkInventory (inventory)->
      expect(inventory).to.exist
      inventory.should.not.be.empty
      done()

  test 'There are as many items in the store', (done) ->
    @worker.send "items", @items
    @checkInventory (inventory)->
      expect(inventory).to.exist
      inventory.length.should.equal @items.length
      done()

  test "Time shouldn't change the # of items", (done) ->
    @worker.send "items", @items
    itemCount = null
    @checkInventory (inventory)->
      itemCount = inventory.length

    @timePasses()

    @checkInventory (inventory)->
      inventory.length.should.equal itemCount,
        "Number of items changes"
      done()

  test "Expire is decreasing with time", (done) ->
    @worker.send "items", @items
    myInventory = null
    @checkInventory (inventory)->
      myInventory = inventory

    @timePasses()

    @checkInventory (inventory)->
      for item, i in inventory
        expect(item).to.exist
        item.expire.should.equal myInventory[i].expire-1
      done()

  test "Quality is decreasing with time", (done) ->
    @worker.send "items", @items
    myInventory = null
    @checkInventory (inventory)->
      myInventory = inventory

    @timePasses()

    @checkInventory (inventory)->
      for item, i in inventory
        expect(item).to.exist
        item.quality.should.equal myInventory[i].quality-1
      done()

  test "Quality degrades 2x after expires<=0", (done) ->
    myItems = [
               {
                name: "expiredstuff"
                expire:0
                quality: 3
               }
              ]

    @worker.send "items", myItems

    @timePasses()

    @checkInventory (inv) ->
      inv[0].quality.should.equal 1
      done()

  test "Quality is never negative", (done) ->
    @worker.send "items", @items

    for i in [1..9]
      @timePasses()

    @checkInventory (inventory)->
      for item, i in inventory
        expect(item).to.exist
        item.quality.should.not.be.below 0
      done()

   test "Aged Brie gets more valuable with time", (done) ->
     myItems = [
               {
                name: "Aged Brie"
                expire: 3
                quality: 3
               }
              ]
     @worker.send "items", myItems

     @timePasses()

     @checkInventory (inventory)->
        inventory[0].quality.should.equal 4
        done()

   test "The Quality of an item is never more than 50", (done) ->
     myItems = [
               {
                name: "Aged Brie"
                expire: 3
                quality: 49
               }
              ]
     @worker.send "items", myItems

     @timePasses()
     @timePasses()

     @checkInventory (inventory)->
        inventory[0].quality.should.equal 50
        done()

   test "Sulfuras shouldn't change with time", (done) ->
     myItems = [
               {
                name: "Sulfuras"
                expire: 10
                quality: 20
               }
              ]

     @worker.send "items", myItems
     @timePasses()

     @checkInventory (inventory) ->
          inventory[0].quality.should.equal myItems[0].quality
          inventory[0].expire.should.equal myItems[0].expire
          done()
   test '“Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches; Quality increases by 2 when there are 10 days or less ', (done)->
     myItems = [
               {
                name: "Backstage passes"
                expire: 10
                quality: 20
               }
              ]
     @worker.send "items", myItems
     @timePasses() for i in [1..3]

     @checkInventory (inventory) ->
          inventory[0].quality.should.equal 26
          inventory[0].expire.should.equal 7
          done()

   test '“Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert', (done)->
     myItems = [
               {
                name: "Backstage passes"
                expire: 7
                quality: 26
               }
              ]
     @worker.send "items", myItems

     @timePasses() for i in [4..6]

     @checkInventory (inventory) ->
          inventory[0].quality.should.equal 33
          inventory[0].expire.should.equal 4

     @timePasses() for i in [7..11]

     @checkInventory (inventory) ->
          inventory[0].expire.should.equal -1
          inventory[0].quality.should.equal 0
          done()


   test "Conjured items degrade in Quality twice as fast as normal items", (done) ->
     myItems = [
               {
                name: "Conjured"
                expire: 2
                quality: 16
               }
              ]

     @worker.send "items", myItems
     @timePasses()

     @checkInventory (inventory) ->
          inventory[0].expire.should.equal 1
          inventory[0].quality.should.equal 14

     @timePasses()

     @checkInventory (inventory) ->
          inventory[0].expire.should.equal 0
          inventory[0].quality.should.equal 12

     @timePasses()

     @checkInventory (inventory) ->
          inventory[0].expire.should.equal -1
          inventory[0].quality.should.equal 8
          done()
