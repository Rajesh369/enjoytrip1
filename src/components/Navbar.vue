<template>
	<div>
		<v-app-bar app>
			<v-app-bar-nav-icon class="d-flex d-sm-none blue--text" @click="drawer = !drawer"></v-app-bar-nav-icon>

			<v-app-bar-title class="text-center">
				<v-btn text rounded color="blue accent-2--text mx-1" to="/">
					<h1>Enjoy Trip</h1>
				</v-btn>
			</v-app-bar-title>
			<v-spacer></v-spacer>
			
			<v-btn rounded @click="[logForm = true, regForm = false]" class="d-none d-sm-flex" text color="blue accent-2--text mx-1">
				<span>Login</span>
			</v-btn>
			<v-btn rounded class="d-none d-sm-flex" text color="blue accent-2--text mx-1">
				<span>Cart</span>
			</v-btn>

			<v-btn rounded class="d-none d-sm-flex" text color="blue accent-2--text mx-1">
				<span>my wishlist</span>
			</v-btn>
			

			<v-btn rounded class="d-none d-sm-flex" text color="blue accent-2--text mx-1">
				<span>Account</span>
			</v-btn>
		
		</v-app-bar>   


		
		<v-dialog v-model="logForm" max-width="500px">
          <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat >
                	<v-toolbar-title>
                		<h1 class="display-1 white--text">Login form</h1>
                	</v-toolbar-title>
              	</v-toolbar>
              	<v-card-text>
                	<v-form ref="formLogin" v-model="valid">
                		<v-text-field v-model="email" :rules="emailRules" label="E-mail" prepend-icon="mdi-email" required />
                    	<v-text-field :rules="passwordRules" label="Enter Password" v-model="password" prepend-icon="mdi-lock" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword" :type="showPassword ? 'text' : 'password'" required />
           			  </v-form>         
         		    </v-card-text>
            	  <v-card-actions class="d-none d-sm-flex">
                  <v-btn color="primary" :disabled="!login" @click="validateLogin" :loading="loginLoad">Login</v-btn>
                	<div class="flex-grow-1" justify="center" align="center"><v-btn text color="red darken-1--text">Forget Password?</v-btn></div>
                  <v-btn color="success" @click="[logForm = false, regForm = true]">Register</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
  
		<v-dialog v-model="regForm" max-width="500px">
          <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat >
                	<v-toolbar-title>
                		<h1 class="display-1 white--text">Registration form</h1>
                	</v-toolbar-title>
              	</v-toolbar>
              	<v-card-text>
                	<v-form ref="formRegister" v-model="valid">
						<v-text-field v-model="name" :rules="nameRules" label="Full Name" prepend-icon="mdi-user" required />
                		<v-text-field v-model="email" :rules="emailRules" label="E-mail" prepend-icon="mdi-email" required />
                    	<v-text-field :rules="passwordRules" label="Enter Password" v-model="epassword" prepend-icon="mdi-lock" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword" :type="showPassword ? 'text' : 'password'" required />
						<v-text-field :rules="[passwordRules, passwordConfirmRule]" label="Confirm Password" v-model="cpassword" prepend-icon="mdi-lock" @click:append="showPassword = !showPassword" :type="showPassword ? 'text' : 'password'" required />
           			  </v-form>         
         		    </v-card-text>
            	  <v-card-actions class="d-none d-sm-flex">
                  <v-btn color="primary" :disabled="!register" @click="validateRegister" :loading="regload">Register</v-btn>
                	<div class="flex-grow-1"></div>
                  <v-btn color="success" @click="[logForm = true, regForm = false]">Login</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

		<div class="text-center">
			<v-snackbar v-model="snackbarReg" top light :timeout="5000">
				{{text}}
				<v-btn color="pink" text @click="snackbarReg = false">Close</v-btn>
			</v-snackbar>
		</div>


  		<v-card>
   			<v-navigation-drawer nav dense app class="blue accent-2" v-model="drawer">
   				<v-list-item>
        			<v-list-item-avatar>
          				<img src="@/assets/logo.png" alt="razer" />
        			</v-list-item-avatar>

        			<v-list-item-content>
          				<v-list-item-title class="white--text">Rajesh Singha</v-list-item-title>
        			</v-list-item-content>
      			</v-list-item>

      			<v-divider></v-divider>

      			<v-list dense>
        			<v-list-item v-for="link in links" :key="link.text" link :to="link.route">
          				<v-list-item-icon>
            				<v-icon small class="white--text">{{ link.icon }}</v-icon>
          				</v-list-item-icon>

          				<v-list-item-content>
            				<v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          				</v-list-item-content>
        			</v-list-item>
      			</v-list>
      			<template v-slot:append>
          			<div><v-btn block class="blue accent-2" color="white--text">Logout</v-btn></div>
      			</template>
    	    </v-navigation-drawer>
  		</v-card>
	</div>
</template>


<script>
/*import db from '@/db'
import firebase from 'firebase'*/

export default {
	data () {
		return {
			drawer: false,
			logForm: false,
			regForm: false,
			register: true,
			regload: false,
			loginLoad: false,
			snackbarReg: false,
			text: 'user registered successfully!',
			links: [
				{ icon: 'fas fa-home', text: 'Home', route: '/' },
				{ icon: 'fas fa-heart', text: 'My Wishlist', route: '/wishlist' },
				{ icon: 'fas fa-shopping-bag', text: 'My Orders', route: '/order' },
				{ icon: 'fas fa-cart-plus', text: 'My Cart', route: '/cart' },
				{ icon: 'fas fa-user', text: 'My Account', route: '/login' },
			],
			valid: false,
			showPassword: false,
			name: '',
			nameRules: [
				v => !!v || 'Name is required',
			],
			email: '',
			emailRules: [
				v => !!v || 'Email is reuired',
				v => /.+@.+\..+/.test(v) || 'Email must be valid',
			],
			epassword: '',
			cpassword: '',
			passwordRules: [
				v => !!v || 'Password is required',
				v => (v.length >= 6) || 'Password should be at least 6 characters',
			],
			login: true,
			password: '',
		}
	},
	computed: {
		passwordConfirmRule() {
			return () => (this.epassword === this.cpassword) || 'password must match'
		},
	},
	methods: {
		validateRegister () {
			/*this.regload = true
			firebase.auth().createUserWithEmailAndPassword(this.email, this.epassword).then( user => {
				console.log('jaaadoooooooo...')
				const data = {
					name: this.name,
					email: this.email,
					password: this.epassword
				}

				db.collection('users').add(data).then( () => {
					console.log('added to firebase!')
					this.$refs.formRegister.reset()
					this.regload = false
					this.snackbarReg = true
					this.regForm = false
				}, err => {
					alert(err.message)
				})
			})*/
			console.log('registered!')
			this.snackbarReg = true
		},
		validateLogin () {
			console.log('Logged in successfully')
		},
	},
};
</script>

<style type="text/css">
	h1 {
		color: #3498db;
	}
</style>