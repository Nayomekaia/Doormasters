<script>
  import { logo } from '$lib';
  import { page } from '$app/stores';
  
  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function closeMenu() {
    menuOpen = false;
  }
  
  function isActive(path) {
    return $page.url.pathname === path;
  }
</script>

<section class="topnav">
  <ul class="top-left">
    <li><a href="/particulier">Particulier</a></li>
    <li><span class="separator">|</span></li>
    <li><a href="/zakelijk">Zakelijk</a></li>
  </ul>

  <img src={logo} alt="Doormasters logo" class="logo" />

  <ul class="top-right">
    <li><a href="?lang=nl" class="active">NL</a></li>
    <li><span class="separator">|</span></li>
    <li><a href="?lang=en">EN</a></li>
    <li><span class="separator">|</span></li>
    <li><a href="?lang=es">ES</a></li>
  </ul>

  <!-- Hamburger Menu -->
  <button class="hamburger" on:click={toggleMenu} aria-label="Open menu">
    <span class={menuOpen ? 'open' : ''}></span>
    <span class={menuOpen ? 'open' : ''}></span>
    <span class={menuOpen ? 'open' : ''}></span>
  </button>
</section>

<div class="overlay {menuOpen ? 'active' : ''}">

  <button class="close-btn" on:click={closeMenu} aria-label="Close menu">×</button>

  <ul class="overlay-menu">
    <ul class="lang">
      <li><a href="?lang=nl" class="active">NL</a></li>
      <li><span class="separator">|</span></li>
      <li><a href="?lang=en">EN</a></li>
      <li><span class="separator">|</span></li>
      <li><a href="?lang=es">ES</a></li>
    </ul>
    <li><a href="/k." class:active={isActive('/')} on:click={closeMenu}>HOME</a></li>
    <li><a href="/projecte" class:active={isActive('/projecten')} on:click={closeMenu}>PROJECTEN</a></li>
    <li><a href="/service" class:active={isActive('/service')} on:click={closeMenu}>SERVICE</a></li>
    <li><a href="/kennisbank" class:active={isActive('/kennisbank')} on:click={closeMenu}>KENNISBANK</a></li>
    <li><a href="/partners" class:active={isActive('/partners')} on:click={closeMenu}>PARTNERS</a></li>
    <li><a href="/over-ons" class:active={isActive('/over-ons')} on:click={closeMenu}>OVER ONS</a></li>
    <li><a href="/contact" class:active={isActive('/contact')} on:click={closeMenu}>CONTACT</a></li>
    <li><a href="/offerte" class:active={isActive('/offerte')} on:click={closeMenu}>OFFERTE</a></li>
  </ul>
</div>

<style>
  
/* TOPNAV (ALGEMEEN) */

.topnav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: var(--color-white);
  border-bottom: 1px solid var(--neutral-900);
  box-shadow: 0 2px 5px var(--neutral-900);
  position: relative;
  z-index: 10;
}

.topnav ul {
  display: flex;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  color: var(--color-blue-dark);
  text-decoration: none;
}

.logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.top-left a{
  display: none;
}

.separator {
  color: var(--color-blue-dark);
  display: none;
}

.top-right a {
  display: none;
}

/*  HAMBURGER MENU  */

.hamburger {
  display: flex;
  flex-direction: column;
  width: 40px;
  height: 30px;
  justify-content: space-between;
  cursor: pointer;
  background: none;
  border: none;
  z-index: 20;
  position: relative;
  padding: 6px;
}

.hamburger span {
  height: 3px;
  width: 100%;
  background: linear-gradient(180deg, #b5b5b5, #8a8a8a, #6e6e6e);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25),
              0 2px 2px rgba(0, 0, 0, 0.15),
              inset 0 1px 0 rgba(255, 255, 255, 0.6);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 2px;
  transform-origin: center;
}

.hamburger:hover span:nth-child(1) {
  width: 120%;
  height: 3px;
  transform: translateX(-10%);
}

.hamburger:hover span:nth-child(2) {
  width: 100%;
  height: 3px;
}

.hamburger:hover span:nth-child(3) {
  width: 80%;
  height: 3px;
  transform: translateX(20%);
}

.hamburger span.open:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}

.hamburger span.open:nth-child(2) {
  opacity: 0;
  transform: translateX(20px);
}

.hamburger span.open:nth-child(3) {
  transform: rotate(-45deg) translate(8px, -8px);
}

/* OVERLAY MENU */

.overlay {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100%;
  background: var(--color-blue-dark);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 15;
  padding-top: 60px;
  overflow: hidden;
  box-shadow: -10px 0 30px rgba(174, 174, 174, 0.3);
}

