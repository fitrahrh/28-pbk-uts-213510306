
<script>
let id = 0

export default {
  data() {
    return {
      newTodo: '',
      hideCompleted: false,
      todos: [
        { id: id++, text: 'Makan pagi', done: true },
        { id: id++, text: 'Tidur Siang', done: false },
        { id: id++, text: 'Malam Belajar', done: false }
      ]
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
  <h1>DAFTAR KEGIATAN</h1>
  <hr>
  <br>

  <form @submit.prevent="addTodo">
    <input v-model="newTodo">
    <button>Tambahkan</button>
  </form>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done" placeholder="Masukkan kegiatan">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Tampilkan seluruh kegiatan ' : 'Sembunyikan kegiatan yang telah selesai' }}
  </button>
</template>


<style>
  .icon {
    color: red;
    width: 25px;
    height: 25px;
  }
  body,
  html{
    justify-content: center;
    align-items: center;
    font-family: monospace;
    width: 100%;
    height: 100%;
  }

  form {
    display: flex;
    margin-bottom: 20px;
  }
  form input {
    border: 2px solid black;
    border-radius: 5px;
    padding: 10px 20px;
    margin-right: 20px;
    font-size: 16px;
  }
  form button {
    background-color: #2ecc71;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
  form button:hover {
    background-color: #27ae60;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  li {
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    color: #06833a;
    font-weight: bold;
  }
  li:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  }
  li input[type="checkbox"] {
    margin-right: 10px;
  }
  li .done {
    text-decoration: line-through;
    color: #ff0202;
  }
  li button {
    background-color: #a90404;
    color: white;
    border: none;
    border-radius: 50%;
    font-weight: bold;
    width: 30px;
    margin-left: auto;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  li button:hover {
    background-color: #6f0202;
  }

  button {
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    margin-bottom: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  button:hover {
    background-color: #2980b9;
  }


</style>