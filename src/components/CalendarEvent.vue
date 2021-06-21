<template>
    <div 
    class="alert text-center"
    :class="GetEventColor"
    >
    <div v-if="!event.edit">
        <div>{{event.title}}</div>
        <div>
            <i 
            class="fas fa-edit me-2"
            style="cursor: pointer;"
            @click="EditEvent(day.id, event.title)"
            ></i>
            <i 
            class="far fa-trash-alt"
            style="cursor: pointer;"
            @click="DeleteEvent(day.id, event.title)"
            ></i>
        </div>
    </div>
    
    <div v-if="event.edit">
        <input 
            type="text"
            class="form-control"
            :placeholder="event.title"
            v-model="newEventTitle"
        >
        <hr>
        <i 
        class="fas fa-check"
        style="cursor: pointer;"
        @click="UpdateEvent(day.id, event.title, newEventTitle)"
        ></i>
    </div>

    </div>
</template>

<script>

import {store} from '../store';

export default {
  name: 'CalendarEvent',
  props: ['event','day'],

  data(){
      return {
          newEventTitle: ''
      }
  },

  computed: {
      GetEventColor(){
          return 'alert-'+this.event.color;
      }
  },

  methods: {
      EditEvent(dayID, eventTitle) {
          store.EditEvent(dayID, eventTitle);
      },
      UpdateEvent(dayId, oldEventTitle, newEventTitle) {
          if(newEventTitle==='') newEventTitle=oldEventTitle;
          store.UpdateEvent	(dayId, oldEventTitle, newEventTitle);
          this.newEventTitle='';
      },
      DeleteEvent(dayId, eventTitle) {
          console.log(dayId, eventTitle);
          store.DeleteEvent(dayId, eventTitle);
      }
  }

        
}

</script>

<style scoped>

</style>
