<template>
  <div class="hello">
    <md-card v-for="picture in pictures">
      <md-card-media>
        <img v-bind:src="picture.url" alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">{{ picture.title }}</div>
      </md-card-header>

      <md-card-content>
        {{ picture.info }}
      </md-card-content>

    </md-card>
  </div>
</template>

<script>
import data from '../data'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome',
      pictures: data.pictures
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
