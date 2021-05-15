<template>
  <div id="app-container">
    <header>
      <nav>
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'Quests' }">Quests</router-link>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>