.overlay::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(
    180deg,
    transparent 0%,
    #f6f6f6 20%,
    #cacaca 40%,
    #f6f6f6 60%,
    #cacaca 80%,
    transparent 100%
  );
  box-shadow: 0 0 20px rgba(246, 246, 246, 0.6),
              0 0 40px rgba(202, 202, 202, 0.4);
  animation: pulse-glow 3s ease-in-out infinite;
}

.overlay::after {
  content: "";
  position: absolute;
  inset: 0;
  background: 
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(255, 255, 255, 0.02) 2px,
      rgba(255, 255, 255, 0.02) 4px
    );
  pointer-events: none;
  opacity: 0.3;
}

@keyframes pulse-glow {
  0%, 100% { 
    opacity: 0.6;
    box-shadow: 0 0 20px rgba(246, 246, 246, 0.6),
                0 0 40px rgba(202, 202, 202, 0.4);
  }
  50% { 
    opacity: 1;
    box-shadow: 0 0 30px rgba(246, 246, 246, 0.8),
                0 0 60px rgba(202, 202, 202, 0.6);
  }
}

.overlay.active {
  right: 0;
}

.close-btn {
  position: absolute;
  top: 25px;
  right: 30px;
  font-size: 3rem;
  color: var(--color-white);
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  color: #cacaca;
  transform: rotate(90deg);
}

.overlay-menu {
  list-style: none;
  text-align: left;
  position: relative;
  z-index: 1;
}

.overlay-menu li {
  margin: 15px 0;
  list-style: none;
  opacity: 0;
  transform: translateY(30px) scale(0.9);
  animation: bounce-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
}

.overlay.active .overlay-menu li:nth-child(1) { animation-delay: 0s; }
.overlay.active .overlay-menu li:nth-child(2) { animation-delay: 0.05s; }
.overlay.active .overlay-menu li:nth-child(3) { animation-delay: 0.1s; }
.overlay.active .overlay-menu li:nth-child(4) { animation-delay: 0.15s; }
.overlay.active .overlay-menu li:nth-child(5) { animation-delay: 0.2s; }
.overlay.active .overlay-menu li:nth-child(6) { animation-delay: 0.25s; }
.overlay.active .overlay-menu li:nth-child(7) { animation-delay: 0.3s; }
.overlay.active .overlay-menu li:nth-child(8) { animation-delay: 0.35s; }
.overlay.active .overlay-menu li:nth-child(9) { animation-delay: 0.4s; }

@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.9);
  }
  60% {
    opacity: 1;
    transform: translateY(-5px) scale(1.02);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.overlay-menu li a {
  color: var(--color-white);
  transition: color 0.3s ease;
  font-size: var(--h2-size);
  position: relative;
  display: inline-block;
  padding: 5px 0;
}

.overlay-menu li a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #cacaca, #f6f6f6, #cacaca);
  transition: width 0.3s ease;
}

.overlay-menu li a.active::after {
  width: 100%;
}

.overlay-menu li a:hover::after {
  width: 100%;
}

.overlay-menu li a:hover {
  color: #f6f6f6;
}

/* Language selector */
.lang {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
  opacity: 0;
  transform: translateY(30px) scale(0.9);
  animation: bounce-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
}

.lang li {
  list-style: none;
}

.lang li a { 
  font-size: var(--p-size);
  color: var(--color-white);
  transition: color 0.3s ease;
  position: relative;
  display: inline-block;
  padding: 5px 0;
}

.lang li a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #cacaca, #f6f6f6, #cacaca);
  transition: width 0.3s ease;
}

.lang li a.active::after {
  width: 100%;
}

.lang li a:hover::after {
  width: 100%;
}

.lang li a:hover,
.lang li a.active {
  color: #f6f6f6;
}

.lang .separator {
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
}

/* ACCESSIBILITY */

@media (prefers-reduced-motion: reduce) {
  .overlay::before {
    animation: none;
  }
  
  .close-btn:hover {
    transform: none;
  }
  
  .overlay-menu li {
    animation: none;
    opacity: 1;
    transform: none;
  }
  
  .lang {
    animation: none;
    opacity: 1;
    transform: none;
  }
  
  .overlay {
    transition: right 0.3s ease;
  }
  
  .hamburger:hover span {
    transform: none;
    width: 100%;
    height: 4px;
  }
}

/*  DESKTOP  */

@media (min-width: 1055px) {
  .logo {
    position: static;
    transform: none;
    width: 160px;
  }

  .top-left a {
    display: flex;
  }

  .top-right {
    display: flex; 
    gap: 0.5rem;
  }

  .hamburger {
    display: none; 
  }

  .overlay {
    display: none;
  }

  .separator {
    color: var(--color-blue-dark);
    display: flex;
  }

  .top-right a {
    display: flex;
  }
}
 
</style>