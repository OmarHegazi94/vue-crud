<template>
    <section class="post-details">
        <h1>Details</h1>

        <div v-if="post" class="card mt-4">
            <div class="card-header">
                <span class="badge rounded-pill bg-primary">Post ID: {{ post.id }}</span>
                |
                <span class="badge rounded-pill bg-secondary">User ID: {{ post.userId }}</span>
            </div>
            <div class="card-body">
                <h5 class="card-title">{{ post.title }}</h5>
                <p class="card-text">
                    {{ post.body }}
                </p>
                <button :disabled="displaySpinner === true" class="btn btn-primary px-5" @click="getComments(post.id)">
                    <Spinner v-if="displaySpinner" />
                    Get Comments
                </button>
            </div>
        </div>

        <div v-if="message" class="alert alert-info">
            {{ message }}
        </div>
    </section>

    <section v-if="comments" class="comments">
        <hr class="mt-5" />
        <h3 class="mt-4 mb-2">Comments</h3>
        <div v-for="comment in comments" :key="comment.id" class="card my-3">
            <div class="card-header">{{ comment.name }}</div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <p>{{ comment.body }}</p>
                    <footer class="blockquote-footer">
                        Someone famous by email
                        <cite title="Source Title">{{ comment.email }}</cite>
                    </footer>
                </blockquote>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";
import Spinner from "@/components/Spinner.vue";
export default {
    // props: ['postID'],
    components: {
        Spinner,
    },
    data() {
        return {
            postID: this.$route.params.postID,
            post: null,
            comments: null,
            message: "",
            displaySpinner: false,
        };
    },
    methods: {
        getPosts() {
            try {
                if (this.postID) {
                    axios.get(`https://jsonplaceholder.typicode.com/posts/${this.postID}`).then((response) => {
                        // console.log(response.data);
                        // const results = response.data.slice(0, 10);
                        // this.posts = results;
                        this.post = response.data;
                    });
                } else {
                    this.message = "Couldn't Fetch The Post";
                }
            } catch (error) {
                console.log(error);
            }
        },
        getComments(postID) {
            try {
                if (postID) {
                    this.displaySpinner = true;
                    axios.get(`https://jsonplaceholder.typicode.com/posts/${postID}/comments`).then((response) => {
                        // console.log(response.data);
                        this.comments = response.data;
                        this.displaySpinner = false;
                    });
                } else {
                    this.message = "Couldn't Fetch The Post Comments";
                }
            } catch (error) {
                console.log(error);
            }
        },
    },
    beforeMount() {
        this.getPosts();
    },
};
</script>

<style></style>
