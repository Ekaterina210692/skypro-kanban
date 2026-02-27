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
                    <div class="card__theme"><div class="card__theme-orange">Web Design</div>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 14C12.1046 14 13 13.1046 13 12C13 10.8954 12.1046 10 11 10C9.89543 10 9 10.8954 9 12C9 13.1046 9.89543 14 11 14Z" fill="#94A6BE"/>
<path d="M18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14Z" fill="#94A6BE"/>
<path d="M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14Z" fill="#94A6BE"/>
</svg></div>
                    <div class="card__content">
                      <h3 class="card__title">Название задачи</h3>
                      <div class="card__date">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
													<g clip-path="url(#clip0_1_415)">
														<path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" stroke-width="0.8" stroke-linejoin="round"></path>
														<path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"></path>
													</g>
													<defs>
														<clipPath id="clip0_1_415">
															<rect width="13" height="13" fill="white"></rect>
														</clipPath>
													</defs>
												</svg>
                        <span>30.10.23</span>
                      </div>
                    </div>
                    <div class="card__actions"></div>
                  </div>
                  <div class="card">
                    <div class="card__theme"><div class="card__theme-green">Research</div>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 14C12.1046 14 13 13.1046 13 12C13 10.8954 12.1046 10 11 10C9.89543 10 9 10.8954 9 12C9 13.1046 9.89543 14 11 14Z" fill="#94A6BE"/>
<path d="M18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14Z" fill="#94A6BE"/>
<path d="M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14Z" fill="#94A6BE"/>
</svg></div>
                    <div class="card__content">
                      <h3 class="card__title">Название задачи</h3>
                      <div class="card__date">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
													<g clip-path="url(#clip0_1_415)">
														<path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" stroke-width="0.8" stroke-linejoin="round"></path>
														<path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"></path>
													</g>
													<defs>
														<clipPath id="clip0_1_415">
															<rect width="13" height="13" fill="white"></rect>
														</clipPath>
													</defs>
												</svg>
                        <span>30.10.23</span>
                      </div>
                    </div>
                    <div class="card__actions"></div>
                  </div>
                  <div class="card">
                    <div class="card__theme"><div class="card__theme-orange">Web Design</div>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 14C12.1046 14 13 13.1046 13 12C13 10.8954 12.1046 10 11 10C9.89543 10 9 10.8954 9 12C9 13.1046 9.89543 14 11 14Z" fill="#94A6BE"/>
<path d="M18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14Z" fill="#94A6BE"/>
<path d="M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14Z" fill="#94A6BE"/>
</svg></div>
                    <div class="card__content">
                      <h3 class="card__title">Название задачи</h3>
                      <div class="card__date">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
													<g clip-path="url(#clip0_1_415)">
														<path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" stroke-width="0.8" stroke-linejoin="round"></path>
														<path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"></path>
													</g>
													<defs>
														<clipPath id="clip0_1_415">
															<rect width="13" height="13" fill="white"></rect>
														</clipPath>
													</defs>
												</svg>
                        <span>30.10.23</span>
                      </div>
                    </div>
                    <div class="card__actions"></div>
                  </div>
                  <div class="card">
                    <div class="card__theme"><div class="card__theme-purple">Copywriting</div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 14C12.1046 14 13 13.1046 13 12C13 10.8954 12.1046 10 11 10C9.89543 10 9 10.8954 9 12C9 13.1046 9.89543 14 11 14Z" fill="#94A6BE"/>
<path d="M18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14Z" fill="#94A6BE"/>
<path d="M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14Z" fill="#94A6BE"/>
</svg></div>
                    <div class="card__content">
                      <h3 class="card__title">Название задачи</h3>
                      <div class="card__date">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
													<g clip-path="url(#clip0_1_415)">
														<path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" stroke-width="0.8" stroke-linejoin="round"></path>
														<path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"></path>
													</g>
													<defs>
														<clipPath id="clip0_1_415">
															<rect width="13" height="13" fill="white"></rect>
														</clipPath>
													</defs>
												</svg>
                        <span>30.10.23</span>
                      </div>
                    </div>
                    <div class="card__actions"></div>
                  </div>
                  <div class="card">
                    <div class="card__theme"><div class="card__theme-green">Research</div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 14C12.1046 14 13 13.1046 13 12C13 10.8954 12.1046 10 11 10C9.89543 10 9 10.8954 9 12C9 13.1046 9.89543 14 11 14Z" fill="#94A6BE"/>
<path d="M18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14Z" fill="#94A6BE"/>
<path d="M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14Z" fill="#94A6BE"/>
</svg></div>
                    <div class="card__content">
                      <h3 class="card__title">Название задачи</h3>
                      <div class="card__date">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
													<g clip-path="url(#clip0_1_415)">
														<path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" stroke-width="0.8" stroke-linejoin="round"></path>
														<path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"></path>
													</g>
													<defs>
														<clipPath id="clip0_1_415">
															<rect width="13" height="13" fill="white"></rect>
														</clipPath>
													</defs>
												</svg>
                        <span>30.10.23</span>
                      </div>
                    </div>
                    <div class="card__actions"></div>
                  </div>
                </div>
              </div>
              <div class="task-column">
                <h2 class="column-title">Нужно сделать</h2>
                <div class="card-list">
                  <div class="card">
                    <div class="card__theme"><div class="card__theme-green">Research</div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 14C12.1046 14 13 13.1046 13 12C13 10.8954 12.1046 10 11 10C9.89543 10 9 10.8954 9 12C9 13.1046 9.89543 14 11 14Z" fill="#94A6BE"/>
