<template>
    <v-container>
        <v-layout row wrap>

            <v-container>
                <v-flex xs12 class="text-xs-center" mt-5>
                    <h1> Sign in </h1>
                </v-flex>

                <v-flex>
                    <v-alert class="error text-xs-center" :value="error">
                        {{ error }}
                    </v-alert>
                </v-flex>

            <v-flex mt-5 xs12 md8 offset-md2>
                <form @submit.prevent="userSignIn()">
                    <v-layout column>
                        <v-flex>
                            <v-text-field
                                name="email"
                                label="Email"
                                type="email"
                                id="email"
                                v-model="email"
                                autocomplete=false
                                :disabled="isLoading"
                                ></v-text-field>

                            <v-text-field
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                v-model="password"
                                autocomplete=false
                                required
                                :disabled="isLoading"></v-text-field>
                        </v-flex>

                        <v-flex xs12 class="text-xs-center" mt-4>
                            <v-btn class="loading" type="button" v-if="isLoading"> Loading... </v-btn>
                            <v-btn class="primary" type="submit" v-else> Send </v-btn>
                        </v-flex>

                    </v-layout>
                </form>
            </v-flex>
            </v-container>
            

        </v-layout>
    </v-container>
</template>



<script>
    export default {

        data() {

            return {

                email       : "",
                password    : "",
            }
        },

        methods : {

            userSignIn() {
                
                this.$store.dispatch('userSignIn', { email : this.email, password : this.password });
                return; 

            }

        },

        computed : {

            error() {

                return this.$store.state.error;
            },

            isLoading() {

                return this.$store.state.loading;
            },

            // checkEmail() {
            //     let errorMessage = "e-mail is required";
            //     if( !this.email ) {
                    
            //         this.$store.dispatch('setError', { message : errorMessage } );
            //         return errorMessage;
            //     }

            //     this.$store.dispatch('setError', {message : null});
            //     return true;
            // }
        },

    }
</script>

<style lang="scss" scoped>
    @import './Signin';
</style>
