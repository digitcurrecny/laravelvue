import { defineStore } from 'pinia';

import axios from 'axios';
import swal from "sweetalert";




    export const useTasksStore = defineStore('task', {



    state: ()=>{

        return {
            tasks: []
        }
    },



    actions: {
        async fetchTasks( ) {

            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

                this.tasks = response.data;

            } catch (e) {
                console.log(e)
                swal("Oops!", "Something went wrong!", "error");
            }

        },


        async filterTasks(limit) {

            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
                this.tasks = response.data;

            } catch (e) {
                console.log(e)
                swal("Oops!", "Something went wrong!", "error");
            }

        },


        async storeTask(data) {

            try {
                const response = await axios.post(`https://jsonplaceholder.typicode.com/todos`,{
                    title: data,
                    completed:false,

                });

                this.tasks.unshift(response.data) ;
                swal("success!", "Data has been store!", "success");




            } catch (e) {
                console.log(e)
                swal("Oops!", "Something went wrong!", "error");
            }

        },


        async updaTetaks(data) {

            try {
                const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${data.id}`,{
                    id: data.id,
                    title: data.title,
                    completed: !data.completed,

                });

                const index  = this.tasks.findIndex(task => task.id == data.id) ;

                if (index != -1){
                    this.tasks.splice(index ,1,response.data)
                }



                swal("success!", "Data has been Updated!", "success");




            } catch (e) {
                console.log(e)
                swal("Oops!", "Something went wrong!", "error");
            }

        },



        async delteTetaks(id) {

            try {
                const response = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`  );

                this.tasks  = this.tasks.filter( task => task.id != id) ;
                swal("Deleted!", "Data has been Deleted!", "success");




            } catch (e) {
                console.log(e)
                swal("Oops!", "Something went wrong!", "error");
            }

        },





    },

    getters: {

        allTasks() {
            return  this.tasks ;

        },

    }




})




