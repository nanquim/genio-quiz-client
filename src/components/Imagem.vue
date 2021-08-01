<template>
  <img :src="imagemURL">
</template>
<script>

export default
{
  name: 'Imagem',
  props:
  {
    filename:
    {
      type: String,
      required: true
    }
  },
  computed:
  {
    imagemURL()
    {

      return require(`../../public/${this.filename}`);
    }
  }
}
</script>