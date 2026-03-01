<template>
  <div class="pop-exit" v-if="isVisible" @click.self="closeModal">
    <div class="pop-exit__container">
      <div class="pop-exit__block">
        <div class="pop-exit__ttl">
          <h2>Выйти из аккаунта?</h2>
        </div>
        <form class="pop-exit__form" @submit.prevent="handleSubmit">
          <div class="pop-exit__form-group">
            <button class="pop-exit__exit-yes _hover01" @click="confirmExit">
              Да, выйти
            </button>
            <button class="pop-exit__exit-no _hover03" @click="cancelExit">
              Нет, остаться
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

</script>
