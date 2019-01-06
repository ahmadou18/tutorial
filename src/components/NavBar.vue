/* eslint-disable */
<template>
    <header>
        <nav>
            <ul class="menu">
                <li><router-link :to="{name:'New'}">New</router-link></li>
                <li><router-link :to="{name:'Women'}">Women</router-link></li>
                <li><router-link :to="{name:'Men'}">Men</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
header {
    position: absolute;
    z-index: 1;
    width: 100%;
    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        .menu {
            margin: 0;
            padding: 0;
            list-style: none;
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 50%;
            height: 50px;
            li a {
                list-style: none;
                text-decoration: none;
                color: black;
            }
        }
    }
}    
</style>
