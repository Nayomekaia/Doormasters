<script>
    import { Button } from '$lib';
    import { page } from "$app/stores";
  </script>
  
  <section class="bottom-nav">
    <ul>
      <li>
        <a class="menu-button {$page.url.pathname === '/' ? 'active' : ''}" href="/">HOME</a>
      </li>
      <li>
        <a class="menu-button {$page.url.pathname === '/projecten' ? 'active' : ''}" href="/projecten">PROJECTEN</a>
      </li>
      <li>
        <a class="menu-button {$page.url.pathname === '/werkwijze' ? 'active' : ''}" href="/werkwijze">WERKWIJZE</a>
      </li>
      <li>
        <a class="menu-button {$page.url.pathname === '/kennisbank' ? 'active' : ''}" href="/kennisbank">KENNISBANK</a>
      </li>
      <li>
        <a class="menu-button {$page.url.pathname === '/partners' ? 'active' : ''}" href="/partners">PARTNERS</a>
      </li>
      <li>
        <a class="menu-button {$page.url.pathname === '/over-ons' ? 'active' : ''}" href="/over-ons">OVER ONS</a>
      </li>
      <li>
        <a class="menu-button {$page.url.pathname === '/contact' ? 'active' : ''}" href="/contact">CONTACT</a>
      </li>
  
      <li class="offerte-btn">
        <Button variant="silver" href="/offerte">OFFERTE</Button>
      </li>
    </ul>
  </section>
  
  <style>
  .bottom-nav {
    display: none;
    background: var(--color-blue-dark);
  }
  
  .bottom-nav ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;         
    gap: clamp(1rem, 4vw, 5rem); 
    list-style: none;
    padding: 1rem;
    margin: 0;
  }
  
  .bottom-nav li {
    display: flex;
    align-items: center;
  }
  
  
  .bottom-nav a.menu-button {
    display: inline-flex;
    align-items: center;
    height: 30px;
    color: var(--color-white);
    text-decoration: none;
    position: relative;
  }
  
  .bottom-nav a.menu-button::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    height: 2px;
    width: 0%;
    background: currentColor;
    transition: width 0.25s ease;
  }
  

  .bottom-nav a.menu-button:hover::after {
    width: 100%;
  }
  

  .bottom-nav a.menu-button.active::after {
    width: 100%;
  }
  @media (min-width: 600px) {

  
    
  }
  @media (min-width: 1055px) {
    .bottom-nav {
      display: block;
    }
  }
  </style>
  