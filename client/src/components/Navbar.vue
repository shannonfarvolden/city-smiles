<template>
    <b-navbar variant="light">
        <b-navbar-brand :to="{ name: 'home'}"></b-navbar-brand>
        <img :src="logo" v-b-tooltip.hover title="Smile :)" v-b-tooltip.html.top>
        <b-navbar-nav right>
            <b-nav-item :to="{ name: 'createOrganization' }" v-b-tooltip.hover title=":D" v-b-tooltip.html.top>Add Your Organization</b-nav-item>
        </b-navbar-nav>
    </b-navbar>
</template>
    
<script>
export default {
  name: 'Navbar',
   data(){
    return {
      logo: require('./assets/logo.png'),
    }
  }
}
</script>