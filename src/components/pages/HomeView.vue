<template>
  <div class="wrapper">
    <header class="header">
      <div class="container">
        <div class="header__block">
          <div class="header__logo">
            <a href="/" aria-label="Главная страница">
              <img src="@/components/basecomop/icons/logo.svg" alt="Логотип" />
            </a>
          </div>
          <nav class="header__nav">
            <button class="header__btn-main-new" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </button>
            <div class="header__user" role="menu">
              <button
                class="header__user-btn"
                aria-haspopup="true"
                :aria-expanded="isMenuOpen"
                @click="toggleMenu"
              >
                Ivan Ivanov
              </button>
              <div class="header__user-menu" role="menu" :class="{ 'is-open': isMenuOpen }">
                <p class="user-name">Ivan Ivanov</p>
                <p class="user-email">ivan.ivanov@gmail.com</p>
                <div class="theme-toggle">
                  <label>
                    Темная тема
                    <input type="checkbox" class="checkbox" />
                  </label>
                </div>
                <button class="logout-btn">Выйти</button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>

    <main class="main">
      <div class="container">
        <div class="main__block">
          <div class="main__content">
            <div class="task-columns">
              <div class="task-column">
                <h2 class="column-title">Без статуса</h2>
                <div class="card-list">
                  <div class="card">
                    <div class="card__theme card__theme--orange">Web Design</div>
                    <div class="card__content">
                      <h3 class="card__title">Название задачи</h3>
                      <div class="card__date">
                        <svg class="date-icon" width="13" height="13" viewBox="0 0 13 13"></svg>
                        <span>30.10.23</span>
                      </div>
                    </div>
                    <div class="card__actions"></div>
                  </div>
                </div>
              </div>

              <div class="task-column">
                <h2 class="column-title">Нужно сделать</h2>
              </div>

              <div class="task-column">
                <h2 class="column-title">В работе</h2>
              </div>

              <div class="task-column">
                <h2 class="column-title">Тестирование</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
  },
}
</script>
<style scoped>
.header__user-menu {
  display: none;
  position: absolute;
  background: white;
  border: 1px solid #ccc;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.header__user-btn {
  border: none;
  color: #565eef;
  width: 71px;
  height: 10px;
  opacity: 1;
  font-family: Roboto;
  font-weight: 500;
  font-style: Medium;
  font-size: 14px;
  line-height: 10px;
  letter-spacing: 0%;
  text-align: center;
}

.header__user-menu.is-open {
  display: block;
}

.header__user-menu.is-open {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
