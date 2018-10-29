<template>
  <div>
    <v-layout row>
      <v-flex sm3>
        <v-card>
          <v-list>
            <li v-for="item in category" :key="item.title">
              <v-list-tile avatar :to="'blog/'+item.title.toLowerCase()" >
              <v-chip color="primary" text-color="white">
                <v-avatar class="teal">12</v-avatar>
                  {{item.title}}
              </v-chip>
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
export default {
  data () {
    return {
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
  },
  methods: {
    function () {  }
  }
};
</script>
