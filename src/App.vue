<template>

  <div id="app">
    <h1>Terminplaner</h1>
    <CalendarWeek />
    <CalendarEntry />
    <Footer/>
  </div>

</template>

<script>

import CalendarWeek from './components/CalendarWeek';
import CalendarEntry from './components/CalendarEntry';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    CalendarWeek,
    CalendarEntry,
    Footer
  }
}

</script>

<style scoped>
h1{
  text-align: center;
}


</style>
