
<template>
  <div class="calendar">
    <p class="calendar__ttl subttl">Даты</p>
    <div class="calendar__block">
      <div class="calendar__nav">
        <div class="calendar__month">{{ currentMonth }}</div>
        <div class="nav__actions">
          <div class="nav__action" @click="prevMonth" data-action="prev">
          </div>
          <div class="nav__action" @click="nextMonth" data-action="next">
          </div>
        </div>
      </div>
      <div class="calendar__content">
        <div class="calendar__days-names">
        </div>
        <div class="calendar__cells">
        </div>
      </div>
      <input type="hidden" :value="selectedDate">
      <div class="calendar__period">
        <p class="calendar__p date-end">
          Выберите срок исполнения <span class="date-control"></span>.
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>

</script>
