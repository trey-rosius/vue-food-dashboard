<template>
    <div class="orders">
      <div v-for="order in orders" :key="order">

          <div class="orders__card">
         <div class="top">
             <div class="order-details">
                 <div class="order-details__num">
                     Order {{order.order_no}}
                 </div>
                 <div class="order-details__date">
                     {{order.order_date}}
                 </div>
             </div>
             <img :src="order.ordered_by" alt="" class="profile-pic">
         </div>
        
             <div class="items">
                 <div v-for="item in order.items" :key="item">
                     <div class="item">
                         <img :src="item.pic" alt="" class="item__pic">
                         <div class="item__details">
                             <div class="item__name">
                                 {{item.name}}
                             </div>
                             <div class="item__desc">
                                 {{item.desc}}
                             </div>
                             <div class="item__details1">
                           <div class="item__price">
                               {{item.price}}

                           </div>
                           <div class="item__qty">
                               Qty:{{item.qty}}
                           </div>
                           
                             </div>
                             <div class="line"></div>
                         </div>
                     </div>
                     
           
         </div>

          </div>
          <div class="line1"></div>
      </div>
      </div>
    </div>
</template>

<script>
    export default {
        props:{
            orders:{
required:true
            }
        },
       
    }
</script>

<style lang="scss" scoped>
.orders{
    display: flex;
    flex-direction: row;
 

    flex-wrap: wrap;
    

    &__card{
display: flex;
    flex-direction: column;
    cursor: pointer;
    padding: 10px 10px;
    margin: 10px 10px;
    width: 250px;
    border-radius: 10px;
    transition: transform .3s;
    background-color: var(--color);
    //scale up and animate
    &:hover{
        transform: translateY(-1.5rem) scale(1.03);
    }
   
    }

}
.top{
      display: flex;
      justify-content: space-between;
    
}
.order-details{
display: flex;
    flex-direction: column;

    &__num{
     font-weight: bold;
     font-size: 14px;
     color:var(--bg);
    }
    &__date{
     color: grey;
     font-size: 12px;

    }
}
.profile-pic{
    width: 30px;
    height: 30px;
    border-radius: 100%;
}

.items{

    margin-top: 20px;
    margin-left: 40px;
display: flex;
flex-direction: column;


   

}

.item{
    display: flex;
    margin:10px 0px;


&__pic{
width: 60px;
height: 60px;
object-fit: cover;
border-radius: 100%;
}
&__name{
    font-size: 12px;
    color: var(--bg);
}
&__details{
    font-size: 14px;
    font-weight: bold;
    padding-left: 10px;

}
&__desc{
    font-size: 10px;
    color:grey;

}
&__details1{
    display: flex;
    justify-content: space-between;

   
}
 &__price{
        font-size: 12px;
        font-weight: bold;
        color: var(--bg);
    }
     &__qty{
        font-size: 12px;
        font-weight: bold;
        color: var(--bg);
    }
}
.line{
    margin-top: 10px;
    width: 100%;
    background-color: var(--color-primary);
    height: 1px;
}
.line1{
    margin-top: 10px;
    
    background-color: var(--color-primary);
    height: 1px;

}
</style>