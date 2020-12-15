<template>
    <div id="Room">
        <h2>La habitación <span> {{room}}, </span> se encuentra disponible</h2>
    </div>
</template>

<script>
    export default {
        name: "Room",
        data:function(){
            return {
                room: "none"
            }
        },
        created: function(){
            this.room = this.$route.params.room
        }
    }
</script>

<style>
    #Room{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #Room h2{
        font-size: 50px;
        color: #283747;
    }
    #Room span{
        color: crimson;
        font-weight: bold;
    }
</style>   