<template>
  <v-app>
    <v-toolbar app absolute>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <span>YANYI</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/">Home</v-btn>
        <v-btn flat to="/about">About</v-btn>
        <v-btn flat to="/blog">Blog</v-btn>
      </v-toolbar-items>
      <div class="hidden-sm-and-down">
        <v-btn round color="primary" @click.native="signUpDialog = true">Sign up</v-btn>
        <v-btn round color="primary" to="/login">Sign in</v-btn>
      </div>
    </v-toolbar>

    <v-layout row justify-center>
      <v-dialog v-model="signUpDialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">Sign up</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field v-model="name" :rules="nameRules" :counter="10" label="Name" required></v-text-field>
              <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
              <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Item" required></v-select>
              <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?" required></v-checkbox>

              <v-btn :disabled="!valid" @click="submit">
                submit
              </v-btn>
              <v-btn @click="clear">clear</v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="signUpDialog = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click.native="signUpDialog = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>

    <!-- <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile>

        <v-list-group prepend-icon="account_circle" value="true">
          <v-list-tile slot="activator">
            <v-list-tile-title>Users</v-list-tile-title>
          </v-list-tile>

          <v-list-group no-action sub-group value="true">
            <v-list-tile slot="activator">
              <v-list-tile-title>Admin</v-list-tile-title>
            </v-list-tile>

            <v-list-tile v-for="(admin, i) in admins" :key="i" @click="">
              <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="admin[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <v-list-group sub-group no-action>
            <v-list-tile slot="activator">
              <v-list-tile-title>Actions</v-list-tile-title>
            </v-list-tile>

            <v-list-tile v-for="(crud, i) in cruds" :key="i" @click="">
              <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="crud[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-navigation-drawer> -->
    <div>
      <LeftSection  v-bind:drawer="drawer"/>
    </div>
    <v-content>
      <router-view></router-view>
      <!-- <HelloWorld /> -->
    </v-content>

    <v-bottom-nav  :value="true" absolute color="transparent">
      <v-btn color="teal" flat value="recent">
        <span>Recent</span>
        <v-icon>history</v-icon>
      </v-btn>

      <v-btn color="teal" flat value="favorites">
        <span>Favorites</span>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn color="teal" flat value="nearby">
        <span>Nearby</span>
        <v-icon>place</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import LeftSection from './components/LeftSection';

import axios from 'axios'
export default {
  name: 'App',
  components: {
    HelloWorld,
    LeftSection
  },
  data () {
    return {
      drawer: false,
      signUpDialog: false,
      // admins: [['Management', 'people_outline'], ['Settings', 'settings']],
      // cruds: [
      //   ['Create', 'add'],
      //   ['Read', 'insert_drive_file'],
      //   ['Update', 'update'],
      //   ['Delete', 'delete']
      // ],

      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
      ],
      checkbox: false
    };
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post('/api/submit', {
          name: this.name,
          email: this.email,
          select: this.select,
          checkbox: this.checkbox
        })
      }
    },
    clear () {
      this.$refs.form.reset()
    },
    getDrawer(drawer){
      console.log(drawer);
      
      this.drawer = drawer;
    }
  }
};
</script>
