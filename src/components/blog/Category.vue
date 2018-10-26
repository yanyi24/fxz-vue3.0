<template>
  <div>
    <v-layout row>
      <v-flex sm-4>
        <v-card>
          <v-list>
            <li v-for="item in category" :key="item.title">
              <v-list-tile avatar :to="/parentFileName/">
                {{item.title}}
              </v-list-tile>
              <v-divider></v-divider>
            </li>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </div>

</template>
<script>
import { getParentFileName } from '../../plugins/self.js';
export default {
  data () {
    return {
      parentFileName: getParentFileName(),
      category: [
        {
          title: 'Javascript'
        },
        {
          title: 'HTML'
        },
        {
          title: 'CSS'
        }
      ]
    };
  }
};
</script>
