<template>
    <div id="Reserve" class="reserve">

        <div class="container_reserve">
            <h2>Número de habitación</h2>
            <form v-on:submit.prevent="processReserve" >
                <input type="text" v-model="roomDetails.room" placeholder="Número">
                <br>
                <button type="submit">Reservar</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Reserve',
    data: function (){
        return {
            roomDetails: {
                room: "",
                roomType: "",
                value: 0,
                available: "",
            }
        }
    },
    methods: {
        processReserve: function(){
            var self = this  

            axios.put("https://alohate-app.herokuapp.com/room/reserve/" + self.roomDetails.room)
                
            .then((result) => {
                alert("Reserva Exitosa");
            })
            .catch((error) => {
                if (error.response.status == "404")
                    alert("ERROR 404: Habitación no existe.");
                if (error.response.status == "403")
                    alert("ERROR 403: Habitación en uso.");
            });
        }
    },
}
</script>

<style>
    .reserve{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container_reserve {
        border: 3px solid #283747;
        border-radius: 10px;
        width: 25%;
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .reserve h2{
        color: #283747;
    }
    .reserve form{
        width: 50%;
        }
    .reserve input{
        height: 40px;
        width: 100%;
        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;
        border: 1px solid #283747;
    }
    .reserve button{
        width: 100%;
        height: 40px;
        color: #E5E7E9;
        background: #283747;
        border: 1px solid #E5E7E9;
        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0;
    }
    .reserve button:hover{
        color: #E5E7E9;
        background: crimson;
        border: 1px solid #283747;
    }
</style>