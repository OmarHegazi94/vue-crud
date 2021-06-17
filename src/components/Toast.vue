<template>
    <div :class="showToast === true ? 'toast show' : 'toast' " role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header bg-dark text-white">
            <!-- <img src="..." class="rounded me-2" alt="..." /> -->
            <strong class="me-auto">{{ toastTitle }}</strong>
            <small>Now</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            {{ toastBody }}
        </div>
    </div>
</template>

<script>
export default {
    props: ['toastTitle', 'toastBody', 'showToast', 'type'],
};
</script>

<style scoped>
    .toast {
        position: absolute;
        top: 4rem;
        right: 1rem;
    }
</style>
