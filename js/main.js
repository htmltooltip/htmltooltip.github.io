var app = new Vue({
  el: '#app',
  data: function() {
    return { 
      filter: "",
      cards: [
        { header: "Отступы", desc: "margin, padding", icon: "img/float.png", hash: "spacing" },
        { header: "111", desc: "margin, left", icon: "img/float.png", hash: "111" },
        { header: "222", desc: "top, padding", icon: "img/float.png",  hash: "222" }
      ]
    }
  },
  computed: {
    getCards() {
      var cards = this.cards.filter((card) => {
      	  var cardItem = card.header + " " + card.desc.split(",").join("");
          return cardItem.toLowerCase().includes(this.filter.toLowerCase());
        });
        return cards;
    }
  },
})