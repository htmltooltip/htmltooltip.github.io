const newpage = { template: "<h1>hola</h1>"};
const clear = { template: "<a href='np'>clear</a>"};

const router = {
  "/ITSTEP_HTMLTOOLTIP/np": newpage,
  "/ITSTEP_HTMLTOOLTIP/": clear
}

var app = new Vue({
  el: '#app',
  data: function() {
    return { 
      filter: "",
      seen: true,
      cards: [
        { header: "Отступы", desc: "margin, padding", icon: "img/float.png", hash: "spacing" },
        { header: "111", desc: "margin, left", icon: "img/animation.png", hash: "111" },
        { header: "222", desc: "top, padding", icon: "img/border.png",  hash: "222" },
        { header: "222", desc: "top, padding", icon: "img/debugging.png",  hash: "222" },
        { header: "222", desc: "top, padding", icon: "img/display.png",  hash: "222" },
        { header: "222", desc: "top, padding", icon: "img/fonts.png",  hash: "222" },
        { header: "222", desc: "top, padding", icon: "img/flex.png",  hash: "222" },
      ],
      CR: window.location.pathname
    }
  },
  computed: {
    getCards() {
      var cards = this.cards.filter((card) => {
      	  var cardItem = card.header + " " + card.desc.split(",").join("");
          return cardItem.toLowerCase().includes(this.filter.toLowerCase());
        });
        return cards;
    },
    VC() {
      return router[this.CR] || clear
    }
  },
  render (h) {
    return h(this.VC)
  }
})

console.log(app["CR"]) 

$(".box").on("click", function() {
	$(".page").load("page.html")
  app.seen = false;
})

$(".input").on("click", function() {
  app.seen = true;
  console.log("123")
})