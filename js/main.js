const Foo = { template: `
  <div  v-for="route in this.$router.options.routes" >{{route.name}}</div>
  <router-view></router-view>
  ` }
const Bar = { template: '<div>bar</div>' }
const def = { template: '<div>def</div>' }

const routes = [
  { path: '/foo', component: Foo},
  { path: '/bar', component: Bar },
  { path: '/', component: def }
]



const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  data: function() {
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
  },
  router
})