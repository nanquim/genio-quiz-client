<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap');

html,
body,
#app,
#container {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #24244c;
}

</style>
