<script>
  import { logo } from '$lib';
  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function closeMenu() {
    menuOpen = false;
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

  <!-- Hamburger -->
  <button class="hamburger" on:click={toggleMenu} aria-label="Open menu">
    <span class={menuOpen ? 'open' : ''}></span>
    <span class={menuOpen ? 'open' : ''}></span>
    <span class={menuOpen ? 'open' : ''}></span>
  </button>
</section>

<div class="overlay {menuOpen ? 'active' : ''}">

  <button class="close-btn" on:click={closeMenu} aria-label="Close menu">×</button>

  <!-- Main overlay menu -->
  <ul class="overlay-menu">
    <ul class="lang">
      <li><a href="?lang=nl" class="active">NL</a></li>
      <li><span class="separator">|</span></li>
      <li><a href="?lang=en">EN</a></li>
      <li><span class="separator">|</span></li>
      <li><a href="?lang=es">ES</a></li>
    </ul>
    <li><a href="/" on:click={closeMenu}>HOME</a></li>
    <li><a href="/projecten" on:click={closeMenu}>PROJECTEN</a></li>
    <li><a href="/service" on:click={closeMenu}>SERVICE</a></li>
    <li><a href="/kennisbank" on:click={closeMenu}>KENNISBANK</a></li>
    <li><a href="/partners" on:click={closeMenu}>PARTNERS</a></li>
    <li><a href="/over-ons" on:click={closeMenu}>OVER ONS</a></li>
    <li><a href="/contact" on:click={closeMenu}>CONTACT</a></li>
    <li><a href="/offerte" on:click={closeMenu}>OFFERTE</a></li>
  </ul>
</div>

<style>
  
.topnav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
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
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
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

/* Hamburger */
.hamburger {
  display: flex;
  flex-direction: column;
  width: 28px;
  height: 22px;
  justify-content: space-between;
  cursor: pointer;
  background: none;
  border: none;
  z-index: 20;
}

.hamburger span {
  height: 3px;
  background: var(--color-blue-dark);
  transition: all 0.3s ease;
}

.hamburger span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger span.open:nth-child(2) {
  opacity: 0;
}

.hamburger span.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Overlay menu */
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
  transition: right 0.5s ease;
  z-index: 15;
  padding-top: 60px;
}

.overlay.active {
  right: 0;
}

/* Close button */
.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 3rem;
  color: var(--color-white);
  background: none;
  border: none;
  cursor: pointer;
}

.overlay-menu {
  list-style: none;
  text-align: left;
}

.overlay-menu li {
  margin: 15px 0;
}

.overlay-menu li a {
  color: var(--color-white);
  transition: color 0.3s;
  font-size: var(--h2-size);
}

.overlay-menu li a:hover {
  color: var(--color-highlight);
}

.lang {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 2rem;

  li a { 
    font-size: var(--p-xxs-size);
  }
}


/* Desktop */
@media (min-width: 1055px) {
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

  .logo {
    width: 160px;
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
