
export const state = () =>({
    orders:[]
});


export const mutations ={
    

    updateOrders:(state,data) =>{
        state.orders = data;
    }
}

export const actions ={

    async getOrders({
        state,commit
    }){
        if(state.orders.length) return;

        try{
            await fetch(
                "https://suczbh984e.execute-api.us-east-2.amazonaws.com/dev/orders",{
                    headers:{
                    "Content-Type":"application/json",

                    "x-api-key":process.env.AWS_API_KEY
                    }
                }
               
            )
            .then(response => response.json())
            .then(data =>{
                console.log(data);
                commit("updateOrders",data);
            });
        }catch(err){
            console.log(err);
        }
    }
}