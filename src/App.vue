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

        <v-list-tile @click="userSignOut()" v-if="isAuthenticated">
          <v-list-tile-action >  
            <v-icon> exit_to_app </v-icon> 
          </v-list-tile-action>
          
          <v-list-tile-content> Sign Out </v-list-tile-content>
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

      <!-- 
        hide in xs screens  
        flat button will being displayed in every screen than mobile screens
        -->
      <v-toolbar-items class="hidden-xs-only">

        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-icon light>{{ item.icon }}</v-icon>
        </v-btn>

        <v-btn 
          flat 
          @click="userSignOut()"
          v-if="isAuthenticated">
            <v-icon left> exit_to_app </v-icon>
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
        
      }
    },

    computed : {
      
      appTitle() {

        return this.$store.state.appTitle
      },

      isAuthenticated() {

        return this.$store.getters.isAuthenticated;
      },

      menuItems() {

        if( this.isAuthenticated ) {
          
          return [
            { 
              id : 'home',    
              title: 'Home',      
              path: { name : 'Home' },  
              icon: 'home',       
            },
          ]
        }
        else
        {
          return [
            { 
              id : 'singup',  
              title: 'Sign Up',   
              path: { name : 'Signup' },  
              icon: 'face',       
            },
            { 
              id : 'signin',  
              title: 'Sign In',   
              path: { name : 'Signin' },  
              icon: 'lock_open',  
            },
          ]
        }
      }
    
    },

    methods : {

      userSignOut() {
        
        this.$store.dispatch('userSignOut');
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