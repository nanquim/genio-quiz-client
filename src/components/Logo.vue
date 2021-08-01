<template>
  <transition name="animated" appear enter-active-class="animated bounce">
    <div class="logo">Gênio Quiz</div>
    </transition>
</template>

<script>
export default {
  name: "Logo",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");

.logo {
  font-family: "Lobster", cursive;
  font-size: 2em;
  width: 60%;
  height: 10%;
  position: absolute;
  top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  background-color: #c0244c;
  color: white;
  text-align: center;
  /* border-radius: 15px; */
  /* box-shadow: 3px 6px 16px 5px rgba(255,255,255,0.42); */
}
</style>