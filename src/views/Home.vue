<template>
    <div class="d-flex justify-content-between align-items-center">
        <div class="col">
            <h1>Home page</h1>
        </div>
        <div class="col-lg-2 d-grid gap-2">
            <router-link to="/addPost" class="btn btn-primary btn-block">Add Post</router-link>
        </div>
    </div>

    <Toast v-if="showToast" :showToast='showToast' :toastTitle='toastTitle' :toastBody='toastBody' />

    <div class="table-responsive">
        <Spinner fullwidth="fullwidth" v-if="displaySpinner" />
        <table v-else class="table table-bordered table-striped mt-4 text-center">
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

                    <td align="center">
                        <div class="btn-group text-center align-middle" role="group" aria-label="Actions">
                            <button type="button" class="btn btn-sm btn-primary" @click="getSinglePost(post.id)">
                                Details
                            </button>

                            <button type="button" class="btn btn-secondary">Edit</button>
                            <button type="button" class="btn btn-warning" @click="deletePost(post.id)">Delete</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from "axios";
import Spinner from "@/components/Spinner.vue";
import Toast from "@/components/Toast.vue";

export default {
    data() {
        return {
            posts: [],
            message: "",
            displaySpinner: false,
            // Toast
            toastBody: '',
            toastTitle: '',
            showToast: false
        };
    },
    components: {
        Spinner,
        Toast
    },
    methods: {
        getData() {
            try {
                this.displaySpinner = true;
                axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
                    // console.log(response.data);
                    // const results = response.data.slice(0, 10);
                    // this.posts = results;
                    this.posts = response.data;
                    this.displaySpinner = false;
                });
            } catch (error) {
                console.log(error);
            }
        },
        getSinglePost(postID) {
            this.$router.push({
                name: "details",
                params: { postID },
            });
        },
        deletePost(postID) {
            try {
                axios.delete(`https://jsonplaceholder.typicode.com/posts/${postID}`).then((response) => {
                    console.log(response.data);
                    this.getData();
                    this.showToast = true;
                    this.toastTitle = 'Delete Post';
                    this.toastBody = `Post with ID ${postID} Deleted Successfully !`

                    setTimeout(() => this.showToast = false, 5000);
                });
            } catch (error) {
                console.log(error);
            }
        },
    },
    beforeMount() {
        this.getData();
    },
};
</script>

<style></style>
