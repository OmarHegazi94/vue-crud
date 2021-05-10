<template>
  <h1>Details</h1>
  {{ postID }}
  <p v-if="message">
    {{ message }}
  </p>
</template>

<script>
import axios from "axios";

export default {
  // props: ['postID'],
  data(){
    return {
      postID: this.$route.params.postID,
      message: ''
    }
  },
    methods: {
    getPosts() {
      try {
        if(this.postID) {
          axios
            .get(`https://jsonplaceholder.typicode.com/posts/${this.postID}`)
            .then((response) => {
              console.log(response.data)
              // const results = response.data.slice(0, 10);
              // this.posts = results;
            });
        } else {
          this.message = "Couldn't Fetch The Post"
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  beforeMount() {
    this.getPosts();
  },
}
</script>

<style>

</style>