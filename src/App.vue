<template>
  <div id="app">
    <div class="header">
      <img src="./assets/Alohate.jpg" alt="Alohate!!" class="logo">
      <h1 class="font">Alohate</h1>
      <nav>
        <button v-on:click="init" v-if="is_auth" > Inicio </button>
        <button v-on:click="getRoomType" v-if="is_auth" > Tipo de Habitación </button>
        <!---<button v-if="is_auth" > Transacción </button>
        <button v-if="is_auth" >Cerrar Sesión</button>-->
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
    init: function(){
      if(this.$route.name != "room"){
        let room = localStorage.getItem("current_room")
        this.$router.push({name: "room", params:{room:room}})
      }
    },
    getRoomType: function(){
      if(this.$route.name != "room_type"){
        let room = localStorage.getItem("current_room")
        this.$router.push({ name:"room_type", params:{room:room}})
      }
    },
  },
  beforeCreate: function(){
    localStorage.setItem('current_room', '201')
    localStorage.setItem('isAuth', true)
    this.$router.push({name:"room",params:{room:'201'}})
  }
}
</script>

<style>
body{
  margin: 0 0 0 0;
}

.font{
  font-style:italic;
  font-weight:bold;
  font-size:2em;
  font-family:'Helvetica','Verdana','Monaco',sans-serif;
  align-items:  center;
}
.header{
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: #1B144A ;
  color:#fca400 ;
  display: flex;
  justify-content: space-between;
  align-items:  end;
}
.logo{
  width: 150px; 
  height: 100px;
}
.header h1{
  width: 40%;
  justify-content: flex-end, space-between;
  text-align: center;
  font-family:'Helvetica','Verdana','Monaco',sans-serif;
}
.header nav {
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
}
.header nav button{
  color: #fca400;
  background: #1B144A;
  border: 1px solid #fca400;
  border-radius: 5px;
  padding: 10px 20px;
}
.header nav button:hover{
  color: #1B144A;
  background: #fca400;
  border: 1px solid #E5E7E9;
}
.main-component{
  height: 75vh;
  margin: 0%;
  padding: 0%;
  background: #fca400 ;
  font-family:'Helvetica','Verdana','Monaco',sans-serif;
}
.footer{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: #1B144A;
  color: #fca400;
}
.footer h2{
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
