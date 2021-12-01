<template>
  <div class="home">
    <div class="homepic"><img src='../../images/homepicmain3.png'/></div>

      <div class="middle-padding page">
    <h3 class='italic mobile-text-shrink-small'>"If Joseph Smith’s transcendent experience in the Sacred Grove teaches us anything,
       it is that the heavens are open and that God speaks to His children"
      <br>- President Russell M. Nelson</h3><hr><br>

  </div>
  
  <div class=picture-text-content>

    <div class='contentbox mobile-invert-order'>
      <router-link to="/Information"><img src='../../images/scriptures.png'/></router-link>
      <h3 class=word-margin>Recources for learning about the first vision and the restoration</h3>
    </div>

    <div class='contentbox'>
      <h3 class=word-margin>Real people and their testimonies of the resoration</h3>
      <router-link to="/People"><img src='../../images/path.png'/></router-link>
    </div>

    <div class='contentbox mobile-invert-order'>
      <router-link to="/About"><img src='../../images/foundationsof.png'/></router-link>
      <h3 class=word-margin> More information about the project</h3>
    </div>
    
  </div>
  </div>
  
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
//    HelloWorld,
  },
};
</script>
