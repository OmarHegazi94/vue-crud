<template>
  <h1>Home page</h1>

  <div v-if="posts" class="table-responsive">
    <table class="table table-bordered table-striped mt-4 text-center">
      <thead>
        <tr>
          <th scope="col">userId</th>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">body</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id">
          <th>
            {{ post.userId }}
          </th>
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>

          <td>
            {{ post.body }}
          </td>

          <td>
            <button
              class="btn btn-sm btn-primary"
              @click="getSinglePost(post.id)"
            >
              Details
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    getData() {
      try {
        axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then((response) => {
            const results = response.data.slice(0, 10);
            this.posts = results;
          });
      } catch (error) {
        console.log(error);
      }
    },
    getSinglePost(postID) {
      this.$router.push({
        name: 'details',
        params: { postID },
      });
    },
  },
  beforeMount() {
    this.getData();
  },
};
</script>

<style>
</style>