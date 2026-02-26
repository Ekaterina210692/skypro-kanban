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
              <button class="header__user-btn" aria-haspopup="true" aria-expanded="false">
                Ivan Ivanov
              </button>
              <div class="header__user-menu" role="menu">
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
