<template>
  <div class="container mt-5">
        <div class="row">
          <div class="col-6 offset-3">
            <div class="card">
              <div class="card-header text-center bg-vue">
                <h5>Neuer Termin für: <strong class="tag">{{GetNameActiveDay}}</strong></h5>
              </div>
              <div class="card-body">
                  <div 
                      class="alert alert-danger"
                      v-if="error"    
                  >
                      Der Titel darf nicht leer sein.
                  </div>
                  <input 
                  type="text"
                  class="form-control"
                  placeholder="Neuer Termin"
                  v-model="eventTitle"
                  >
                  <div class="mt-4 mb-4 text-center">
                    <span
                    v-for="(color,index) in ['primary','success','info','warning','danger']"
                    :key="index"
                    class="me-3 alert square "
                    :class="[eventColor===color? GetBorderColor : '', 'alert-'+color]"
                    style="cursor: pointer;"
                    @click="ChangeEventColor(color)"
                    ></span>
                  </div>
                  <hr>
                  <button 
                    class="btn btn-primary btn-block bg-vue2 me-3"
                    style="cursor: pointer;"
                    @click="StoreEvent(eventTitle, eventColor)"
                  >
                  Eintragen</button>
                  <button 
                    class="btn btn-primary btn-block bg-vue2"
                    style="cursor: pointer;"
                    @click="DeleteAllEvents()"
                  >
                  Alle Einträge löschen</button>
              </div>
            </div>
          </div>
        </div>
    </div>
    
</template>

<script>


import {store} from '../store';
export default {

    name: 'CalendarEntry',
    data() {
        return {
            eventColor: 'primary',
            eventTitle: '',
            error: false
        }
    },

    computed: {
        GetBorderColor() {
            return 'border border-'+this.eventColor;
        },
        GetNameActiveDay() {
          return store.GetActiveDay().FullName;
        }
    },

    methods: {
        ChangeEventColor: function(color){
            this.eventColor=color;
        },
        StoreEvent: function(eventTitle, eventColor) {
          if(eventTitle==='')
              return this.error=true;
          store.StoreEvent(eventTitle, eventColor);
          this.eventTitle='';
          this.eventColor='primary';

        },
        DeleteAllEvents: function () {
          store.DeleteAllEvents();
        }
    }
        
    
    
}

</script>

<style scoped>
.bg-vue2{
 background-color: rgb(65,184,131);
 color:white;
}

.square{
  width: 40;
  height: 40;
}

.tag{
    color: rgb(65,184,131);
}
</style>