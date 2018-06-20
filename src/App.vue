<template>
  <v-app>

    <v-navigation-drawer class="hidden-sm-and-up" v-model="sidebar" app>
      <v-list>

        <!-- 
          :to="" replaces in this case <router-link tag="li" to="/foo">
         -->
        <v-list-tile 
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">

          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            {{ item.title }}
          </v-list-tile-content>

        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app>
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon  @click="sidebar = !sidebar"></v-toolbar-side-icon>
      </span>
      <v-toolbar-title>
        <router-link :to="{name : 'Home'}" class="toolbar-title">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- hide in xs screens -->
      <v-toolbar-items class="hidden-xs-only">
        <!-- flat button -->
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-icon light>{{ item.icon }}</v-icon>

        </v-btn>
      </v-toolbar-items>
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
        //appTitle: 'Awesome App',
        sidebar: false,
        menuItems: [
          { title: 'Home', path: {name : 'Home'}, icon: 'home' },
          { title: 'Sign Up', path: {name : 'Signup'}, icon: 'face' },
          { title: 'Sign In', path: {name : 'Signin'}, icon: 'lock_open' }
        ]
      }
    },

    computed : {
      
      appTitle() 
      {
        return this.$store.state.appTitle
      }
    }
  }
</script>

<style lang="scss" scoped>
  .toolbar-title
  {
    cursor:pointer;
    color: inherit;
    text-decoration: none;
  }
</style>