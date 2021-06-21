<template>
    <div 
        class="card"
        :class="[day.active ? SetBorderCard : '']"
        >
        <div 
            class="card-header text-center bg-vue"
            :class="[day.active ? SetBackgrHead : '']"
            style="cursor: pointer;"
            @click="SetActiveDay(day.id)"
        >
            <strong>{{day.FullName}}</strong>
        </div>
        <div class="card-body">
            <div>{{day.id}}</div>
            <CalendarEvent 
                v-for="(event, index) in day.events"
                :key="index"
                :event="event"
                :day="day"
            />
        </div>
    </div>
</template>

<script>

import {store} from '../store';
import CalendarEvent from './CalendarEvent';

export default {
        name:'CalendarDay',
        props: ['day'],

        components: {
            CalendarEvent
        },

        computed: {
            SetBackgrHead() {
                    return ' bg-vue2'
            },
            SetBorderCard() {
                    return ' bordercard'
            }
        },

        methods: {
            SetActiveDay(dayId){
                store.SetActiveDay(dayId);
            }
        }
}


</script>

<style scoped>

.bg-vue{
 background-color: rgb(52,73,94);
 color:white;
}

.bg-vue2{
 background-color: rgb(65,184,131);
 color:white;
}

.bordercard{
    border-color: rgb(65,184,131);
    border-width: 3px;
    border-left: none;
    color:white;
}

</style>
