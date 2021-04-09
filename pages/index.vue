<template>
  <div class="container">
      
   
      <LeftMenu/>
    
  
    <div class="right">
  
    <Header/>
    <div class="mobile-color-picker">
      <ColorModePicker/>
    </div>
      <OrderList/>
      <Order :orders='orders'/>
    </div>
      
    
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
   data() {
      return {
        colors: ['system', 'light', 'dark', 'sepia']
      }
    },
    computed:{
      ...mapState(['orders'])
    }
}
</script>

<style lang="scss" scoped>
.container{
  
display: flex;
min-height: 100vh;
}

.mobile-color-picker{
  display: none;
  margin-left: 25px;
  @media screen and (max-width: 575px) {
  display: flex;
   }
}

.right{
  flex: 1;
  z-index: 10;
  
  margin-left: 12%;
 
 
}


</style>
