<script setup>

</script>

<template>
  <div class="calendar">
    <p class="calendar__ttl subttl">Даты</p>
    <div class="calendar__block">
      <div class="calendar__nav">
        <div class="calendar__month">{{ currentMonth }}</div>
        <div class="nav__actions">
          <div class="nav__action" @click="prevMonth" data-action="prev">
            <!-- SVG стрелка влево -->
          </div>
          <div class="nav__action" @click="nextMonth" data-action="next">
            <!-- SVG стрелка вправо -->
          </div>
        </div>
      </div>
      <div class="calendar__content">
        <!-- Дни недели -->
        <div class="calendar__days-names">
          <!-- Дни недели -->
        </div>
        <!-- Клетки календаря -->
        <div class="calendar__cells">
          <!-- Здесь будет динамическое отображение дней -->
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
