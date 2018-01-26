const data = [
  { header: "Отступы", desc: "margin, padding", icon: "img/float.png", link: "page", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec fermentum lorem. Vestibulum ipsum metus, venenatis nec mauris eu, dignissim pellentesque velit. Cras id est quis tortor ullamcorper blandit non vulputate nibh. In vel dictum diam, suscipit dictum ante. Nulla facilisi. Maecenas elementum semper lacinia. Aenean lobortis elit sit amet diam lacinia placerat. Suspendisse interdum mi enim, vitae tristique nibh ultrices nec. Fusce at nisl eget arcu elementum feugiat. Maecenas est lacus, tempus a feugiat sed, pretium in tortor. Nullam et mauris lacus. Donec eu porta leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero tellus, posuere eu justo non, vehicula mattis nunc. Etiam facilisis sem sit amet fermentum maximus. Curabitur molestie felis in orci eleifend, eu elementum mauris vestibulum. Quisque placerat purus maximus, accumsan turpis non, fermentum nibh. Donec laoreet ligula orci, quis lobortis nisi molestie et. Aliquam interdum, nisl vitae euismod pretium, lacus felis lacinia felis, eu malesuada purus sem et nunc. Maecenas massa mi, facilisis nec dictum non, luctus non odio. Vivamus dapibus tellus sit amet elit elementum, sit amet varius magna posuere. Suspendisse rhoncus ultricies metus eu varius. Nunc in imperdiet leo, auctor congue sapien. Sed ut varius arcu. Vivamus risus dolor, luctus in tristique id, auctor vitae dolor. Praesent vitae quam id metus ornare congue vitae sed augue. Donec eu auctor nibh, eget vestibulum massa. Cras quis lectus elementum, scelerisque augue et, dapibus mauris. Sed orci nisi, suscipit sit amet arcu eget, aliquam pulvinar ex. Vestibulum at augue eget nunc tristique volutpat eu quis sem. Aenean elementum enim eget turpis ullamcorper euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris consequat molestie luctus. Morbi vel velit pulvinar, finibus nisi at, efficitur ligula. Sed in mi tristique, ullamcorper purus at, tincidunt lacus. Sed cursus accumsan leo, et bibendum quam iaculis vitae. Sed egestas mollis odio in gravida. Vivamus volutpat est purus, ut ornare augue pellentesque vitae. Pellentesque tempor, nisl a lobortis faucibus, arcu mi posuere sem, in placerat dolor ex at ipsum. Praesent iaculis ultrices massa, nec vulputate felis fermentum ac. Etiam quis consectetur erat. Nulla facilisi. Aenean mollis augue eu enim semper dapibus. Morbi eget augue volutpat, dapibus ante pellentesque, cursus dui. Maecenas quis blandit enim, vitae interdum nunc. Integer a suscipit nunc. Nam vitae varius lorem. Nulla venenatis purus ut arcu aliquam posuere. Pellentesque laoreet sem nec magna tincidunt maximus. Vivamus quam eros, placerat et enim id, auctor rutrum massa. Phasellus ac feugiat erat, in porttitor nibh. Praesent egestas tincidunt congue. Nam molestie nec orci sit amet semper. Nam ac nunc sodales, ornare neque in, sollicitudin neque. Quisque sapien nibh, sodales vel elit nec, pulvinar sollicitudin massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam erat volutpat. Morbi a ultrices lorem. Mauris laoreet mollis est, nec efficitur urna. Sed fringilla tincidunt lectus, sed vehicula elit tristique nec. Proin volutpat vestibulum leo, vitae maximus ex fermentum eu. Curabitur sollicitudin, lectus sit amet finibus malesuada, eros leo malesuada nibh, convallis consequat mi neque a elit. Ut vehicula, ex et placerat euismod, lorem mi egestas metus, non convallis lorem quam quis arcu. Ut dui metus, pellentesque a molestie eget, faucibus ac odio." },
  { header: "111", desc: "margin, left", icon: "img/animation.png", link: "bar" },
  { header: "222", desc: "top, padding", icon: "img/border.png",  link: "222" },
  { header: "222", desc: "top, padding", icon: "img/debugging.png",  link: "222" },
  { header: "222", desc: "top, padding", icon: "img/display.png",  link: "222" },
  { header: "222", desc: "top, padding", icon: "img/fonts.png",  link: "222" },
  { header: "222", desc: "top, padding", icon: "img/flex.png",  link: "222" },
]

const pages = {
  "page": { pageHeader: data[0].header, pageDesc: data[0].desc, pageIcon: data[0].icon, pageContent: data[0].content },
  "bar": { pageHeader: data[1].header, pageDesc: data[1].desc, pageIcon: data[1].icon },
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

const router = new VueRouter({
  routes: [
    { name: 'cardList', path: '/', component: CardList },
    { name: 'page', path: '/page', component: Page },
    { name: 'bar', path: '/bar', component: Page }
  ]
});

new Vue({
  el: '#app',
  router
});