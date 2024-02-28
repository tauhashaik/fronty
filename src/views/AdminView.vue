<template>
    <body id="body">
        
    </body>
    <div>
        <h1 id="title">Admin</h1>

        <table class="table table-dark">
            <tr>
                <th style="color: white; background-color: gold;">id</th>
                <th style="color: white; background-color: indigo;">prodName</th>
                <th style="color: white; background-color: gold;">category</th>
                <th style="color: white; background-color: indigo;">amount</th>
                <th style="color: white; background-color: indigo;">ProdURL</th>
                <th style="color: white; background-color: gold;">quantity</th>
              
            </tr>

            <tr v-for="item in $store.state.product" :key="item.ID">
                <td style = "color: white; background-color: indigo; padding-top: 40px">{{item.prodID}}</td>
                <td style = "color: white; background-color: black; font-size: 20px; padding-top: 40px">{{item.prodName}}</td>
                <td style = "color: white; background-color: indigo; font-size: 20px; padding-top: 40px">{{ item.category }}</td>
                <td style = "color: white; background-color: black; font-size: 20px; padding-top: 40px">R{{item.amount}}</td>
                <td style = "color: white; background-color:indigo"><img id='adminImg' :src=item.prodUrl></td>
                <td style = "color: white; background-color: black; font-size: 20px; padding-top: 40px">{{item.quantity}}</td>
            </tr>    
        </table>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
        "prodName": null,
        "quantity": null,
        "amount": null,
        "category": null,
        "prodUrl": null
        }
    },
    methods:{

    },
    computed:{
        getProduct(){
            this.$store.dispatch('getProduct')
        }
    },
    mounted(){
        this.getProduct
    }
}
</script>
<style scoped>
#body{
    background-color: black;
}
#title{
    margin-top: 100px;
    font-family: audiowide;
    color: gold;
}

#adminBody{
    background-color: black;
}

#adminImg{
    width: 90px;
    height: 90px;
}
#adminImg:hover{
    transform: scale(2);
    transition: 0.2s;
}

#adminButt{
    color: red;
    background-color: black;
    border: solid 2px black;
    border-radius: 12px;
    font-weight: bolder;
}
#adminButt1{
    color: red;
    background-color: white;
    border: solid 2px black;
    border-radius: 12px;
    font-weight: bolder;
}
#adminButt2{
    color: red;
    background-color: white;
    border: solid 2px black;
    border-radius: 12px;
    font-weight: bolder;
}

#adminButt:hover{
    scale: 1.2;
    /* transition: 0.3s; */
    background-color: gold;
    color: black;
}
#adminButt1:hover{
    /* transition: 0.3s; */
    background-color: red;
    color: black;
}
#adminButt2:hover{
    /* transition: 0.3s; */
    background-color: red;
    color: black;
}
    
</style>