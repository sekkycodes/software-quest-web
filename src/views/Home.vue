<template>
  <main id="home-page">
    <section class="header-box">
      <h2>Welcome to Software Quest!</h2>
      <div>The place to have some software adventures</div>
    </section>
    <GithubConnection/>
    <HomeActions/>
  </main>
</template>

<script>
import GithubConnection from "@/components/GithubConnection";
import HomeActions from "@/components/HomeActions";

export default {
  components: {GithubConnection, HomeActions}
}
</script>

<style>
.header-box {
  margin: 2em;
  width: 100%;
  text-align: center;
}
</style>
