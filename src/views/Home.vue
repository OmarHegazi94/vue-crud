<template>
  <h1>Home page</h1>

  <div v-if="photos" class="table-responsive">
    <table class="table table-bordered table-striped mt-4 text-center">
      <thead>
        <tr>
          <th scope="col">albumId</th>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">url</th>
          <th scope="col">thumbnailUrl</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="photo in photos" :key="photo.id">
          <td scope="row">
            <div class="text-center">
              <img
                :src="photo.thumbnailUrl"
                class="rounded-circle w-50"
                :alt="photo.title"
              />
            </div>
          </td>
          <th>
            {{ photo.albumId }}
          </th>
          <td>{{ photo.id }}</td>
          <td>{{ photo.title }}</td>

          <td>
            {{ photo.url }}
          </td>

          <td>
            <button
              class="btn btn-sm btn-primary"
              @click="getSinglePhoto(photo.id)"
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
      photos: [],
    };
  },
  methods: {
    getData() {
      try {
        axios
          .get("https://jsonplaceholder.typicode.com/photos")
          .then((response) => {
            const results = response.data.slice(0, 10);
            this.photos = results;
          });
      } catch (error) {
        console.log(error);
      }
    },
    getSinglePhoto(photoID) {
      this.$router.push({
        name: 'details',
        params: { photoID: photoID },
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