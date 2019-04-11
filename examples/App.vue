<template>
    <div>
        <nav>
            <ul>

                <!--<li><a v-link="'/test'">Button</a></li>-->
                <li><router-link to="/color">Color</router-link></li>
                <li><router-link to="/button">Button</router-link></li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
export default {
    name: 'app'
    // components: {
    //     HelloWorld
    // }
};
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
