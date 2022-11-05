<template>
  <div>
    <h1>hello nuxt</h1>
    <ul>
      <li v-for="item of posts" :key="item.id">
        <nuxt-link :to="'/article/' + item.id">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Foo',
  props: ["posts"],
  async asyncData({ $axios }) {
    const res = await $axios.$get('http://localhost:3000/data.json');
    console.log(res.data);
    return {
      posts: res.data
    }
  },
};
</script>
