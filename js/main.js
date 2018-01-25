
const CardList = Vue.component('cardList', {
  template: '#template--card-list',
  data() {
    return {
      filter: "",
      cards: [
        { header: "Отступы", desc: "margin, padding", icon: "img/float.png", link: "foo" },
        { header: "111", desc: "margin, left", icon: "img/animation.png", link: "bar" },
        { header: "222", desc: "top, padding", icon: "img/border.png",  link: "222" },
        { header: "222", desc: "top, padding", icon: "img/debugging.png",  link: "222" },
        { header: "222", desc: "top, padding", icon: "img/display.png",  link: "222" },
        { header: "222", desc: "top, padding", icon: "img/fonts.png",  link: "222" },
        { header: "222", desc: "top, padding", icon: "img/flex.png",  link: "222" },
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
  }
})

const Card = Vue.component('card', {
  template: '#template--card',
  props: ['cardInfo']
})

const router = new VueRouter({
  routes: [
    { 
      name: 'cardList',
      path: '/',
      component: CardList,
    }
  ]
});

new Vue({
  el: '#app',
  
  router
});