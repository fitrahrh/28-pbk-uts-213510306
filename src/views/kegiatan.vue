<script>
let id = 0

export default {
  data() {
    return {
      newTodo: '',
      hideCompleted: false,
      todos: []
    }
  },
  computed: {
    filteredTodos() {
      return this.hideCompleted
        ? this.todos.filter((t) => !t.done)
        : this.todos
    }
  },
  methods: {
    addTodo() {
      this.todos.push({ id: id++, text: this.newTodo, done: false })
      this.newTodo = ''
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo)
    }
  }
}
</script>
<template>
  <div class="container">
    <h1>My Todo List</h1>
    <form @submit.prevent="addTodo" class="form">
      <input v-model="newTodo" class="form-input" placeholder="Enter a new task">
      <button class="form-btn">Add Todo</button>
    </form>
    <ul class="todo-list">
      <li v-for="todo in filteredTodos" :key="todo.id" class="todo-item">
        <div class="todo-left">
          <input type="checkbox" v-model="todo.done" class="todo-checkbox">
          <span :class="{ done: todo.done }" class="todo-text">{{ todo.text }}</span>
        </div>
        <button @click="removeTodo(todo)" class="todo-delete-btn">Delete</button>
      </li>
    </ul>
    <button @click="hideCompleted = !hideCompleted" class="show-btn">
      {{ hideCompleted ? 'Show all' : 'Hide completed' }}
    </button>
  </div>
</template>

<style>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #b5b2b2;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
}

.form {
  display: flex;
  margin-bottom: 20px;
}

.form-input {
  flex: 1;
  padding: 10px;
  font-size: 1.2rem;
  border-radius: 5px 0 0 5px;
  border: none;
}

.form-btn {
  padding: 10px;
  font-size: 1.2rem;
  background-color: #000000;
  color: #fff;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}

.todo-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.todo-left {
  flex: 1;
  display: flex;
  align-items: center;
}

.todo-checkbox {
  margin-right: 10px;
  cursor: pointer;
}

.todo-text {
  font-size: 1.2rem;
}

.todo-delete-btn {
  padding: 10px;
  font-size: 1.2rem;
  background-color: gray;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.todo-delete-btn:hover {
  transform: scale(1.1);
}

.show-btn {
  display: block;
  margin: 0 auto;
  padding: 10px;
  font-size: 1.2rem;
  background-color: #00ff84;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>