<path d="M18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14Z" fill="#94A6BE"/>
<path d="M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14Z" fill="#94A6BE"/>
</svg>
                  </div>
                    <div class="card__content">
                      <h3 class="card__title">Название задачи</h3>
                      <div class="card__date">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
													<g clip-path="url(#clip0_1_415)">
														<path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" stroke-width="0.8" stroke-linejoin="round"></path>
														<path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"></path>
													</g>
													<defs>
														<clipPath id="clip0_1_415">
															<rect width="13" height="13" fill="white"></rect>
														</clipPath>
													</defs>
												</svg>
                        <span>30.10.23</span>
                      </div>
                    </div>
                    <div class="card__actions"></div>
                  </div>
                </div>
              </div>
              <div class="task-column">
                <h2 class="column-title">В работе</h2>
                <div class="card-list">
                  <div class="card">
                    <div class="card__theme"><div class="card__theme-green">Research</div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 14C12.1046 14 13 13.1046 13 12C13 10.8954 12.1046 10 11 10C9.89543 10 9 10.8954 9 12C9 13.1046 9.89543 14 11 14Z" fill="#94A6BE"/>
<path d="M18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14Z" fill="#94A6BE"/>
<path d="M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14Z" fill="#94A6BE"/>
</svg></div>
                    <div class="card__content">
                      <h3 class="card__title">Название задачи</h3>
                      <div class="card__date">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
													<g clip-path="url(#clip0_1_415)">
														<path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" stroke-width="0.8" stroke-linejoin="round"></path>
														<path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"></path>
													</g>
													<defs>
														<clipPath id="clip0_1_415">
															<rect width="13" height="13" fill="white"></rect>
														</clipPath>
													</defs>
												</svg>
                        <span>30.10.23</span>
                      </div>
                    </div>
                    <div class="card__actions"></div>
                  </div>
                  <div class="card">
                    <div class="card__theme"><div class="card__theme-purple">Copywriting</div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 14C12.1046 14 13 13.1046 13 12C13 10.8954 12.1046 10 11 10C9.89543 10 9 10.8954 9 12C9 13.1046 9.89543 14 11 14Z" fill="#94A6BE"/>
<path d="M18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14Z" fill="#94A6BE"/>
<path d="M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14Z" fill="#94A6BE"/>
</svg></div>
                    <div class="card__content">
                      <h3 class="card__title">Название задачи</h3>
                      <div class="card__date">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
													<g clip-path="url(#clip0_1_415)">
														<path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" stroke-width="0.8" stroke-linejoin="round"></path>
														<path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"></path>
													</g>
													<defs>
														<clipPath id="clip0_1_415">
															<rect width="13" height="13" fill="white"></rect>
														</clipPath>
													</defs>
												</svg>
                        <span>30.10.23</span>
                      </div>
                    </div>
                    <div class="card__actions"></div>
                  </div>
                  <div class="card">
                    <div class="card__theme"><div class="card__theme-orange">Web Design</div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 14C12.1046 14 13 13.1046 13 12C13 10.8954 12.1046 10 11 10C9.89543 10 9 10.8954 9 12C9 13.1046 9.89543 14 11 14Z" fill="#94A6BE"/>
<path d="M18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14Z" fill="#94A6BE"/>
<path d="M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14Z" fill="#94A6BE"/>
</svg></div>
                    <div class="card__content">
                      <h3 class="card__title">Название задачи</h3>
                      <div class="card__date">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
													<g clip-path="url(#clip0_1_415)">
														<path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" stroke-width="0.8" stroke-linejoin="round"></path>
														<path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"></path>
													</g>
													<defs>
														<clipPath id="clip0_1_415">
															<rect width="13" height="13" fill="white"></rect>
														</clipPath>
													</defs>
												</svg>
                        <span>30.10.23</span>
                      </div>
                    </div>
                    <div class="card__actions"></div>
                  </div>
                </div>
              </div>
              <div class="task-column">
                <h2 class="column-title">Тестирование</h2>
                <div class="card-list">
                  <div class="card">
                    <div class="card__theme"><div class="card__theme-green">Research</div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 14C12.1046 14 13 13.1046 13 12C13 10.8954 12.1046 10 11 10C9.89543 10 9 10.8954 9 12C9 13.1046 9.89543 14 11 14Z" fill="#94A6BE"/>
<path d="M18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14Z" fill="#94A6BE"/>
<path d="M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14Z" fill="#94A6BE"/>
</svg></div>
                    <div class="card__content">
                      <h3 class="card__title">Название задачи</h3>
                      <div class="card__date">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
													<g clip-path="url(#clip0_1_415)">
														<path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" stroke-width="0.8" stroke-linejoin="round"></path>
														<path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"></path>
													</g>
													<defs>
														<clipPath id="clip0_1_415">
															<rect width="13" height="13" fill="white"></rect>
														</clipPath>
													</defs>
												</svg>
                        <span>30.10.23</span>
                      </div>
                    </div>
                    <div class="card__actions"></div>
                  </div>
                </div>
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
