console.log("ajax promises")

var deck;
// now, with  more jQuery


//nesting callback hell
// $.ajax({
//   url: `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
// })
// .done(function(data, textStatus, XHR){
//   console.log("data from line 12", data)
//   var deckId = data.deck_id

//   $.ajax({
//     url: `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
//   })
//   .done(function(data, t, x){
//     console.log(data)
//     console.log(`your card is the ${data.cards[0].value} of ${data.cards[0].suit}`)
//     $("#theCardButton").after(`<img src=${data.cards[0].image}>`)
//   })
// })

function getDeck(){
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
    })
    .then(function(data, textStatus, XHR){
      resolve(data.deck_id)
    })
  })
}

function getCard(deckId) {
  return new Promise(function(resolve, reject) { 
    $.ajax({
      url: `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
    })
    .then(function(data, t, x){
      resolve(data)
    })
  })
}

getDeck()
.then(function(val){
  return getCard(val)
})
.then(function(data){
  console.log(`your card is the ${data.cards[0].value} of ${data.cards[0].suit}`)
  $("#theCardButton").after(`<img src=${data.cards[0].image}>`)
})








