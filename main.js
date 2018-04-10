Vue.config.devtools = true

var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    brand: 'Vue Mastery',
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    selectedVariant: 0,
    onSale: false,
    sizes: ["Small", "Medium", "Large"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./assets/vmSocks-green-onWhite.jpg",
        variantLink: './assets/vmSocks-green-onWhite.jpg',
        variantQuantity: 10
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./assets/vmSocks-blue-onWhite.jpg",
        variantLink: './assets/vmSocks-blue-onWhite.jpg',
        variantQuantity: 0
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
    updateProduct(index) {
      this.selectedVariant = index
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    imageLink() {
      return this.variants[this.selectedVariant].variantLink
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    },
    saleTitle() {
      return 'ON SALE: ' + this.brand + ' ' + this.product + '!'
    }
  }
});
