<template>
    <div class="wrapper">
        <div class="container-signup">
            <div class="modal">
				<div class="modal__block">
					<div class="modal__ttl">
						<h2>Регистрация</h2>
					</div>
					<form @submit.prevent="handleSubmit" class="modal__form-login" id="formLogUp">
            <input v-model="firstName" class="modal__input first-name" type="text" placeholder="Имя">
            <input v-model="email" class="modal__input login" type="text" placeholder="Эл. почта">
            <input v-model="password" class="modal__input password-first" type="password" placeholder="Пароль">
            <button class="modal__btn-signup-ent _hover01" type="submit">Зарегистрироваться</button>
            <div class="modal__form-group">
              <p>Уже есть аккаунт? <router-link to="{ name: 'signin'}">Войдите здесь</router-link></p>
            </div>
          </form>
				</div>
			</div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      email: '',
      password: ''
    };
  },
  methods: {
    handleSubmit() {
      console.log('Имя:', this.firstName);
      console.log('Email:', this.email);
      console.log('Пароль:', this.password);
    }
  }
};
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
