<template>
  <button @click="routeTo()" class="btn">
    {{ text }}
  </button>
</template>

<script>

import router from '../router'


export default {
  name: 'Botao',
  props: {
   text: {
     type: String,
     required: true
   },
   path:{
     type: String,
     required: true
   }
  },
  methods: {
    routeTo() {
      router.push({path: this.path})
    },
  },
}
</script>

<style scoped>

.btn {
    background-color: #c0244c;
    color: #fff;
    border: none;
    padding: 8px;
    cursor: pointer;
}

</style>
