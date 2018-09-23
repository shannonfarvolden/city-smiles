<template>
    <b-navbar variant="light">
        <b-navbar-brand :to="{ name: 'home'}">CitySmiles</b-navbar-brand>

        <b-navbar-nav class="ml-auto">
            <b-nav-item :to="{ name: 'createOrganization' }">Add Your Organization</b-nav-item>
            <b-nav-item :to="{ name: 'organizations' }">All Organizations</b-nav-item>
        </b-navbar-nav>
    </b-navbar>
</template>
    
<script>
export default {
  name: 'Navbar'
}
</script>