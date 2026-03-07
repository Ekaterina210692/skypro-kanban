<template>
    <div class="wrapper">
        <div class="container-signup">
            <div class="modal">
				<div class="modal__block">
					<div class="modal__ttl">
						<h2>Регистрация</h2>
					</div>
					<form @submit.prevent="handleSubmit" class="modal__form-login" id="formLogUp">
						<input class="modal__input first-name" type="text" name="first-name" id="first-name" placeholder="Имя">
						<input class="modal__input login" type="text" name="login" id="loginReg" placeholder="Эл. почта">
						<input class="modal__input password-first" type="password" name="password" id="passwordFirst" placeholder="Пароль">
						<button class="modal__btn-signup-ent _hover01" id="SignUpEnter"><a href="#formLogUp">Зарегистрироваться</a> </button>
						<div class="modal__form-group">
							<p>Уже есть аккаунт?  <a href="#formLogIn">Войдите здесь</a></p>
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
