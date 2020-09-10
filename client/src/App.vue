<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">
        <img class="w-50" src="./assets/logo.png" alt="Logo" />
      </a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
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
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
