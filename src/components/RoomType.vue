<template>
    <div id="RoomType">
        <h2>{{room}}</h2>
        <h2>Tipo: <span> {{roomType}} </span> </h2>
        <h2>Valor: <span> {{value}} COP </span> </h2>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'RoomType',
        data: function (){
            return {
                room: "",
                roomType: "",
                value: 0
            }
        },
        created: function(){
            this.room = this.$route.params.room
            let self = this
            axios.get("https://alohate-app.herokuapp.com/room/type/" + this.room)
            .then((result) => {
                self.roomType = result.data.roomType
                self.value = result.data.value
            })
            .catch((error) => {
                alert("ERROR Servidor");
            });
        }
    }
</script>

<style>
    #RoomType{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #RoomType h2{
        font-size: 50px;
        color: #283747;
    }
    #RoomType span{
        color: crimson;
        font-weight: bold;
    }
</style>