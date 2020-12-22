<template>
    <div id="RoomType" class="room_type">

        <div class="container_room_type">
            <h2>Número de habitación</h2>
            <form v-on:submit.prevent="processRoomType" >
                <input type="text" v-model="roomDetails.room" placeholder="Número">
                <br>
                <button type="submit">Buscar</button>
            </form>
                <table border= 1 id="tabla">
                <tr>
                    <th>Número</th>
                    <th>Tipo</th>
                    <th>Valor</th>
                    <th>Disponible</th>
                </tr>
                <tr>
                    <td>{{roomDetails.room}}</td>
                    <td>{{roomDetails.roomType}}</td>
                    <td>{{roomDetails.value}}</td>
                    <td>{{roomDetails.available}}</td>
                </tr>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'RoomType',
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
        processRoomType: function(){
            var self = this  

            axios.get("https://alohate-app.herokuapp.com/room/type/" + self.roomDetails.room)
                
            .then((result) => {                
                self.roomDetails.roomType = result.data.roomType
                self.roomDetails.value = result.data.value

                if(result.data.available == true){
                    self.roomDetails.available = "Sí"
                }
                else{
                    self.roomDetails.available = "No"
                }
                document.getElementById("tabla").style = "display:block"
            })
            .catch((error) => {
                if (error.response.status == "404")
                    alert("ERROR 404: Habitación no existe.");
            });
        }
    },
}
</script>

<style>
    .room_type{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container_room_type {
        border: 3px solid #283747;
        border-radius: 10px;
        width: 25%;
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .room_type h2{
        color: #283747;
    }
    .room_type form{
        width: 50%;
        }
    .room_type input{
        height: 40px;
        width: 100%;
        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;
        border: 1px solid #283747;
    }
    .room_type button{
        width: 100%;
        height: 40px;
        color: #E5E7E9;
        background: #283747;
        border: 1px solid #E5E7E9;
        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0;
    }
    .room_type button:hover{
        color: #E5E7E9;
        background: crimson;
        border: 1px solid #283747;
    }
    .room_type table{
        display:none;
    }
</style>