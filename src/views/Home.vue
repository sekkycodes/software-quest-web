<template>
  <main id="home-page">
    <section class="header-box">
      <h2>Welcome to Software Quest!</h2>
      <div>The place to have some software adventures</div>
    </section>
    <GithubConnection/>
  </main>
</template>

<script>
import GithubConnection from "@/components/GithubConnection";

export default {
  components: {GithubConnection}
}
</script>

<style>
.header-box {
  margin-top: 2em;
  width: 100%;
  text-align: center;
}
</style>
