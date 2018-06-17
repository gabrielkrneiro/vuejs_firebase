<template>
    <v-container fluid>
        <v-layout wrap>
            <v-flex xs12 class="text-xs-center" mt-5>
                <h1>Welcome to Awesome App</h1>
            </v-flex>

            <v-flex xs12 sm6 offset-sm3 mt-3>
                <blockquote class="blockquote text-xs-center">
                    It`s a basic Single Page Application <br>
                    with Google Firebase Authentication
                </blockquote>
            </v-flex>

            <v-flex xs12 sm6 offset-sm3 class="text-xs-center" mt-5>
                <v-btn color="primary" :to="{name : 'Signup'}">
                    Sign Up
                </v-btn>
                <v-btn to="{name : 'Signin'}"> 
                    Sign In 
                </v-btn>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
    export default {

    }
</script>

<style lang="sass" scoped>
    @import './Landing';
</style>