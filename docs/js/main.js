


new Vue({
    el: '#app',
    data: {
        yearly: false,
        range: 3,
        prices:{ 
            1: {
                views: '10K',
                price: 8
            },
            2: {
                views: '50K',
                price: 12
            },
            3: {
                views: '100K',
                price: 16
            },
            4: {
                views: '500K',
                price: 24
            },
            5: {
                views: '1M',
                price: 36
            },
        }
    },
    methods: {
        handleStyle(e) {
            let range = e.target;
            let max = range.max;
            let value  = range.value;
            let min = range.min;
            var val = (value-min)/(max-min)*100;
            range.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ' + val + '%, hsl(224, 65%, 95%) ' + val + '%, hsl(224, 65%, 95%) 100%)'
        }

    },
    computed: {
        computedViews() {
                return this.prices[this.range].views;
        },
        computedPrice() {
            var formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              });
              let price = this.prices[this.range].price;
              price = this.yearly ? price * 0.75 : price;
              
              return formatter.format(price);
        }
    }
})