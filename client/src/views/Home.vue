<template>
  <div>
    <div class="jumbotron d-flex flex-column justify-content-center">
      <div class="bg-text">
        <h1 class="display-3 align-self-center">Welcome To Our Online Shop</h1>
        <p class="lead align-self-center">
          Have a look at our product for sale and if you do not find what you
          are looking for, drop us a mail.
        </p>
        <hr class="my-4 bg-white" />
        <p class="align-self-center">WE SELL ANYTHING</p>
        <a
          class="btn btn-secondary btn-lg align-self-center"
          href="#"
          role="button"
          >CONTACT US</a
        >
      </div>
    </div>

    <div class="text-center py-5">
      <h2>Featured Products</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, magni
        distinctio sed unde pariatur nam suscipit consequuntur eius maxime quae!
        Libero maiores eius deserunt corporis!
      </p>
    </div>

    <div class="container pb-5 mb-5">
      <div class="card-deck">
        <div class="card">
          <img src="../assets/pic1.jpg" class="card-img-top" alt="picture 1" />
          <div class="card-body">
            <h5 class="card-title">24 Backed Muffins</h5>
            <p class="card-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium animi, repellat laudantium odio, repudiandae mollitia
              omnis possimus ab ut minus nesciunt porro repellendus et, facilis
              debitis. Maiores minima necessitatibus dolores at reprehenderit.
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">R 49.99</small>
          </div>
        </div>
        <div class="card">
          <img src="../assets/pic2.jpg" class="card-img-top" alt="picture 2" />
          <div class="card-body">
            <h5 class="card-title">6 Backed Muffins</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              corporis ut, ipsa sapiente repellat, eos voluptatem temporibus
              ullam molestiae ratione exercitationem!
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">R19.99</small>
          </div>
        </div>
        <div class="card">
          <img src="../assets/pic3.jpg" class="card-img-top" alt="picture 3" />
          <div class="card-body">
            <h5 class="card-title">6 Backed Cookies</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              perferendis dolores repudiandae reiciendis officiis, eius
              cupiditate. Possimus placeat maiores ut sunt laboriosam, cumque
              omnis odio saepe, explicabo animi, consectetur distinctio!
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">R21.99</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  mounted() {}
};
</script>

<style scoped>
.jumbotron {
  background-image: url("../assets/shopbackground.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 60vh;
}

.bg-text {
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  z-index: 2;
  width: 100%;
  text-align: center;
  padding: 60px;
}
</style>
