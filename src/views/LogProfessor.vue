<template>
  <div class="log-professor-container">
    <Logo />
    <div v-if="resultado" class="resultado">
      <div class="resultado-resumo">
        Aluno: {{ resultado.aluno }} - Nota: {{ resultado.nota }}
      </div>
      <div class="resultado-detalhe">
        <ul>
          <li v-for="(resp, index) in resultado.respostas" :key="index">
            Pergunta {{ index + 1 }}: Resposta do aluno: {{ resp.resposta }} -
            Correta - {{ resp.correta }}
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
      <p>Professor, aguarde o aluno entrar e terminar de responder o quiz</p>
    </div>
    <div v-if="aluno && !resultado" class="conectado">Aluno conectou</div>
    <Botao :path="'/'" :text="'Inicio'" />
  </div>
</template>

<script>
import Logo from "../components/Logo.vue";
import Botao from "../components/Botao.vue";

export default {
  name: "LogProfessor",
  components: {
    Logo,
    Botao,
  },
  data() {
    return {
      socket: {},
      resultado: null,
      aluno: null,
    };
  },
  mounted() {
    const id = this.$socket.id;
    this.$socket.emit("login-professor", id);
    this.sockets.subscribe("resultado", (dados) => {
      this.resultado = dados;
    });
    this.sockets.subscribe("aluno-conectado", (dados) => {
      this.aluno = dados;
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

.resultado-resumo,
li {
  margin: 10px;
  height: 10%;
  padding: 10px;
  background: #c0244c;
  -webkit-box-shadow: 3px 6px 31px -6px #000000;
  box-shadow: 3px 6px 31px -6px #000000;
}

ul {
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-bottom: 10%;
}

.conectado{
  margin: 10%;
}
</style>