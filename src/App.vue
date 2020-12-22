<template>
  <div id="app">
    <div class="header">
      <h1>Alohate</h1>
      <nav>
        <button v-on:click="login" v-if="!is_auth" > Iniciar Sesión </button>
        <button v-on:click="init" v-if="is_auth" > Inicio </button>
        <button v-on:click="getRoomType" v-if="is_auth" > Tipo de Habitación </button>
        <button v-on:click="reserveRoom" v-if="is_auth" > Reservar </button>
        <button v-on:click="sesion" v-if="is_auth" >Cerrar Sesión</button>
      </nav>
    </div>
    <div class="main-component"> 
      <router-view></router-view>
    </div>
    <div class="footer">
      <h2>Misión TIC 2022</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data: function(){
    return {
      is_auth: localStorage.getItem('isAuth') || false
    }
  },
  methods: {
    login: function(){
      this.$router.push({name: "login"})
    },
    sesion: function(){
      this.is_auth = false;
      this.$router.push({name: "login"})
    },
    init: function(){
      if(this.$route.name != "username"){
        let username = localStorage.getItem("current_username")
        this.$router.push({name: "username", params:{username:username}})
      }
    },
    getRoomType: function(){
        this.$router.push({ name:"room_type"})     
    },
    reserveRoom: function(){
        this.$router.push({ name:"reserve"})    
    }
  },
  beforeCreate: function(){
    localStorage.setItem('current_username', 'Colsubsidio')
    localStorage.setItem('isAuth', true)
    this.$router.push({name:"username",params:{username:'Colsubsidio'}})
  }
}
</script>

<style>
body{
  margin: 0 0 0 0;
}
.header{
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: #283747 ;
  color:#E5E7E9 ;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header h1{
  width: 20%;
  text-align: center;
}
.header nav {
  height: 100%;
  width: 45%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
}
.header nav button{
  color: #E5E7E9;
  background: #283747;
  border: 1px solid #E5E7E9;
  border-radius: 5px;
  padding: 10px 20px;
}
.header nav button:hover{
  color: #283747;
  background: #E5E7E9;
  border: 1px solid #E5E7E9;
}
.main-component{
  height: 75vh;
  margin: 0%;
  padding: 0%;
  background: #FDFEFE ;
}
.footer{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: #283747;
  color: #E5E7E9;
}
.footer h2{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
