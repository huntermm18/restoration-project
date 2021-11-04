<template>
<div>
    <br>
    <br>
    <div class="story" v-for="personStory in PeopleAndStories" :key="personStory.id">
        <div class="info">
            <p class=person-story>{{personStory.story}}
            <h4 class=signature>-{{personStory.name}}</h4>
            <p><i>{{personStory.location}}</i></p>
            <hr>
        </div>
    </div>
</div>

</template>

 <script>
export default {
  name: 'Stories',
  props: {
    PeopleAndStories: Array
  }
}
</script>
        