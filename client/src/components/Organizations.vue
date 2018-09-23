<template>
  <div>
    <b-form-input v-model="search"
                  type="text"
                  placeholder="Search Organizations"></b-form-input>
    <hr>
    <b-card class="card" v-for="organization in filteredOrganizations">
        <h4>{{ organization.name }}</h4>
        <hr>
        <p>Email:{{ organization.email }}</p>
        <p>
            Website: <a :href="organization.website"  target="_blank">{{ organization.website }}</a>
        </p>
        <p>Description: {{ organization.description }}</p>
        <p>Category: {{ organization.category }}</p>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'CreateOrganization',
  data () {
      return {
          organizations: [],
          search: ''
      }
  },
  created() {
      axios.get('http://localhost:5000/api/organizations')
      .then(({data}) => {
        console.log("success", data);
        this.organizations = data;
      }).catch((error) => {
        console.log("error",error);
      });
    },
computed: {
    filteredOrganizations: function () {
        if (this.search === '')
            return this.organizations;

        const vm = this;
        const result = this.organizations.filter(function (organization) {
            return organization.name.toLowerCase().match(vm.search.toLowerCase());
        })
        return result;
    }
 }
}
</script>
<style>
  .card{
      margin:15px 15px;
  }
</style>