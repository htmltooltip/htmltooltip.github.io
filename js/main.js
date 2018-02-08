const data = [
{ header: "Отступы", desc: "margin, padding", icon: "img/float.png", link: "spacing" },
{ header: "Теги", desc: "html, head, body", icon: "img/animation.png", link: "tags" },
{ header: "html5", desc: "header, nav, footer", icon: "img/border.png",  link: "html5" },
{ header: "Атрибуты", desc: "attribute='value'", icon: "img/debugging.png",  link: "attribute" },
{ header: "Таблицы", desc: "table, tr, td", icon: "img/display.png",  link: "table" },
{ header: "Якорные ссылки", desc: "href='#link'", icon: "img/fonts.png",  link: "anchor-link" },
{ header: "Поля для ввода", desc: "input, textarea", icon: "img/flex.png",  link: "input" },
{ header: "Отступы", desc: "margin, padding", icon: "img/float.png", link: "666" },
{ header: "Теги", desc: "html, head, body", icon: "img/animation.png", link: "777" },
{ header: "html5", desc: "header, nav, footer", icon: "img/border.png",  link: "888" },
{ header: "Атрибуты", desc: "attribute='value'", icon: "img/debugging.png",  link: "999" },
{ header: "Таблицы", desc: "table, tr, td", icon: "img/display.png",  link: "1212" },
{ header: "Якорные ссылки", desc: "href='#link'", icon: "img/fonts.png",  link: "1313" },
{ header: "Поля для ввода", desc: "input, textarea", icon: "img/flex.png",  link: "1414" }
]

var pages = {};

for(let i = 0;i<data.length;i++) {
  pages[data[i].link] = {pageHeader: data[i].header, pageDesc: data[i].desc, pageLink: data[i].link, pageContent: data[i].content1}
}

const CardList = Vue.component('cardList', {
  template: '#template--card-list',
  data() {
    return {
      filter: "",
      cards: data
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

const ButtonBack = Vue.component('button-back', {
  template: '#button-back',
  methods: {
    goBack: function() {
      window.history.back();
      return false;
    }
  }
})

const Page = Vue.component('page', {
  template: '#template--page',
  data() {
    return {
      cards: data
    }
  },
  computed: {
    getPage() {
      var page = pages[this.$router.history.current.name];
      return page;
    }
  }
})

var myRoutes = [{ name: 'cardList', path: '/', component: CardList }]

for(let i = 0;i<data.length;i++) {
  myRoutes.push({ name: data[i].link, path: '/' + data[i].link, component: Page })
}

const router = new VueRouter({
  routes: myRoutes
});

new Vue({
  el: '#app',
  router
});