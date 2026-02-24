
<template>
  <form class="task-form" :class="formClass" :action="action">
    <div class="form-block">
      <label :for="titleId" class="subttl">{{ titleLabel }}</label>
      <input
        class="task-form__input"
        :type="inputType"
        :name="name"
        :id="titleId"
        :placeholder="placeholder"
        :autofocus="autofocus"
      />
    </div>
    <div class="form-block">
      <label for="textArea" class="subttl">{{ descriptionLabel }}</label>
      <textarea
        class="task-form__area"
        name="text"
        id="textArea"
        :placeholder="descriptionPlaceholder"
        :readonly="isReadOnly"
      ></textarea>
    </div>
    <Calendar @date-selected="handleDateSelected" />
  </form>
</template>

<script setup>
import Calendar from '@/components/atoms/Calendar.vue';

defineProps({
  formClass: String,
  action: String,
  titleLabel: String,
  titleId: String,
  inputType: String,
  name: String,
  placeholder: String,
  autofocus: Boolean,
  descriptionLabel: String,
  descriptionPlaceholder: String,
  isReadOnly: Boolean
});

const handleDateSelected = (date) => {
  console.log('Выбрана дата:', date);
}
</script>
