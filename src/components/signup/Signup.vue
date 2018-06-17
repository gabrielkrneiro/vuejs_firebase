<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 class="text-xs-center" mt-5>
                <h1>Sign up</h1>
            </v-flex>

            <v-flex xs12 sm6 offset-sm3 mt-3>
                <form>
                    <v-layout column>
                        <v-flex>
                            <v-text-field
                                name="email"
                                label="email"
                                id="email"
                                type="email"
                                autocomplete=false
                                required></v-text-field>

                            <v-text-field
                                name="password"
                                label="password"
                                id="password"
                                type="password"
                                autocomplete=false
                                required></v-text-field>

                            <v-text-field
                                name="confirmPassword"
                                label="Confirm Password"
                                id="confirmPassword"
                                type="password"
                                autocomplete=false
                                required></v-text-field>
                        </v-flex>

                        <v-flex class="text-xs-center" mt-3>
                            <v-btn class="primary">Send</v-btn>
                        </v-flex>
                    </v-layout>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    @import './Signup.scss';
</style>

