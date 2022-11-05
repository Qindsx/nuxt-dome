<template>
  <div>
    <h1>{{ article.title }}</h1>
    {{ article.body }}
  </div>
</template>
<script>
export default {
  name: 'Article',
  async asyncData(context) {
    const res = await context.$axios.$get('http://localhost:3000/data.json');
    console.log(res.data);
    return {
      article: res.data[context.params.id],
    };
  },
};
</script>
