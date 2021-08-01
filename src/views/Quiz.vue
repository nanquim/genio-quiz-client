<template>
  <div v-if="perguntas" class="quiz-container">
    <Logo />
    <div class="pergunta">{{ perguntaAtual.pergunta }}</div>
    <div class="alternativas">
      <ul>
        <transition-group appear name="zoomInDown">
          <li
            v-for="(alternativa, index) in perguntaAtual.alternativas"
            :key="index"
            @click="
              elementoAtivo = index;
              corrige(alternativa, perguntaAtual);
            "
          >
            <!--// class="[elementoAtivo === index && acertou ? 'certa' : '']" -->
            {{ alternativa }}
          </li>
        </transition-group>
      </ul>
    </div>
  </div>
  <div v-else>Carregando...</div>
</template>

<script>
import { GetQuiz } from "../services";
import Logo from "../components/Logo";
import router from "../router";

export default {
  name: "Quiz",
  components: {
    Logo,
  },
  data() {
    return {
      perguntas: null,
      indice: 0,
      perguntaAtual: {},
      acertou: false,
      totalPerguntas: 0,
      maximoPerguntas: null,
      elementoAtivo: "",
      socket: {},
      respostasAluno: { aluno: null, respostas: [] },
    };
  },
  methods: {
    corrige(selecionada, perguntaAtual) {
      this.acertou = selecionada == perguntaAtual.resposta;
      ++this.totalPerguntas;
      this.respostasAluno.respostas.push({
        resposta: selecionada,
        correta: perguntaAtual.resposta,
        acertou: this.acertou,
      });
      this.totalPerguntas == this.maximoPerguntas
        ? this.quizFinalizado()
        : this.proximaPergunta();
    },
    proximaPergunta() {
      ++this.indice;
      this.perguntaAtual = this.perguntas[this.indice];
    },
    quizFinalizado() {
      this.$socket.emit("quiz-finalizado", this.respostasAluno);
      router.push({ path: "/aluno/log" });
    },
  },
  async created() {
    this.perguntas = await GetQuiz();
    this.perguntaAtual = this.perguntas[this.indice];
    this.maximoPerguntas = Object.keys(this.perguntas).length;
  },
  mounted() {
    const id = this.$socket.id;
    this.$socket.emit("login-aluno", id);
    this.respostasAluno.aluno = this.$socket.id;
  },
};
</script>

<style scoped>
.quiz-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.pergunta,
.alternativas {
  width: 60%;
  margin: 2%;
  padding: 10px;
}

.pergunta,
li {
  background: #c0244c;
  color: #fff;
  -webkit-box-shadow: 3px 6px 31px -6px #000000;
  box-shadow: 3px 6px 31px -6px #000000;
}
li:hover {
  opacity: 0.6;
}

.certa {
  background: #319e40;
}

/* TODO */
.errada {
  text-decoration: line-through;
}

ul {
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  margin-bottom: 10px;
  padding: 10px;
  cursor: pointer;
}

.zoomInDown-enter-active, .zoomInDown-leave-active {
  animation: zoomInDown 0.8s;
}
</style>
