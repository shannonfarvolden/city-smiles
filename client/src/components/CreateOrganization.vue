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
        <b-form-group label="Description:"
                        label-for="description">
            <b-form-textarea id="description"
                          v-model="form.description"
                          required
                          placeholder="Enter description"
                          :rows="3">
            </b-form-textarea>
        </b-form-group>
        <b-form-group label="Category" label-for="category">
          <b-form-select id="category" v-model="form.category" :options="form.options" class="mb-3"/>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'CreateOrganization',
  data () {
    return {
      form: {
        name: '',
        email: '',
        description: '',
        category: null,
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'food', text: 'Food' }
        ]
      },
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault();
      alert(JSON.stringify(this.form));
    }
  }
}
</script>
<style>
  
</style>