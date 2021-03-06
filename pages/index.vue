<template>
  <div class="container">
      
   
      <LeftMenu/>
    
  
    <div class="right">
  
    <Header/>
      <OrderList/>
      <Order/>
    </div>
      
    
  </div>
</template>

<script>
export default {
   data() {
      return {
        colors: ['system', 'light', 'dark', 'sepia']
      }
    }
}
</script>

<style>
.container{
  
display: flex;
min-height: 100vh;
}



.right{
  flex: 1;
  z-index: 10;
  position: relative;
  margin-left: 15%;
 
 
}


</style>
