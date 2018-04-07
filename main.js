var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    image: './assets/vmSocks-green-onWhite.jpg',
    link: './assets/vmSocks-green-onWhite.jpg',
    inventory: 100,
    onSale: false,
    sizes: ["Small", "Medium", "Large"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green"
      },
      {
        variantId: 2235,
        variantColor: "blue"
      }
    ]
  }
});
