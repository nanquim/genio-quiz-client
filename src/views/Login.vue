<template>
  <div class="container-login">
    <div class="login">
      <Imagem :filename="'professor.png'" />
      <Botao :path="'/professor'" :text="'Sou Professor'" />
    </div>
    <div class="login">
      <Imagem :filename="'aluno.png'" />
      <Botao :path="'/aluno'" :text="'Sou Aluno'" />
    </div>
  </div>
</template>

<script>
// import Imagem from '../components/Imagem';
import Botao from "../components/Botao";
import Imagem from "../components/Imagem.vue";

export default {
  name: "Login",
  components: {
    Imagem,
    Botao,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-login {
  min-width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.container-login > *,
.login > * {
  margin: 10%;
}

.login {
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
