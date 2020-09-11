<template>
  <div class="container">
    <h1 class="text-center my-5">Our Products</h1>
    <div v-if="this.message" class="alert alert-success" role="alert">{{ this.message }}</div>

    <div>
      <a href="/product/add" class="btn btn-dark mb-4">Add Product</a>
    </div>

    <div class="row row-cols-4">
      <div class="col mb-4" v-for="product in products" :key="product.id">
        <div class="card">
          <img :src="product.imageUrl" class="card-img-top" :alt="product.title" />
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">{{ product.description }}</p>
          </div>
          <div class="card-footer">
            <a class="btn btn-secondary btn-sm mr-4" :href="'/product/' + product._id">EDIT</a>
            <a class="btn btn-danger btn-sm" @click="deleteProduct(product._id)">DELETE</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "Products",
  data() {
    return {
      products: [],
      message: "",
    };
  },
  methods: {
    getProducts() {
      axios
        .get(
          "https://cors-anywhere.herokuapp.com/https://team-260-group-a.herokuapp.com/api/products"
        )
        .then((res) => {
          this.products = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteProduct(id) {
      axios
        .delete(
          `https://cors-anywhere.herokuapp.com/https://team-260-group-a.herokuapp.com/api/products/${id}`
        )
        .then((res) => {
          this.getProducts();
          this.message = res.data.message;
        })
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
