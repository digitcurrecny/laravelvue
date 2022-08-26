
import swal from "sweetalert";
function UpdatelocalStorage(cart){
    localStorage.setItem('cart',JSON.stringify(cart))
}

const cart = {
    namespaced: true,

    state: {

        cart:  localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) :  [],

    },

    getters: {
        count(state) {
            return state.cart.length
        },
        allItems(state) {
            return state.cart
        },
        totalAmount(state) {
            return state.cart.reduce((total, p) => {
                return total + p.price * p.quantity
            }, 0)
        }
    },
    mutations: {
        add(state, product) {
            const item = state.cart.find(p => p.id == product.id)
            if (!item) {
                state.cart.push({
                    ...product,
                    quantity: 1
                });

                swal({
                    title: "The product has been added to the card",
                    icon: "success",
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 3000,
                    toast: true,
                    position: 'top',
                });

            }else{
                item.quantity++
                swal({
                    title: "Your card has been updated",
                    icon: "success",
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 3000,
                    toast: true,
                    position: 'top',
                });

            }


            UpdatelocalStorage(state.cart)


        },



        increment(state, id) {
            const item = state.cart.find(p => p.id ==  id)
            if (item)  {
                item.quantity++
                swal({
                    title: "Your card has been updated",
                    icon: "success",
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 3000,
                    toast: true,
                    position: 'top',
                });

            }


            UpdatelocalStorage(state.cart)


        },




        decrement(state, id) {
            const item = state.cart.find(p => p.id ==  id)
            if (item  && item.quantity >1)   {
                item.quantity--
                swal({
                    title: "Your card has been updated",
                    icon: "success",
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 3000,
                    toast: true,
                    position: 'top',
                });

            }


            UpdatelocalStorage(state.cart)


        },

        remove(state, id) {
            state.cart = state.cart.filter(cart => cart.id !=  id)

            UpdatelocalStorage(state.cart)

                swal({
                    title: "Your item has been Deleted",
                    icon: "success",
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 3000,
                    toast: true,
                    position: 'top',
                });






        },

        clear(state) {
            state.cart = [];

            UpdatelocalStorage(state.cart)


        },





    },
    actions: {
        addToCart({ commit }, product) {
            commit('add', product);
            swal({
                title: "Product added",
                icon: "success",
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: 'top',
            });
        },




        increment({ commit }, id) {
            commit('increment', id);
        },


        decrement({ commit }, id) {
            commit('decrement', id);
        },

        remove({ commit }, id) {
            commit('remove', id);
        },

        clear({ commit }) {
            commit('clear');
        },


    }
}

export default cart;
