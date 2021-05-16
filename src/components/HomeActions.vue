<template>
  <section class="home-actions-container container">
    <div class="row">
      <div class="col-md-4 home-action">
        <img src="../assets/no-image.jpg" alt="no image"/>
        <p>Start your adventure</p>
      </div>
      <div class="col-md-4 home-action">
        <img src="https://icon-library.com/images/placeholder-image-icon/placeholder-image-icon-3.jpg" alt="no image"/>
        <p>Join a group</p>
      </div>
      <div class="col-md-4 home-action">
        <img src="https://icon-library.com/images/placeholder-image-icon/placeholder-image-icon-3.jpg" alt="no image"/>
        <p>
          <router-link :to="{ name: 'NewQuest' }">Open a new quest</router-link>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeActions"
}
</script>

<style>
.home-actions-container {
  margin-top: 2em;
  margin-bottom: 2em;
}

.home-action {
  padding: 1em;
  border: 2px solid gray;
  border-radius: 15px;
  text-align: center;
}

.home-action > img {
  width: 50px;
}

</style>
