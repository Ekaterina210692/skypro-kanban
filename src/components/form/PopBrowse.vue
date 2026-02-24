
<template>
  <div class="pop-browse" id="popBrowse">
    <div class="pop-browse__container">
      <div class="pop-browse__block">
        <div class="pop-browse__content">
          <div class="pop-browse__top-block">
            <h3 class="pop-browse__ttl">Название задачи</h3>
            <CategorySelector />
          </div>

          <StatusSelector />

          <TaskForm
            formClass="form-browse"
            action="#"
            titleLabel="Описание задачи"
            titleId="textArea01"
            inputType="textarea"
            name="text"
            placeholder="Введите описание задачи..."
            isReadOnly
          />

          <div class="pop-browse__btn-browse">
            <div class="btn-group">
              <button class="btn-browse__edit _btn-bor _hover03">
                <a href="#">Редактировать задачу</a>
              </button>
              <button class="btn-browse__delete _btn-bor _hover03">
                <a href="#">Удалить задачу</a>
              </button>
            </div>
            <button class="btn-browse__close _btn-bg _hover01">
              <a href="#">Закрыть</a>
            </button>
          </div>

          <div class="pop-browse__btn-edit _hide">
            <div class="btn-group">
              <button class="btn-edit__edit _btn-bg _hover01">
                <a href="#">Сохранить</a>
              </button>
              <button class="btn-edit__edit _btn-bor _hover03">
                <a href="#">Отменить</a>
              </button>
              <button class="btn-edit__delete _btn-bor _hover03" id="btnDelete">
                <a href="#">Удалить задачу</a>
              </button>
            </div>
            <button class="btn-edit__close _btn-bg _hover01">
              <a href="#">Закрыть</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TaskForm from './TaskForm.vue';
import CategorySelector from './CategorySelector.vue';
import StatusSelector from './StatusSelector.vue';
</script>
