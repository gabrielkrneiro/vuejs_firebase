<template>
    <v-container>
        <v-layout row wrap>
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
                                required></v-text-field>

                            <v-text-field
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                v-model="password"
                                autocomplete=false
                                required></v-text-field>
                        </v-flex>

                        <v-flex xs12 class="text-xs-center" mt-4>
                            <v-btn class="primary" type="submit"> Send </v-btn>
                        </v-flex>
                    </v-layout>
                </form>
            </v-flex>

            

        </v-layout>
    </v-container>
</template>

<script>
    export default {

        data() {

            return {

                email : "",
                password : ""
            }
        },

        methods : {

            userSignIn() {
                this.$store.dispatch('userSignIn',{email : this.email, password : this.password});
            }

        },

        computed : {

            error() {

                return this.$store.state.error;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import './Signin';
</style>
