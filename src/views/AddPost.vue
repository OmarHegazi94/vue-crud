<template>
    <Toast v-if="showToast" :showToast='showToast' :toastTitle='toastTitle' :toastBody='toastBody' />

    <form class="row g-3" @submit.prevent="submitForm">
        <div class="col-md-6">
            <label for="userID" class="form-label">User Id</label>
            <input v-model.number="post.userId" type="number" class="form-control is-valid" id="userID" disabled />
            <!-- <div class="valid-feedback">Looks good!</div> -->
        </div>

        <div class="col-md-6">
            <label for="postTitle" class="form-label">Post Title</label>
            <input v-model="post.title" type="text" :class="errors.title ? 'form-control is-invalid' : 'form-control' " id="postTitle" />
            <div v-if="errors.title" class="invalid-feedback">
                {{ errors.title }}
            </div>
        </div>

        <div class="col-12">
            <div class="mb-3">
                <label for="postBody" class="form-label">Post Body</label>
                <textarea v-model="post.body" :class="errors.body ? 'form-control is-invalid' : 'form-control' " id="postBody" placeholder="Add your post body here" rows="4"></textarea>
                <div v-if="errors.body" class="invalid-feedback">
                    {{ errors.body }}
                </div>
            </div>
        </div>

        <p>userID: {{ post.userId }}</p>
        <p>title: {{ post.title }}</p>
        <p>body: {{ post.body }}</p>

        <div class="col-12">
            <button type="submit" class="btn btn-primary">
                Add Post
            </button>
        </div>
    </form>
</template>

<script>
import axios from "axios";
import Toast from "@/components/Toast.vue";

export default {
    components: {
        Toast
    },
    data() {
        return {
            post: {
                userId: 1,
                title: "",
                body: "",
            },
            errors:[
                {
                    title: ''
                },
                {
                    body: ''
                }
            ],
            isSubmitted: false,
            
            // Toast
            toastBody: '',
            toastTitle: '',
            showToast: false
        };
    },
    methods: {
        submitForm() {
            if (this.post.userId && this.post.title && this.post.body) {
                try {                    
                    axios
                        .post("https://jsonplaceholder.typicode.com/posts", {
                            title: this.post.title,
                            body: this.post.body,
                            userId: this.post.userId,
                        })
                        .then((response) => {
                            this.post.title = ''
                            this.post.body = ''

                            this.showToast = true;
                            this.toastTitle = 'Add Post';
                            this.toastBody = `Post with ID ${this.post.userId} was added Successfully !`
    
                            setTimeout(() => this.showToast = false, 5000);
                            console.log(response);
                        });
                } catch (error) {
                    this.showToast = true;
                    this.toastTitle = 'Add Post';
                    this.toastBody = `Something went wrong! please try again later`
                }
                
            } else {
                console.log(this.errors)
                if(this.post.title === '') {
                    this.errors.title = "Post title is required."
                }
                if(this.post.body === '') {
                    this.errors.body = "Post body is required."
                }
            }
            this.isSubmitted = true;
        },
    },
};
</script>

<style></style>
