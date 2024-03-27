<template>
    <v-app>
        <v-app-bar class="px-3" density="compact" flat>
            <v-avatar class="hidden-md-and-up" color="grey-darken-1" size="32"></v-avatar>

            <v-spacer></v-spacer>

            <v-tabs color="grey-darken-2" centered>
                <v-tab v-for="link in headerLinks" :key="link.name" :text="link.name" @click="testHanlder"></v-tab>
            </v-tabs>
            <v-spacer></v-spacer>

            <v-avatar class="hidden-sm-and-down" color="grey-darken-1" size="32"></v-avatar>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer">
            <v-sheet class="pa-4" color="grey-lighten-4">
                <v-avatar class="mb-4" color="grey-darken-1" size="64"></v-avatar>

                <div>test@google.com</div>
            </v-sheet>

            <v-divider></v-divider>

            <v-list>
                <v-list-item v-for="[icon, text] in links" :key="icon" :prepend-icon="icon" :title="text"
                    link></v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main class="bg-grey-lighten-3">
            <v-container>
                <v-row>
                    <v-col cols="12" md="2">
                        <v-sheet min-height="268" rounded="lg">
                            <!--  -->
                        </v-sheet>
                    </v-col>

                    <v-col cols="12" md="8">
                        <v-card>
                            <v-list lines="two">
                                <v-list-subheader title="Today"></v-list-subheader>

                                <div v-for="(item, index) in texts" :key="item.sort">
                                    <v-list-item>
                                        <template v-slot:prepend>
                                            <v-avatar color="grey-darken-1"></v-avatar>

                                        </template>
                                        {{ item.contents }}

                                    </v-list-item>
                                    <v-divider v-if="index !== 6" :key="`divider-${index}`" inset></v-divider>

                                </div>
                            </v-list>
                        </v-card>
                    </v-col>

                    <v-col cols="12" md="2">
                        <v-sheet min-height="268" rounded="lg">
                            <v-slide-group show-arrows>
                                <v-slide-group-item v-for="n in 5" :key="n">
                                    <v-sheet class="ma-3" color="grey-lighten-1" height="200" width="250"
                                        rounded></v-sheet>
                                </v-slide-group-item>
                            </v-slide-group>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
            <v-btn icon="mdi-account" size="x-middle" class="floating"> pop </v-btn>
        </v-main>
    </v-app>
</template>

<script setup>
    import { ref } from "vue"

    const headerLinks = [
        {
            name: 'Main',
            path: '/main'
        }, {
            name: 'MainLanding',
            path: '/mainLanding'
        }, {
            name: 'Front',
            path: '/front'
        }, {
            name: 'Game',
            path: '/game'
        }, {
            name: 'Login',
            path: '/login'
        }]
    const links = [
        ['mdi-inbox-arrow-down', 'Inbox'],
        ['mdi-send', 'Send'],
        ['mdi-delete', 'Trash'],
        ['mdi-alert-octagon', 'Spam'],
    ]
    const texts = [
        {
            contents: 'hi there',
            sort: 1
        }, {
            contents: 'long time no see',
            sort: 2
        }, {
            contents: 'bro',
            sort: 3
        }, {
            contents: 'Nice',
            sort: 3
        }, {
            contents: 'im named pip',
            sort: 3
        }, {
            contents: 'sister!',
            sort: 3
        },]

    const drawer = ref(null)

    function testHanlder () {
        console.log("test");
    }
</script>
<style scoped>
    .floating{
        position: fixed;
        bottom: 12px;
        right: 12px;
        z-index: 2000;
    }
</style>