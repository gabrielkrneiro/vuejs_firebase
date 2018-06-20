<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 class="text-xs-center" mt-5>
                <h1>Sign up</h1>
            </v-flex>

            <v-flex xs12 sm6 offset-sm3 mt-3>
                <form @submit.prevent="userSignup()">
                    <v-layout column>

                        <v-flex>
                            <v-alert type="error" :value="error" dismissible >
                                {{error}}
                            </v-alert>
                        </v-flex>

                        <v-flex>
                            <v-text-field
                                name="email"
                                label="email"
                                id="email"
                                type="email"
                                autocomplete=false
                                v-model="user.email"
                                required></v-text-field>

                            <v-text-field
                                name="password"
                                label="password"
                                id="password"
                                type="password"
                                autocomplete=false
                                v-model="user.password"
                                required></v-text-field>

                            <!-- rules inline is configured this way, if true nothing happens,
                            if something than true, v-text-field display error message -->
                            <v-text-field
                                name="confirmPassword"
                                label="Confirm Password"
                                id="confirmPassword"
                                type="password"
                                autocomplete=false
                                v-model="passwordConfirm"
                                :rules="[comparePassword]"
                                required></v-text-field>
                        </v-flex>

                        <v-flex class="text-xs-center" mt-3>

                            <!-- Because response from Firebase will take some time we just disable 
                            submit button (to prevent double-submit) until the request is in progress. -->
                            <v-btn class="primary" type="submit" :disabled="loading">Send</v-btn>
                        </v-flex>
                    </v-layout>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import User from '@/models/User.js';

    export default {

        data() {

            return {

                user            : new User(),
                passwordConfirm : '',
                showAlert           : false
            }
        },

        computed : {

            comparePassword() {

                return this.passwordConfirm === this.user.password ? true : "Password don`t match";
            },

            // will alert firebase error if returned
            error() {

                return this.$store.state.error; 
            },

            loading() {

                return this.$store.state.loading;
            },

        },

        methods : {

            userSignup() {

                if(this.comparePassword !== true) {

                    return;
                }

                this.$store.dispatch('userSignup',this.user);
                console.log(this.$store.state.error);
            }
        },

    }
</script>

<style lang="scss" scoped>
    @import './Signup.scss';
</style>

