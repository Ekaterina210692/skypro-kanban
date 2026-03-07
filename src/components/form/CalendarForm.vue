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
          <div class="calendar__day-name">пн</div>
          <div class="calendar__day-name">вт</div>
          <div class="calendar__day-name">ср</div>
          <div class="calendar__day-name">чт</div>
          <div class="calendar__day-name">пт</div>
          <div class="calendar__day-name -weekend-">сб</div>
          <div class="calendar__day-name -weekend-">вс</div>
        </div>
        <div class="calendar__cells">
          <div
            v-for="day in days"
            :key="day.date"
            :class="['calendar__cell', day.classes]"
            @click="selectDate(day)"
          >
            {{ day.date }}
          </div>
        </div>
      </div>
      <input type="hidden" id="datepick_value" value="selectedDate">
      <div class="calendar__period">
        <p class="calendar__p date-end">
          Выберите срок исполнения <span class="date-control">{{ selectedDate }}</span>.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      selectedDate: '',
      days: [],
      months: [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
      ]
    }
  },
  computed: {
    currentMonth() {
      return this.months[this.currentDate.getMonth()];
    }
  },
  mounted() {
    this.generateCalendar();
  },
  methods: {
    generateCalendar() {
      const startDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
      const lastDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate();
      const firstDay = startDay.getDay();

      this.days = [];

      // Добавляем дни предыдущего месяца
      for (let i = 1; i <= firstDay; i++) {
        this.days.push({
          date: new Date(this.currentDate.getYear(), this.currentDate.getMonth() - 1, lastDay - firstDay + i),
          classes: ['_other-month']
        });
      }

      // Добавляем дни текущего месяца
      for (let i = 1; i <= lastDay; i++) {
        const date = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), i);
        const classes = ['_cell-day'];

        if (date.getDay() === 0 || date.getDay() === 6) {
          classes.push('_weekend');
        }

        if (date.toISOString().slice(0, 10) === new Date().toISOString().slice(0, 10)) {
          classes.push('_current');
        }

        this.days.push({
          date: i,
          classes: classes
        });
      }

      // Добавляем дни следующего месяца
      const nextMonthFirstDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
      const nextMonthFirstDayIndex = nextMonthFirstDay.getDay();

      for (let i = 0; i < 7 - nextMonthFirstDayIndex; i++) {
        this.days.push({
          date: new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, i + 1),
          classes: ['_other-month']
        });
      }
    },

    prevMonth() {
      this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1);
      this.generateCalendar();
    },

    nextMonth() {
      this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1);
      this.generateCalendar();
    },

    selectDate(day) {
      if (day.classes.includes('_other-month')) return;

      const year = this.currentDate.getFullYear();
      const month = this.currentDate.getMonth() + 1;
      const dayNumber = day.date;

      this.selectedDate = `${year}-${month.toString().padStart(2, '0')}-${dayNumber.toString().padStart(2, '0')}`;
    }
  }
}
</script>
