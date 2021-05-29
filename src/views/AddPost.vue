<template>
    <form class="row g-3">
        <div class="col-md-6">
            <label for="userID" class="form-label">User Id</label>
            <input v-model.number="post.userId" type="number" class="form-control is-valid" id="userID" disabled />
            <div class="valid-feedback">Looks good!</div>
        </div>

        <div class="col-md-6">
            <label for="postTitle" class="form-label">Post Title</label>
            <input v-model="post.title" type="text" class="form-control" id="postTitle" />
            <!-- <div class="valid-feedback">Looks good!</div> -->
        </div>

        <div class="col-12">
            <div class="mb-3">
                <label for="postBody" class="form-label">Post Body</label>
                <textarea v-model="post.body" class="form-control is-invalid" id="postBody" placeholder="Add your post body here" rows="4"></textarea>
                <div class="invalid-feedback">
                    Post Body is Required
                </div>
            </div>
        </div>

        <p>userID: {{ post.userId }}</p>
        <p>title: {{ post.title }}</p>
        <p>body: {{ post.body }}</p>

        <div class="col-12">
            <button @click.prevent="submitForm" type="submit" class="btn btn-primary">
                Add Post
            </button>
        </div>
    </form>
</template>

<script>
import axios from "axios";
// import Spinner from "@/components/Spinner.vue";

export default {
    components: {
        // Spinner,
    },
    data() {
        return {
            post: {
                userId: 1,
                title: "",
                body: "",
            },
            hasError: false,
            isSubmitted: false,
        };
    },
    methods: {
        submitForm() {
            if (this.post.userId && this.post.title && this.post.body) {
                axios
                    .post("https://jsonplaceholder.typicode.com/posts", {
                        title: this.post.title,
                        body: this.post.body,
                        userId: this.post.userId,
                    })
                    .then((response) => {
                        console.log(response);
                    });
            }
            this.isSubmitted = true;
        },
    },
};
</script>

<style></style>
