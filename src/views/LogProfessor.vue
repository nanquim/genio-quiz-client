<template>
  <div class="log-professor-container">
    <Logo />
    <div v-if="resultado !== null" class="resultado">
      <div class="resultado-resumo">
        Aluno: {{ resultado.aluno }} - Nota: {{ resultado.nota }}
      </div>
      <div class="resultado-detalhe">
        <ul>
          <li v-for="(resp, index) in resultado.respostas" :key="index">
            Pergunta {{ index + 1 }}: Resposta do aluno: {{resp.resposta }}  - Correta - {{resp.correta}}
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
      <p>Professor, aguarde o aluno terminar de responder o quiz</p>
    </div>
        <Botao :path="'/'" :text="'Inicio'"/>
  </div>
</template>

<script>
import Logo from "../components/Logo.vue";
import Botao from "../components/Botao.vue";

export default {
  name: "LogProfessor",
  components: {
    Logo,
    Botao
  },
  data() {
    return {
      socket: {},
      resultado: null,
    };
  },
  mounted() {
    const id = this.$socket.id;
    this.$socket.emit("login-professor", id);
    this.sockets.subscribe("resultado", (dados) => {
      this.resultado = dados;
    });
  },
};
</script>


<style scoped>
.log-professor-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.log-professor-container > * {
  margin-bottom: 10%;
}

.resultado-resumo, .resultado-detalhe{
  background: #c0244c;
  padding: 5px;
}

.resultado-resumo, li {
  margin-bottom: 10px;
}

ul {
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
}


</style>