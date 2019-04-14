var pages = {};
var app;
var router;
var routesList;
var data = [
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
];

var cardList = Vue.component('cardList', {
  template: '#template--card-list',
  data() {
    return {
      filter: "",
      cards: data
    }
  },
  computed: {
    getCards() {
      var cards = this.cards.filter(card => {
      	var item = card.header + " " + card.desc.split(",").join("");
        return item.toLowerCase().includes(this.filter.toLowerCase());
      });
      return cards;
    }
  }
});

var page = Vue.component('page', {
  template: '#template--page',
  data() {
    return {
      cards: data
    }
  },
  computed: {
    getPage() {
      return pages[this.$router.history.current.name];
    }
  },
  mounted(){
    this.$refs.iframe.addEventListener("load", addFile);
  }
});

function createPages() {
	for(var i = 0; i<data.length; i++) {
  		pages[data[i].link] = {pageHeader: data[i].header, pageDesc: data[i].desc, pageLink: data[i].link}
	}
}

function createRouterList() {
	routesList = [{ name: 'cardList', path: '/', component: cardList }];

	for(let i = 0;i<data.length;i++) {
	  routesList.push({ name: data[i].link, path: '/' + data[i].link, component: page })
	}
}

function addFile() {
  	var iframe = document.querySelector("iframe");
  	var content = this.contentWindow.document.body.innerHTML;
  	var styles = ["pages", "prism"];
	var cssLink;
	var scriptLink;

	for (var i = 0; i < styles.length; i++) {
		cssLink = document.createElement("link");
	    cssLink.href = "../css/" + styles[i] + ".css"; 
	    cssLink.rel = "stylesheet"; 
	    cssLink.type = "text/css"; 
	    this.contentWindow.document.head.appendChild(cssLink);
	}

  scriptLink = document.createElement("script");
  scriptLink.src = "../js/prism.js";
  this.contentWindow.document.body.appendChild(scriptLink);
}

function init() {
	Vue.component('card', {
	  template: '#template--card',
	  props: ['cardInfo']
	});

	Vue.component('button-back', {
	  template: '#button-back',
	  methods: {
	    goBack: function() {
	      window.history.back();
	      return false;
	    }
	  }
	});

	createRouterList();
	createPages();

	router = new VueRouter({ routes: routesList });
	app = new Vue({ el: '#app', router });
}

init();