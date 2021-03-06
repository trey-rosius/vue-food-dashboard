<template>
    <div>
      <div class="orders">
          <div class="orders__card">
         <div class="top">
             <div class="order-details">
                 <div class="order-details__num">
                     Order #351
                 </div>
                 <div class="order-details__date">
                     23 FEb 2021,08:30PM
                 </div>
             </div>
             <img src="" alt="" class="profile-pic">
         </div>

          </div>
      </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                orders:[
    {
        "order_no": "#6753",
        "order_date":"12 jan 2021, 08:28pm",
        "ordered_by":"https://rosius.s3.us-east-2.amazonaws.com/cropped_rosius.png",
        "total":"$26.4",
        "items":[
            {
                "pic":"https://rosius.s3.us-east-2.amazonaws.com/meal1+(1).jpg",
                "name":"Vegetable Mixups",
                "desc":"Vegetable Fritters with Egg",
                "price":"$10.2",
                "qty":3

            },
            {
                "pic":"https://rosius.s3.us-east-2.amazonaws.com/meal2+(1).jpeg",
                "name":"Chicken Mixed Salad",
                "desc":"Roasted Chicken, mixed with salad",
                "price":"$16.2",
                "qty":2

            }
        ]
    },
    {
        "order_no": "#7253",
        "order_date":"12 jan 2021, 08:28pm",
        "ordered_by":"https://rosius.s3.us-east-2.amazonaws.com/cropped_rosius.png",
        "total":"$40.4",
        "items":[
            {
                "pic":"https://rosius.s3.us-east-2.amazonaws.com/meal3+(1).jpeg",
                "name":"Vegetable Mixups",
                "desc":"Vegetable Fritters with Egg",
                "price":"$15.2",
                "qty":1

            },
            {
                "pic":"https://rosius.s3.us-east-2.amazonaws.com/meal4+(1).jpeg",
                "name":"Chicken Mixed Salad",
                "desc":"Roasted Chicken, mixed with salad",
                "price":"$25.2",
                "qty":2

            }
        ]
    },
    {
        "order_no": "#6753",
        "order_date":"12 jan 2021, 08:28pm",
        "ordered_by":"https://rosius.s3.us-east-2.amazonaws.com/cropped_rosius.png",
        "total":"$26.4",
        "items":[
            {
                "pic":"https://rosius.s3.us-east-2.amazonaws.com/meal1+(1).jpg",
                "name":"Vegetable Mixups",
                "desc":"Vegetable Fritters with Egg",
                "price":"$10.2",
                "qty":5

            },
            {
                "pic":"https://rosius.s3.us-east-2.amazonaws.com/meal4+(1).jpeg",
                "name":"Chicken Mixed Salad",
                "desc":"Roasted Chicken, mixed with salad",
                "price":"$16.2",
                "qty":2

            }
        ]
    },
    {
        "order_no": "#6753",
        "order_date":"12 jan 2021, 08:28pm",
        "ordered_by":"https://rosius.s3.us-east-2.amazonaws.com/cropped_rosius.png",
        "total":"$26.4",
        "items":[
            {
                "pic":"https://rosius.s3.us-east-2.amazonaws.com/meal4+(1).jpeg",
                "name":"Vegetable Mixups",
                "desc":"Vegetable Fritters with Egg",
                "price":"$10.2",
                "qty":3

            },
            {
                "pic":"https://rosius.s3.us-east-2.amazonaws.com/meal2+(1).jpeg",
                "name":"Chicken Mixed Salad",
                "desc":"Roasted Chicken, mixed with salad",
                "price":"$16.2",
                "qty":2

            }
        ]
    },
    {
        "order_no": "#6753",
        "order_date":"12 jan 2021, 08:28pm",
        "ordered_by":"https://rosius.s3.us-east-2.amazonaws.com/cropped_rosius.png",
        "total":"$26.4",
        "items":[
            {
                "pic":"https://rosius.s3.us-east-2.amazonaws.com/meal1+(1).jpg",
                "name":"Vegetable Mixups",
                "desc":"Vegetable Fritters with Egg",
                "price":"$10.2",
                "qty":3

            },
            {
                "pic":"https://rosius.s3.us-east-2.amazonaws.com/meal2+(1).jpeg",
                "name":"Chicken Mixed Salad",
                "desc":"Roasted Chicken, mixed with salad",
                "price":"$16.2",
                "qty":2

            }
        ]
    }
]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>