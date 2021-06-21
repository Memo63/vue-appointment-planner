import { CalendarWeekData } from "./data.js"

export const store = {
    state: {
        CalendarWeekData
    },
    
    GetActiveDay () {
        return this.state.CalendarWeekData.find(day=>day.active);
    },
    
    SetActiveDay(dayId) {
        this.state.CalendarWeekData.map(dayObj => {
            dayObj.id===dayId ? dayObj.active=true : dayObj.active=false;
        });
    },

    StoreEvent(eventTitle, eventColor){
        const activeDay=this.GetActiveDay();
        activeDay.events.push({'title': eventTitle, 'edit':false, 'color': eventColor});
    },

    EditEvent(dayId, eventTitle) {
        this.ResetEditAll();
        const dayObj=this.state.CalendarWeekData.find(day=>day.id===dayId);
        const eventObj = dayObj.events.find(event=>event.title===eventTitle);
        eventObj.edit=true;
    },

    ResetEditAll() {
        this.state.CalendarWeekData.map(dayObj=>{
            dayObj.events.map (event=> {
                event.edit = false;
            })
        })
    },

    UpdateEvent(dayId, oldEventTitle, newEventTitle) {
        const dayObj=this.state.CalendarWeekData.find(day=>day.id===dayId);
        const eventObj = dayObj.events.find(event=>event.title===oldEventTitle);
        eventObj.title=newEventTitle;
        eventObj.edit = false;

    },

    DeleteEvent(dayId, eventTitle) {
        const dayObj=this.state.CalendarWeekData.find(day=>day.id===dayId);
        const eventIndex=dayObj.events.findIndex(event=> event.title===eventTitle);
        dayObj.events.splice(eventIndex, 1);
    },

    DeleteAllEvents() {
        this.state.CalendarWeekData.map(dayObj=>{
            dayObj.events = [];
        })
    }
}