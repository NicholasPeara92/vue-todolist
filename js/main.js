//todo Rifare l'esercizio della to do list.
//todo Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
//todo - text, una stringa che indica il testo del todo
//todo - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
//todo MILESTONE 1
//todo Stampare all'interno di una lista, un item per ogni todo.
//todo Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
//todo MILESTONE 2
//todo Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
//todo MILESTONE 3
//todo Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
//todo Bonus:
//todo cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

const { createApp } = Vue

createApp({
    data() {
        return {
            newTodo: '',
            todoList: [
                {
                    text: 'Fare i compiti',
                    done: false,
                },
                {
                    text: 'Fare la spesa',
                    done: false,
                },
                {
                    text: 'Pagare le bollette',
                    done: false,
                }
            ]
        }
    },
    methods: {
        // aggiunge nuova task all'array todoList e sul container delle task
        addTodo() {
            if( this.newTodo !== ' ' ) {
                this.newTodo = {
                    text: this.newTodo,
                    done: false,
                };
                this.todoList.push(this.newTodo);
                console.log(this.todoList);
                this.newTodo = '';
            }
        },
        // rimuove task al click della x
        removeTodo(index) {
            this.todoList.splice(index, 1);
        },
        
    }
}).mount('#app')