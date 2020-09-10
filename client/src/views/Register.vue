<template>
  <div class="d-flex justify-content-center">
    <div class="col-6">
      <h1>Register an Account</h1>
      <div v-if="this.message" class="alert alert-success" role="alert">
        {{ this.message }}
      </div>
      <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" v-model="user.name" />
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" v-model="user.email" />
          <small id="emailHelp" class="form-text text-muted"
            >We'll never share your email with anyone else.</small
          >
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" v-model="user.password" />
        </div>
        <button @click.prevent="registerUser()" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "Register",
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: ""
      },
      message: ""
    };
  },
  methods: {
    registerUser() {
      axios
        .post(
          "https://cors-anywhere.herokuapp.com/https://team-260-group-a.herokuapp.com/api/users/register",
          this.user
        )
        .then((res) => {
          if (res.status === 200) {
            this.message = "You have been registered successfully.";
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
