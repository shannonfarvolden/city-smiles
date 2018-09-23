<template>
<div>
  <b-jumbotron header="City Smiles" bg-variant="info">
    <p>The resources for smiles!!!</p>
    <p>City Smiles is a user-firendly tool for discovering and connecting invaluable resources across across the city towards giving all of us a reason to smile</p>
  </b-jumbotron>
  <div>

<div>
 <img :src="addiction" width="75px" height="75px" hspace="12px" vspace="12px">
  <img :src="Law" width="75px" height="75px"  hspace="12px" vspace="12px" >
   <img :src="employment" width="75px" height="75px"  hspace="12px" vspace="12px">
  <img :src="FemaleShelter" width="75px" height="75px"  hspace="12px" vspace="12px" >
   <img :src="MaleShelter" width="75px" height="75px"  hspace="12px" vspace="12px">
  <img :src="FoodBank" width="75px" height="75px"  hspace="12px" vspace="12px">
   <img :src="goverment" width="75px" height="75px"  hspace="12px" vspace="12px">
  <img :src="refugee" width="75px" height="75px"  hspace="12px" vspace="12px">
    <img :src="senior" width="75px" height="75px" hspace="12px" vspace="12px">
   <img :src="Health" width="75px" height="75px" hspace="12px" vspace="12px">
  <img :src="Community" width="75px" height="75px" hspace="12px" vspace="12px">
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


