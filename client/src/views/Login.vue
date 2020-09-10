<template>
  <div class="d-flex justify-content-center">
    <div class="col-6">
      <h1>Login into your Account</h1>
      <div v-if="this.message" class="alert alert-success" role="alert">
        {{ this.message }}
      </div>
      <form>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" v-model="user.email" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" v-model="user.password" />
        </div>
        <button @click.prevent="loginUser()" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      message: "",
      userJWT: ""
    };
  },
  methods: {
    loginUser() {
      axios
        .post(
          "https://cors-anywhere.herokuapp.com/https://team-260-group-a.herokuapp.com/api/users/login",
          this.user
        )
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            this.message = "You have successfully logged in.";
            this.userJWT = res.data;
          }
          // this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
};
</script>
