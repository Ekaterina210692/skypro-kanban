<template>
  <div class="wrapper">
        <div class="container-signin">
            <div class="modal">
				<div class="modal__block">
					<div class="modal__ttl">
						<h2>Вход</h2>
					</div>
					<form @submit.prevent="handleSubmit" class="modal__form-login" id="formLogIn">
						<input class="modal__input" type="text" name="login" id="formlogin" placeholder="Эл. почта">
						<input class="modal__input" type="password" name="password" id="formpassword" placeholder="Пароль">
						<button class="modal__btn-enter _hover01" id="btnEnter" type="submit">Войти</button>
						<div class="modal__form-group">
							<p>Нужно зарегистрироваться?</p>
							<a href="signup.html">Регистрируйтесь здесь</a>
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
      login: '',
      password: ''
    };
  },
  methods: {
    handleSubmit() {
      console.log('Логин:', this.login);
      console.log('Пароль:', this.password);
    }
  }
};
</script>

<style>
@media (min-width: 1024px) {
  .modal {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

