<template>
    <div :class="fullwidth ? 'cssload-container-fullwidth' : 'cssload-container'">
        <div :class="fullwidth ? 'cssload-whirlpool-fullwidth' : 'cssload-whirlpool'"></div>
    </div>
</template>

<script>
export default {
    props: ['fullwidth'],
};
</script>

<style scoped>
.cssload-container {
    position: relative;
}

.cssload-container-fullwidth {
    position: absolute;
    background-color: rgb(0 0 0 / 24%);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    z-index: 9999;
}

.cssload-whirlpool,
.cssload-whirlpool::before,
.cssload-whirlpool::after {
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid rgb(204, 204, 204);
    border-left-color: rgb(0, 0, 0);
    border-radius: 524px;
    -o-border-radius: 524px;
    -ms-border-radius: 524px;
    -webkit-border-radius: 524px;
    -moz-border-radius: 524px;
}

.cssload-whirlpool-fullwidth,
.cssload-whirlpool-fullwidth::before,
.cssload-whirlpool-fullwidth::after {
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid rgb(204, 204, 204);
    border-left-color: rgb(0, 0, 0);
    border-radius: 524px;
    -o-border-radius: 524px;
    -ms-border-radius: 524px;
    -webkit-border-radius: 524px;
    -moz-border-radius: 524px;
}

.cssload-whirlpool {
    margin: -1px 0 0 -88px;
    height: 26px;
    width: 26px;
    animation: cssload-rotate 1150ms linear infinite;
    -o-animation: cssload-rotate 1150ms linear infinite;
    -ms-animation: cssload-rotate 1150ms linear infinite;
    -webkit-animation: cssload-rotate 1150ms linear infinite;
    -moz-animation: cssload-rotate 1150ms linear infinite;
}

.cssload-whirlpool-fullwidth {
    margin: -1px 0 0 -88px;
    height: 50px;
    width: 50px;
    animation: cssload-rotate 1150ms linear infinite;
    -o-animation: cssload-rotate 1150ms linear infinite;
    -ms-animation: cssload-rotate 1150ms linear infinite;
    -webkit-animation: cssload-rotate 1150ms linear infinite;
    -moz-animation: cssload-rotate 1150ms linear infinite;
}

.cssload-whirlpool::before {
    content: "";
    margin: -12px 0 0 -12px;
    height: 23px;
    width: 23px;
    animation: cssload-rotate 1150ms linear infinite;
    -o-animation: cssload-rotate 1150ms linear infinite;
    -ms-animation: cssload-rotate 1150ms linear infinite;
    -webkit-animation: cssload-rotate 1150ms linear infinite;
    -moz-animation: cssload-rotate 1150ms linear infinite;
}

.cssload-whirlpool-fullwidth::before {
    content: "";
    margin: -12px 0 0 -12px;
    height: 23px;
    width: 23px;
    animation: cssload-rotate 1150ms linear infinite;
    -o-animation: cssload-rotate 1150ms linear infinite;
    -ms-animation: cssload-rotate 1150ms linear infinite;
    -webkit-animation: cssload-rotate 1150ms linear infinite;
    -moz-animation: cssload-rotate 1150ms linear infinite;
}

.cssload-whirlpool::after {
    content: "";
    margin: -15px 0 0 -15px;
    height: 29px;
    width: 29px;
    animation: cssload-rotate 2300ms linear infinite;
    -o-animation: cssload-rotate 2300ms linear infinite;
    -ms-animation: cssload-rotate 2300ms linear infinite;
    -webkit-animation: cssload-rotate 2300ms linear infinite;
    -moz-animation: cssload-rotate 2300ms linear infinite;
}

.cssload-whirlpool-fullwidth::after {
    content: "";
    margin: -15px 0 0 -15px;
    height: 29px;
    width: 29px;
    animation: cssload-rotate 2300ms linear infinite;
    -o-animation: cssload-rotate 2300ms linear infinite;
    -ms-animation: cssload-rotate 2300ms linear infinite;
    -webkit-animation: cssload-rotate 2300ms linear infinite;
    -moz-animation: cssload-rotate 2300ms linear infinite;
}

@keyframes cssload-rotate {
    100% {
        transform: rotate(360deg);
    }
}

@-o-keyframes cssload-rotate {
    100% {
        -o-transform: rotate(360deg);
    }
}

@-ms-keyframes cssload-rotate {
    100% {
        -ms-transform: rotate(360deg);
    }
}

@-webkit-keyframes cssload-rotate {
    100% {
        -webkit-transform: rotate(360deg);
    }
}

@-moz-keyframes cssload-rotate {
    100% {
        -moz-transform: rotate(360deg);
    }
}
</style>
