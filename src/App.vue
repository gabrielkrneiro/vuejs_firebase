<template>
  <v-app>
    <v-navigation-drawer v-model="sidebar" app>
    </v-navigation-drawer>

    <v-toolbar app>
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon  @click="sidebar = !sidebar"></v-toolbar-side-icon>
      </span>
      <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        appTitle: 'Awesome App',
        sidebar: false
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>