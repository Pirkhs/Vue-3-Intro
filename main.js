const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id, remove=false) {
            if (remove) {
                this.cart.pop()
                return
            }
            this.cart.push(id)
        }
    }
})
