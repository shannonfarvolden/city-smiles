<template>
  <div>
    <b-card>
      <b-form @submit="onSubmit">
        <b-form-group label="Organization Name:"
                        label-for="name">
            <b-form-input id="name"
                          type="text"
                          v-model="form.name"
                          required
                          placeholder="Enter name">
            </b-form-input>
        </b-form-group>
        <b-form-group label="Email address:"
                        label-for="email">
            <b-form-input id="email"
                          type="email"
                          v-model="form.email"
                          required
                          placeholder="Enter email">
            </b-form-input>
        </b-form-group>
        <b-form-group label="Website:"
                        label-for="website">
            <b-form-input id="website"
                          type="text"
                          v-model="form.website"
                          required
                          placeholder="Enter website">
            </b-form-input>
        </b-form-group>
        <b-form-group label="Description:"
                        label-for="description">
            <b-form-textarea id="description"
                          v-model="form.description"
                          required
                          placeholder="Enter description"
                          :rows="3">
            </b-form-textarea>
        </b-form-group>
        <b-form-group label="Category:" label-for="category">
          <b-form-select id="category" v-model="form.category" :options="options" class="mb-3"/>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'CreateOrganization',
  data () {
    return {
      form: {
        name: '',
        email: '',
        website: '',
        description: '',
        category: null
      },
      options: [
         { value: null, text: 'Please select an option' },
         { value: 'food', text: 'Food Banks' },
          { value: 'senior', text: 'Senior Services'},
          { value: 'refugee', text: 'Refugee Services'},
          { value: 'male', text: 'Male Shelter'},
          { value: 'female', text: 'Female Shelter'},
          {value: 'law', text: 'Immigration lawyer'},
          {value: 'language', text: 'Language Services'},
          {value: 'health', text: 'Mental Health Services'},
          {value: 'government', text: 'Government Services'},
          {value: 'employment', text: 'Employment Services'},
          {value: 'community', text: 'Community Services'},
          {value: 'addiction', text: 'Addiction Services'}
      ]
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault();
      axios.post('http://localhost:5000/api/organizations', JSON.stringify(this.form)
      ).then((response) => {
        console.log("success", response);
      }).catch((error) => {
        console.log("error",error);
      });
    }
  }
}
</script>
<style>
  
</style>