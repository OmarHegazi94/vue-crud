<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand">Vue Crud</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              active-class="active"
              to="/"
              exact
              class="nav-link"
              aria-current="page"
              >Home</router-link
            >
          </li>
          <!-- <li class="nav-item">
            <router-link
              to="/details"
              exact
              active-class="active"
              class="nav-link"
              aria-current="page"
              >Photo Details</router-link
            >
          </li> -->
        </ul>
      </div>
    </div>
  </nav>

  <div class="container py-5">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
nav li .nav-link.router-link-active,
nav li .nav-link.active,
nav li .nav-link.router-link-exact-active {
  background-color: indianred;
  color: #fff !important;
  cursor: pointer;
  border-radius: 3px;
}
</style>
