<template>
<div>
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card" style="background-image: url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg);">
                        <div class="text-white text-center d-flex align-items-center py-5 px-4 my-5">
                            <div>
                                <h1 class="card-title pt-3 mb-5 font-bold"><strong>City Smiles</strong></h1>
                                <p class="mx-5 mb-5">City Smiles is a user-firendly tool utilizing analytics and top UX practices for connecting invaluable resources across across the city towards giving all of us a reason to smile</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  <div>
 <em>Click an Icon below to filter the map!</em>
<div>
 <img :src="addiction" width="75px" height="75px" hspace="12px" vspace="12px" v-b-tooltip.hover title="Addiction" v-b-tooltip.html.top>
  <img :src="Law" width="75px" height="75px"  hspace="12px" vspace="12px" v-b-tooltip.hover title="Legal Services" v-b-tooltip.html.top>
   <img :src="employment" width="75px" height="75px"  hspace="12px" vspace="12px" v-b-tooltip.hover title="Employment Servies" v-b-tooltip.html.top>
  <img :src="FemaleShelter" width="75px" height="75px"  hspace="12px" vspace="12px" v-b-tooltip.hover title="Womens Shelter" v-b-tooltip.html.top>
   <img :src="MaleShelter" width="75px" height="75px"  hspace="12px" vspace="12px" v-b-tooltip.hover title="Mens Shelter" v-b-tooltip.html.top>
  <img :src="FoodBank" width="75px" height="75px"  hspace="12px" vspace="12px" v-b-tooltip.hover title="Food Bank" v-b-tooltip.html.top>
   <img :src="goverment" width="75px" height="75px"  hspace="12px" vspace="12px" v-b-tooltip.hover title="Governmental Services" v-b-tooltip.html.top>
  <img :src="refugee" width="75px" height="75px"  hspace="12px" vspace="12px" v-b-tooltip.hover title="Refugee Services" v-b-tooltip.html.top>
    <img :src="senior" width="75px" height="75px" hspace="12px" vspace="12px" v-b-tooltip.hover title="Senior Services" v-b-tooltip.html.top>
   <img :src="Health" width="75px" height="75px" hspace="12px" vspace="12px" v-b-tooltip.hover title="Health Services" v-b-tooltip.html.top>
  <img :src="Community" width="75px" height="75px" hspace="12px" vspace="12px" v-b-tooltip.hover title="Community Services" v-b-tooltip.html.top>
</div>
 <br>
 <br>


  </div>
   <iframe src="https://snazzymaps.com/embed/100371" width="100%" height="600px" style="border:none;"></iframe>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return {
      addiction: require('./assets/Addiction.png'),
      Law: require('./assets/Law.png'),
      employment: require('./assets/employment.png'),
      FemaleShelter: require('./assets/FemaleShelter.png'),
      MaleShelter: require('./assets/MaleShelter.png'),
      FoodBank: require('./assets/FoodBank.png'),
      goverment: require('./assets/goverment.png'),
      refugee: require('./assets/refugee.png'),
      senior: require('./assets/senior.png'),
      Health: require('./assets/Health.png'),
      Community: require('./assets/Community.png')
    }
  }
}
</script>

<style>

</style>


