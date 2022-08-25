import axios from 'axios';
import swal from "sweetalert";

const tasks  = {



    namespaced: true,
    state: {
        tasks: []
    },

    mutations: {
        setTasks(state, tasks) {
            state.tasks = tasks;
        },

        newTasks(state, tasks) {
            state.tasks.unshift(tasks)  ;
        },

        updaTetak(state, updatetasks) {
          const index  = state.tasks.findIndex(task => task.id == updatetasks.id) ;

          if (index != -1){
            state.tasks.splice(index ,1,updatetasks)
          }
        },

        deleteTetak(state, id) {
            state.tasks  = state.tasks.filter( task => task.id != id) ;
        },



    },

    actions: {
        async fetchTasks({ commit }) {

            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
                commit('setTasks', response.data)

            } catch (e) {
                console.log(e)
                swal("Oops!", "Something went wrong!", "error");
            }

        },


        async filterTasks({ commit },limit) {

            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
                commit('setTasks', response.data)

            } catch (e) {
                console.log(e)
                swal("Oops!", "Something went wrong!", "error");
            }

        },


        async storeTask({ commit },data) {

            try {
                const response = await axios.post(`https://jsonplaceholder.typicode.com/todos`,{
                    title: data,
                    completed:false,

                });
                commit('newTasks', response.data)
                swal("success!", "Data has been store!", "success");




            } catch (e) {
                console.log(e)
                swal("Oops!", "Something went wrong!", "error");
            }

        },


        async updaTetaks({ commit },data) {

            try {
                const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${data.id}`,{
                    id: data.id,
                    title: data.title,
                    completed: !data.completed,

                });
                commit('updaTetak', response.data)
                swal("success!", "Data has been Updated!", "success");




            } catch (e) {
                console.log(e)
                swal("Oops!", "Something went wrong!", "error");
            }

        },



        async delteTetaks({ commit },id) {

            try {
                const response = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`  );
                commit('deleteTetak', id)
                swal("Deleted!", "Data has been Deleted!", "success");




            } catch (e) {
                console.log(e)
                swal("Oops!", "Something went wrong!", "error");
            }

        },





    },

    getters: {

        allTasks(state) {
            return state.tasks;

        },

    }




}


export default tasks;
