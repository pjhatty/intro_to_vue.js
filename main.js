var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    inStock: true,
    image: './assets/vmSocks-green-onWhite.jpg',
    link: './assets/vmSocks-green-onWhite.jpg',
    inventory: 100,
    onSale: false,
    sizes: ["Small", "Medium", "Large"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./assets/vmSocks-green-onWhite.jpg"
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./assets/vmSocks-blue-onWhite.jpg"
      }
    ],
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    removeFromCart() {
      this.cart -= 1
    },
    updateProduct(variantImage) {
      this.image = variantImage
      this.link = variantImage
    }
  }
});
