
import { createStore } from 'vuex';

import tasks from './Moduls/tasks';
import product from './Moduls/product';
import cart from './Moduls/cart.js'



const moduleA = {

    namespaced: true,
    state: {
        count: 21
    },

    mutations: {
        increment(state, number) {
            state.count += number
        }
    },

    actions: {
        increment({ commit }, payout) {
            commit('increment', payout.number)
        }
    },

    getters: {

        doneTodos(state) {
            return state.todos.filter(todo => {
                if (todo.done === true) {
                    return todo;
                }
            })

        },

    }

};

const moduleB = {
    namespaced: true,
    state: {
        count: 21
    },

    mutations: {
        increment(state, number) {
            state.count += number
        }
    },

    actions: {
        increment({ commit }, payout) {
            commit('increment', payout.number)
        }
    },

    getters: {

        doneTodos(state) {
            return state.todos.filter(todo => {
                if (todo.done === true) {
                    return todo;
                }
            })

        },

    }
};

const store = createStore({
    modules: {
        moduleA: moduleA,
        moduleA: moduleB,
        tasksModul: tasks,
        product: product,
        cart: cart,



    }
})





// const store = createStore({
//     state: {
//         count: 21
//     },

//     // state: {
//     //     todos: [
//     //         { id: 1, text: 'todo 1', done: true },
//     //         { id: 2, text: 'todo 2', done: false }
//     //       ]
//     // },

//     // getters :{

//     //     doneTodos(state){
//     //         return  state.todos.filter( todo =>{
//     //             if(todo.done === true){
//     //                 return todo;
//     //             }
//     //         })

//     //     },

//     //     getTodoById :(state) => (id) => {
//     //         return  state.todos.find(todo => todo.id == id)
//     //     }


//     // },



//     mutations: {
//         increment(state, number) {
//             state.count+=number
//         }
//     },


//     actions: {
//         increment ({commit},payout) {
//            commit('increment',payout.number)
//         }
//         }
// })



export default store;
