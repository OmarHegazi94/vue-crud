<template>

    <Spinner fullwidth="fullwidth" v-if="displaySpinner" />

    <Toast v-if="showToast" :showToast="showToast" :toastTitle="toastTitle" :toastBody="toastBody" />

    <div v-if="errors.length > 0" class="bg-light mb-4 p-2 rounded border">
        <ul class="mb-0">
            <li v-for="(error, index) in errors" :key="index" class="text-danger">{{ error }}</li>
        </ul>
    </div>

    <form class="row g-3" @submit.prevent="submitForm">
        <div class="col-md-6">
            <label for="userID" class="form-label">User Id</label>
            <input v-model.number="post.userId" type="number" class="form-control is-valid" id="userID" disabled />
        </div>

        <div class="col-md-6">
            <label for="postTitle" class="form-label">Post Title</label>
            <input v-model="post.title" type="text" class="form-control" id="postTitle" />
        </div>

        <div class="col-12">
            <div class="mb-3">
                <label for="postBody" class="form-label">Post Body</label>
                <textarea v-model="post.body" class="form-control" id="postBody" placeholder="Add your post body here" rows="4"></textarea>
            </div>
        </div>

        <!-- <p>userID: {{ post.userId }}</p>
        <p>title: {{ post.title }}</p>
        <p>body: {{ post.body }}</p> -->

        <div class="col-12">
            <button v-if="postID === '' " type="submit" class="btn btn-primary">
                Add Post
            </button>
            <button v-if="postID !== '' " type="submit" class="btn btn-primary">
                Edit Post
            </button>
        </div>
    </form>
</template>

<script>
import axios from "axios";

import Spinner from "@/components/Spinner.vue";
import Toast from "@/components/Toast.vue";


export default {
    components: {
        Toast,
        Spinner
    },
    data() {
        return {
            postID: this.$route.params.postID,
            post: {
                userId: 1,
                title: "",
                body: "",
            },
            displaySpinner: false,

            // Toast
            toastBody: "",
            toastTitle: "",
            showToast: false,

            errors: []
        };
    },
    beforeMount() {
        // console.log(this.postID == "")
        try {
            if (this.postID) {
                this.displaySpinner = true;
                axios.get(`https://jsonplaceholder.typicode.com/posts/${this.postID}`).then((response) => {
                    // console.log(response.data);
                    // const results = response.data.slice(0, 10);
                    // this.posts = results;
                    this.post = response.data;
                    this.displaySpinner = false;
                    console.log(response.data)
                });
            } else {
                this.message = "Couldn't Fetch The Post";
            }
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        submitForm() {
            if (this.post.userId && this.validateTitle(this.post.title) && this.validateBody(this.post.body)) {
                try {
                    axios
                        .post("https://jsonplaceholder.typicode.com/posts", {
                            title: this.post.title,
                            body: this.post.body,
                            userId: this.post.userId,
                        })
                        .then((response) => {
                            this.post.title = "";
                            this.post.body = "";

                            this.showToast = true;
                            if(this.postID === '') {

                                this.toastTitle = "Add Post";
                                this.toastBody = `Post with ID ${this.post.userId} has been added Successfully !`;
                            } else {                                
                                this.toastTitle = "Edited Post";
                                this.toastBody = `Post with ID ${this.post.userId} has been edited Successfully !`;
                            }

                            this.errors = [];
                            setTimeout(() => (this.showToast = false), 5000);
                            console.log(response);
                        });
                } catch (error) {
                    this.showToast = true;
                    this.toastTitle = "Add Post";
                    this.toastBody = `Something went wrong! please try again later`;
                }
            } else {
                console.log(this.errors);
                this.errors = [];

                this.validateTitle(this.post.title)
                this.validateBody(this.post.body)
            }

        },
        validateTitle(title) {
            if (title.length > 0) {
                return true
            } else {
                this.errors.push("Post title is required.");
                return false;
            }
        },
        validateBody(body) {
            if (body === "") {
                this.errors.push("Post body is required.");
                return false;
            } else if (body.length > 0 && body.length < 15) {
                this.errors.push("Post body can't be less than 15 chars.");
                return false;
            } else {
                return true
            }
        }
    },
};
</script>

<style></style>
