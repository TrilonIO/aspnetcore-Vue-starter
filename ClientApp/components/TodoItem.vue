<template>
    <li class="todo" :class="{ completed: item.completed }">
        <input class="toggle" type="checkbox" :checked="item.completed" @change="toggleTodo({ id: item.id, completed: !item.completed })">
        <label v-text="item.text"></label>
        <button class="delete" @click="deleteTodo(item.id)">
            <span class="glyphicon glyphicon-trash"></span>
        </button>
    </li>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  props: ['item'],
  methods: {
    ...mapActions([
      'toggleTodo',
      'deleteTodo'
    ])
  }
}
</script>
<style>
    .todo {
      list-style-type: none;
    }

    .todo.completed {
      opacity: 0.5;
    }

    .todo.completed label {
      text-decoration: line-through;
    }

    button.delete {
      color: red;
      opacity: 0.5;
      -webkit-appearance: none;
      -moz-appearance: none;
      outline: none;
      border: 0;
      background: transparent;
    }
</style>