<template>
  <div class="">
      <div class="homepic"><img src='../../images/peoplepicmain.png'/></div>

        <div class="page">

        <h2 class=middle-padding>
            A knowledge and testimony of these events
            has changed the lives of millions of people across
            the world
        </h2><hr>
        <h2 class=middle-padding>
            The following is a collection of people and what the restoration means to them
        </h2>
        <Stories :PeopleAndStories="PeopleAndStories" />


  </div>
  </div>
</template>


<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import Stories from"../components/Stories.vue"
export default {
  name: "People",
  components: {
    Stories,

  },
  computed:{
      PeopleAndStories() {
          return this.$root.$data.PeopleAndStories;
      }
  }

};
</script>
