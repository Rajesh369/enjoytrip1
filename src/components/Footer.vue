<template>
  <v-footer color="primary lighten-1" padless>
    <v-row justify="center" no-gutters>
      <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">
        {{ link }}
      </v-btn>
      <v-col class="primary lighten-2 py-4 text-right px-20 white--text" right cols="12">
        {{ new Date().getFullYear() }} — <strong>EnjoyTrip</strong>
      </v-col>



       <v-btn v-for="icon in icon" :key="icon" color="white" text rounded class="my-2">
        {{ icon }}
      </v-btn>


    </v-row>
  </v-footer>
</template>

<script>
  export default {
    icon: () => ({
    }),
  };
</script>