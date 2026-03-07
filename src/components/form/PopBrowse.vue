<template>
  <div class="pop-browse" id="popBrowse" v-if="isModalOpen">
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
          </div>

          <div class="pop-browse__btn-edit _hide">
            <div class="btn-group">
              <button class="btn-edit__edit _btn-bg _hover01">
                <a href="#" @click.prevent="saveTask">Сохранить</a>
              </button>
              <button class="btn-edit__edit _btn-bor _hover03">
                <a href="#" @click.prevent="closeModal">Отменить</a>
              </button>
              <button class="btn-edit__delete _btn-bor _hover03" id="btnDelete">
                <a href="#" @click.prevent="deleteTask">Удалить задачу</a>
              </button>
            </div>
            <button class="btn-edit__close _btn-bg _hover01" @click="closeModal">
              <a href="#">Закрыть</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-overlay" @click="closeModal"></div>
  </div>
</template>

<script>
import TaskForm from './TaskForm.vue'
import CategorySelector from './CategorySelector.vue'
import StatusSelector from './StatusSelector.vue'

export default {
  data() {
    return {
      isModalOpen: false
    }
  },
  methods: {
    showEditModal() {
      this.isModalOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeModal() {
      this.isModalOpen = false
      document.body.style.overflow = 'auto'
    },
    saveTask() {
      // Логика сохранения
      this.closeModal()
    },
    deleteTask() {
      // Логика удаления
      this.closeModal()
    }
  },
  components: {
    TaskForm,
    CategorySelector,
    StatusSelector
  },
  mounted() {
    // Если нужно что-то сделать при монтировании компонента
  }
}
</script>
