const webstore = new Vue({
    el: '#app',
    data: {
        sitename: 'Vue.js Pet Depot',
        product: {
            id: 1001,
            title: "Cat Food, 25lb bag",
            description: "A 25 pound bag of <em>irresistible</em>, organic goodness for your cat.",
            price: 2000,
            image: "assets/images/product-fullsize.png",
        },
        cart: [],
        availableInventory: 5,
        showProduct: true,
    },
    methods: {
        addToCart() {
            this.cart.push(this.product.id);
        },
        showCheckout() {
            this.showProduct = this.showProduct ? false : true;
        }
    },
    computed: {
        cartItemCount() {
            return this.cart.length || '';
        },
        canAddToCart() {
            return this.availableInventory > this.cartItemCount;
        }
    },
    filters: {
        formatPrice(price) {
            if (!parseInt(price)) {
                return "";
            }

            if (price > 99999) {
                const priceString = (price / 100).toFixed(2);
                const priceArray = priceString.split("").reverse();
                let index = 3;
                while (priceArray.length > index + 3) {
                    priceArray.splice(index + 3, 0, ",");
                    index += 4;
                }
                return "$" + priceArray.reverse().join("");
            } else {
                return "$" + (price / 100).toFixed(2);
            }
        }
    },

});
