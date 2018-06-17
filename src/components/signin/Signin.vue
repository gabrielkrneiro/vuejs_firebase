<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 class="text-xs-center" mt-5>
                <h1> Sign in </h1>
            </v-flex>

            <v-flex mt-5 xs12 md8 offset-md2>
                <form>
                    <v-layout column>
                        <v-flex>
                            <v-text-field
                                name="email"
                                label="Email"
                                type="email"
                                id="email"
                                autocomplete=false
                                required></v-text-field>

                            <v-text-field
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autocomplete=false
                                required></v-text-field>
                        </v-flex>
                    </v-layout>
                </form>
            </v-flex>

            <v-flex xs12 class="text-xs-center" mt-4>
                <v-btn class="primary" type="submit"> Send </v-btn>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    @import './Signin';
</style>
