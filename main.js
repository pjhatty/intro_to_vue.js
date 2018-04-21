Vue.config.devtools = true

Vue.component('product-details', {
  props: {
    details: {
      type: Array,
      required: true
    }
  },
  template: `
    <div class="product-details">
      <ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>
    </div>
  `
})

Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
    <div class="product">
      <div class="product-image">
        <a :href="imageLink">
          <img :src="image">
        </a>
      </div>

      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inStock >= 10"> In Stock </p>
        <p v-else-if="inStock < 10 && inStock > 0"> Almost Out! Only {{ inStock }} items left! </p>
        <p v-else> Out of Stock </p
        <p>Shipping: {{ shipping }}</p>
        <span v-show="onSale">{{ saleTitle }}</span>

        <product-details :details="details"></product-details>

        <div class="dib ma3 color-box br-pill grow" v-for="(variant, index) in variants"
            :key="variant.variantId"
            :style="{ backgroundColor: variant.variantColor }"
            @click="updateProduct(index)">
        </div>

        <br>

        <button class="ma4" v-on:click="addToCart"
            :disabled="!inStock"
            :class="{ disabledButton: !inStock }">Add to Cart</button>

        <button class="ma4" v-on:click="removeFromCart">Remove</button>
      </div>
    </div>
  `,
  data() {
    return {
      product: 'Socks',
      brand: 'Vue Mastery',
      selectedVariant: 0,
      onSale: false,
      details: ["75% Cotton", "15% Wool", "10% American Cheese"],
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
      ]
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId, 'add')
    },
    removeFromCart() {
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId, 'remove')
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
    },
    shipping() {
      if (this.premium) {
        return "Free!"
      }
      return "$2.99"
    }
  }
})

var app = new Vue({
  el: '#app',
  data: {
    premium: true,
    cart: []
  },
  methods: {
    updateCart(id, action) {
      if (action == 'add') {
        this.cart.push(id)
      }
      else {
        index = this.cart.indexOf(id);
        this.cart.splice(index, 1)
      }
    }
  }
});
