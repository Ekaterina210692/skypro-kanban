
<template>
  <div class="pop-new-card" id="popNewCard">
    <div class="pop-new-card__container">
      <div class="pop-new-card__block">
        <div class="pop-new-card__content">
          <h3 class="pop-new-card__ttl">Создание задачи</h3>
          <a href="#" class="pop-new-card__close">&#10006;</a>

          <TaskForm
            formClass="form-new"
            action="#"
            titleLabel="Название задачи"
            titleId="formTitle"
            inputType="text"
            name="name"
            placeholder="Введите название задачи..."
            autofocus
            descriptionLabel="Описание задачи"
            descriptionPlaceholder="Введите описание задачи..."
          />

          <CategorySelector />

          <button class="form-new__create _hover01" id="btnCreate">Создать задачу</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TaskForm from './TaskForm.vue';
import CategorySelector from './CategorySelector.vue';
</script>
