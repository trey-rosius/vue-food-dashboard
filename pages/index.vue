<template>
  <div class="container">
      
    <LeftMenu/>
  
    <div class="right">
  
    <Header/>
      
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
 
 
}


</style>
