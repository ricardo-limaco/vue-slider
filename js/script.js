Vue.config.devtools = true;

new Vue({
  el: `#root`,
  data: {
    imageList: [
        {
          url:`img/01.jpg`,
          title:`Svezia`,
          text:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.`,
        },
        {
          url:`img/02.jpg`,
          title:`Svizzera`,
          text:`Lorem ipsum.`,
        },
        {
          url:`img/03.jpg`,
          title:`Gran Bretagna`,
          text:`Lorem ipsum, dolor sit amet consectetur adipisicing elit.`,
        },
        {
          url:`img/04.jpg`,
          title:`Germania`,
          text:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.`,
        },
        {
          url:`img/05.jpg`,
          title:`Paradise`,
          text:`Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.`,
        },
      ],
    currentActiveImage: 0,
  },

  methods: {

    arrowUp() {
      let item = this.currentActiveImage - 1;

      if (item < 0) {
        item = this.imageList.length - 1;
      }

      this.currentActiveImage = item
    },

    arrowDown() {
      let item = this.currentActiveImage + 1;

      if (item > this.imageList.length - 1) {
        item = 0;
      }

      this.currentActiveImage = item
    },
  },
});


