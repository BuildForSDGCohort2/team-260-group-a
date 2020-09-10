<template>
  <div class="d-flex justify-content-center">
    <div class="col-6">
      <h1 class="text-center">Add a Product</h1>
      <div v-if="this.message" class="alert alert-success" role="alert">
        {{ this.message }}
      </div>
      <form>
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control" v-model="product.title" />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <input
            type="text"
            class="form-control"
            v-model="product.description"
          />
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <input type="text" class="form-control" v-model="product.price" />
        </div>
        <div class="form-group">
          <label for="imageUrl">Image URL</label>
          <input type="text" class="form-control" v-model="product.imageUrl" />
        </div>
        <button @click.prevent="addProduct()" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "AddProduct",
  data() {
    return {
      product: {
        title: "",
        description: "",
        price: "",
        imageUrl: ""
      },
      message: ""
    };
  },
  methods: {
    addProduct() {
      axios
        .post(
          "https://cors-anywhere.herokuapp.com/https://team-260-group-a.herokuapp.com/api/products",
          this.product
        )
        .then((res) => {
          if (res.status === 200) {
            this.product.title = "";
            this.product.description = "";
            this.product.price = "";
            this.product.imageUrl = "";
            this.message = "Product has been added successfully.";
          }
        })
        .catch((error) => console.log(error));
    }
  }
};
</script>
