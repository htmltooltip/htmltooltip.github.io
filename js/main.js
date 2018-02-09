const data = [
{ header: "Теги", desc: "html, head, body", icon: "img/tags.png", link: "tags" },
{ header: "html5", desc: "header, nav, footer", icon: "img/html5.png",  link: "html5" },
{ header: "Атрибуты", desc: "attribute='value'", icon: "img/attribute.png",  link: "attribute" },
{ header: "Таблицы", desc: "table, tr, td", icon: "img/table.png",  link: "table" },
{ header: "Ссылки", desc: "href='#link'", icon: "img/links.png",  link: "links" },
{ header: "Поля для ввода", desc: "input, textarea", icon: "img/input.png",  link: "input" },
{ header: "Формы", desc: "form", icon: "img/forms.png", link: "forms" },
{ header: "Селекторы", desc: ".class, #id, tag", icon: "img/selectors.png", link: "selectors" },
{ header: "Отступы", desc: "margin, padding", icon: "img/spacing.png", link: "spacing" },
{ header: "Позиционирование", desc: "position", icon: "img/position.png", link: "position" },
{ header: "Отображение", desc: "display", icon: "img/display.png", link: "display" },
{ header: "Обтекание", desc: "float", icon: "img/float.png", link: "float" },
{ header: "Шрифты", desc: "font", icon: "img/fonts.png", link: "fonts" },
{ header: "Псевдообращение", desc: ":after, :before", icon: "img/pseudo.png", link: "pseudo" },
{ header: "Flex", desc: "display: flex", icon: "img/flex.png", link: "flex" },
{ header: "Grid", desc: "display: grid", icon: "img/grid.png", link: "grid" },
{ header: "Анимация", desc: "animation", icon: "img/animation.png", link: "animation" },
{ header: "Методологии", desc: "БЭМ", icon: "img/methodologies.png", link: "methodologies" },
{ header: "Синтаксис", desc: "<tag>, .class {}", icon: "img/syntaxis.png", link: "syntaxis" },
{ header: "Keyframes", desc: "@keyframes", icon: "img/keyframes.png", link: "keyframes" },
{ header: "Медиазапросы", desc: "@media", icon: "img/media.png", link: "media" },
{ header: "Трансформация", desc: "transform", icon: "img/transform.png", link: "transform" }
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