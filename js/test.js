const text = document.getElementById('text');

console.log(text.textContent);

document.addEventListener('click', function () {

    console.log('クリックされました');

});

text.addEventListener('click', function () {

    console.log('見出しがクリックされました');

});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
})

var vm = new Vue({
    el: '#tasks-index',
    data: {
        tasks: [
            { id: 0, name: 'Studying JavaScript', isDeleted: false },
            { id: 1, name: 'Studying PHP', isDeleted: false },
            { id: 2, name: 'Studying Ruby', isDeleted: false },
        ],
        newTask: '',
    },
    methods: {
        createTask: function (event) {
            var new_id = this.tasks.length;
            this.tasks.push({ id: new_id, name: this.newTask, isDeleted: false });
            this.newTask = '';
        },
        doneTask: function (task_id) {
            console.log(task_id);
            console.log(this.tasks[task_id].isDeleted);
            this.tasks[task_id].isDeleted = true;
            console.log(this.tasks[task_id].isDeleted);
        }
    }
})