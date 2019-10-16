<template>
  <div class="mx-8">
  	<v-content app>
  		<v-card max-width="600" class="mx-auto" height="60">
    		<v-btn text depressed width="150" value="item.name" height="60" v-for="(item, i) in items" :key="i">
    			<v-icon >{{ item.icon }}</v-icon>
    			<span>{{ item.name }}</span>
    		</v-btn>
  		</v-card>


      
  		<v-card max-width="1200" class="mx-auto mb-8" height="200">
  			<v-col cols="12" sm="6" md="4">
          <v-radio-group v-model="transition" hide-details>
            <v-radio value="slide-x-transition" label="one way"></v-radio>
            <v-radio value="slide-x-reverse-transition" label="round way"></v-radio>
          </v-radio-group>
        </v-col>
             <v-container fluid>
            <v-row>
              <v-col cols="3" sm="2" class="d-flex align-center">
              <v-select
                 v-model="state"
            :items="Fdirections"
            label="From"
            class="">
            </v-select>
        </v-col>


        <v-col cols="3" sm="2" class="d-flex align-center">
              <v-select
                 v-model="state"
            :items="Tdirections"
            label="To"
            class="">
            </v-select>
        </v-col>





        <v-col cols="3" lg="2">
          <v-menu
            ref="menu1"
            v-model="menu1"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            full-width
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="dateFormatted"
                label="Departure"
              
                persistent-hint
                prepend-icon=""
                @blur="date = parseDate(dateFormatted)"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
          </v-menu>
        </v-col>



        <v-col cols="3" lg="2">
          <v-menu
            ref="menu1"
            v-model="menu1"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            full-width
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="dateFormatted"
                label="return"
                
                persistent-hint
                prepend-icon=""
                @blur="date = parseDate(dateFormatted)"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
          </v-menu>
        </v-col>
        

         <v-col cols="3" sm="2" class="d-flex align-center">
              <v-select
                 v-model="state"
            :items="traveldirections"
            label="Travellers"
            class="">
            </v-select>
        </v-col>

        <div class="text-center my-6 mx-2">
    <v-btn rounded color="primary" dark>Search</v-btn>
  </div>
        
        
            </v-row>
            </v-container>
  			
  		</v-card>
    
  	</v-content>
    <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">{{ slide }} Slide</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>

    <h1> POPULAR PLACE</h1>
    
    <v-row class="mx-auto">
      <div 
      v-for="project in projects"
      :key="project.title"
      class="ma-3 "
      >
        <v-card
        max-width="300"
        >
          <v-img
            src="../assets/760301.jpg" :aspect-ratio="16/10">
          </v-img>
          <v-card-title>
            <div class="display-1 mb-2">{{ project.name }}</div>
            <div class="title font-weight-regular grey--text">{{ project.title }}</div>
          </v-card-title>
          <v-row
            class="px-4 grey--text"
            align="center"
          >
            <v-avatar
              size="24"
              class="mr-4"
            >
              <v-img :src="project.ico" contain></v-img>
            </v-avatar>

            <span>{{ project.temp }}</span>
          </v-row>
        </v-card>
      </div>
    </v-row>
      <h1>Ratings</h1>

    <v-row class="mx-auto"> 
        <div>
          <v-card
          max-width="300"
          max-height="300"
            class="mx-auto elevation-20"
            color=""
            dark
          
            >
            <v-img class="shrink ma-2" contain height="170px" src="@/assets/Shillong.jpg" style="flex-basis: 125px"></v-img>
            <v-row justify="space-between">
              <v-col cols="8">
                  <v-card-title primary-title>
                    <div>
                       <div class="headline">Shillong</div>
                       
                    </div>
                  </v-card-title>
              </v-col>
                
              </v-row>
              <v-divider dark></v-divider>
              <v-card-actions class="pa-4">
                Rate this album
                    <div class="flex-grow-1"></div>
                      <span class="grey--text text--lighten-2 caption mr-2">
                        ({{ rating }})
                      </span>
                    <v-rating
                      v-model="rating"
                      background-color="white"
                      color="yellow accent-4"
                      dense
                      half-increments
                      hover
                      size="18"
                    ></v-rating>
              </v-card-actions>
            </v-card>
          </div>
      </v-row>

</div>
</template>

<script>


export default { 
  data () {
  	return {
      rating: 4.3,
  		colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
       data1: vm => ({
    date1: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
    menu2: false,
  }),

  computed: {
    computedDateFormatted () {
      return this.formatDate(this.date1)
    },
  },

  watch: {
    date1 (val) {
      this.dateFormatted = this.formatDate(this.date1)
    },
  },
    
         

  

         Fdirections: ['t', 'b', 'l', 'r', 's', 'e', 'x', 'y', 'a'],
         Tdirections: ['t', 'b', 'l', 'r', 's', 'e', 'x', 'y', 'a'],
         traveldirections: ['1', '2', '3', '4'],
  		
  		items: [
  			{ name:'Flight', icon: 'fas fa-helicopter'}, 
  			{ name:'Hotels', icon: 'fas-hotel'}, 
  			{ name:'Holidays', icon: 'fas fa-sun'}, 
  			{ name:'Events', icon: 'fas fa-calendar-week'}, 
      ],
      
      projects: [
        { img:'../assets/760301.jpg' , name:'Tajmahal-Agara', title:'Monday, 12:30 PM, Mostly Sunny', ico:'https://cdn.vuetifyjs.com/images/weather/part-cloud-48px.png', temp:'81° / 62°',},
        { img:'../assets/760301.jpg' , name:'Tajmahal-Agara', title:'Monday, 12:30 PM, Mostly Sunny', ico:'https://cdn.vuetifyjs.com/images/weather/part-cloud-48px.png', temp:'81° / 62°',},
        { img:'../assets/760301.jpg' , name:'Tajmahal-Agara', title:'Monday, 12:30 PM, Mostly Sunny', ico:'https://cdn.vuetifyjs.com/images/weather/part-cloud-48px.png', temp:'81° / 62°',},
        { img:'../assets/760301.jpg' , name:'Tajmahal-Agara', title:'Monday, 12:30 PM, Mostly Sunny', ico:'https://cdn.vuetifyjs.com/images/weather/part-cloud-48px.png', temp:'81° / 62°',},
      ],
  	}
  },
  methods: {
      alarm () {
        alert('Turning on alarm...')
      },
      blinds () {
        alert('Toggling Blinds...')
      },
      lights () {
        alert('Toggling lights...')
      },



      formatDate (date1) {
      if (!date) return null

      const [year, month, day] = date1.split('-')
      return `${month}/${day}/${year}`
    },
  }
};
</script>
