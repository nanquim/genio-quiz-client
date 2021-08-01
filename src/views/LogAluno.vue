<template>
  <div class="log-aluno">
    <Logo />
    <p>Você finalizou seu quiz!</p>
    <Botao :path="'/'" :text="'Inicio'"/>
  </div>
</template>

<script>
import Logo from "../components/Logo.vue";
import Botao from "../components/Botao.vue";

export default {
  name: "LogAluno",
  components: {
    Logo,
    Botao
  },
};
</script>


<style scoped>
.log-aluno {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.log-aluno > *{
  margin-bottom: 5%;
}
</style>