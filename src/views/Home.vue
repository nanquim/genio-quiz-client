<template>
  <div class="container-home">
    <Logo />
    <Login />
  </div>
</template>

<script>
import Login from "../views/Login.vue";
import Logo from "../components/Logo";

export default {
  name: "App",
  components: {
    Login,
    Logo,
  },
  // data() {
  //   return {
  //     socketConectado: false,
  //     socketMsg: ''
  //   }
  // },
  // sockets: {
  //   connect() {
  //     this.socketConectado = true;
  //   },
  //   disconnect() {
  //     this.socketConectado = false;
  //   },
  //   messageChannel(data) {
  //     //disparado qnd o servidor envia algo no canal 'messageChannel'
  //     this.socketMsg = data;
  //   }
  // }
};
</script>

<style>
.container-home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
