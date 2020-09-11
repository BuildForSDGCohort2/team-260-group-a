<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">
        <img class="w-50" src="./assets/logo.png" alt="Logo" />
      </a>

      <div class="ml-auto">
        <ul class="navbar-nav">
          <li class="nav-item mr-4">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item mr-4">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item mr-4">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
          <li class="nav-item mr-4">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item mr-4">
            <router-link class="nav-link" to="/products">Products</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div>
      <router-view />
    </div>

    <footer class="footer w-100 bg-dark py-3">
      <div class="container text-center">
        <span class="text-white">Online Shop. 2020</span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.nav-item {
  font-weight: 700;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>
