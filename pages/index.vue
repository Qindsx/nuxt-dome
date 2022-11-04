<template>
  <div>
    <h1>hello nuxt</h1>
    <ul>
      <li v-for="item of data" :key="item.id">{{item.title}}</li>
    </ul>
  </div>
</template>
<script>
// import axios from 'axios';
import fetch from 'node-fetch';
export default {
  name:'/',
  async asyncData() {
    const res = await fetch('http://127.0.0.1:3000/data.json', { method:"GET"});
    const {data} = await res.json()
    console.log(data);
    return {
      data,
    };
  },
};
</script>
