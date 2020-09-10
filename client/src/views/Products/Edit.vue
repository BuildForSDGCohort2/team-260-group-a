<template>
  <div class="d-flex justify-content-center">
    <div class="col-6">
      <h1 class="text-center">Edit the Product</h1>
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
        <button @click.prevent="updateProduct()" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "EditProduct",
  data() {
    return {
      product: {
        title: "",
        description: "",
        price: "",
        imageUrl: ""
      },
      message: "",
      productId: ""
    };
  },
  methods: {
    updateProduct() {
      axios
        .put(
          `https://cors-anywhere.herokuapp.com/https://team-260-group-a.herokuapp.com/api/products/${this.productId}`,
          this.product
        )
        .then((res) => {
          this.message = res.data.message;
        })
        .catch((error) => console.log(error));
    }
  },
  mounted() {
    this.productId = this.$route.params.id;
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://team-260-group-a.herokuapp.com/api/products/${this.productId}`
      )
      .then((res) => {
        this.product.title = res.data.title;
        this.product.description = res.data.description;
        this.product.price = res.data.price;
        this.product.imageUrl = res.data.imageUrl;
      })
      .catch((error) => console.log(error));
  }
};
</script>
