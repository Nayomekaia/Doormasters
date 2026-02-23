<script>
  import { logo, tech, tuvsud, tuv, ce, hygienic } from '$lib';
</script>

<footer>
  <div class="wrapper">
    
    <!-- Logo -->
    <a href="/" class="logo">
      <img src={logo} alt="Terug naar homepagina" loading="lazy" />
    </a>

    <!-- Bedrijfsinfo -->
    <section class="company-info">
      <p>
        Doormasters is specialist in maatwerk deuren voor bedrijven en particulieren.
        Wij leveren duurzame, veilige en perfect passende deuroplossingen met vakmanschap,
        precisie en betrouwbare service.
      </p>
      
      <ul class="certificate">
        <li><img src={tuv} alt="TÜV certificaat" /></li>
        <li><img src={tuvsud} alt="TÜV SÜD certificaat" /></li>
        <li><img src={tech} alt="Technical approval certificaat" /></li>
        <li><img src={hygienic} alt="Hygienic certificaat" /></li>
        <li><img src={ce} alt="CE certificaat" /></li>
      </ul>
    </section>

    <!-- Menu -->
    <section class="menu-section">
      <details class="mobile-menu">
        <summary><h5>Menu</h5></summary>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/projecten">Projecten</a></li>
          <li><a href="/werkwijze">Werkwijze</a></li>
          <li><a href="/kennisbank">Kennisbank</a></li>
          <li><a href="/partners">Partners</a></li>
          <li><a href="/over-ons">Over ons</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </details>

      <div class="desktop-menu">
        <h5>Menu</h5>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/projecten">Projecten</a></li>
          <li><a href="/werkwijze">Werkwijze</a></li>
          <li><a href="/kennisbank">Kennisbank</a></li>
          <li><a href="/partners">Partners</a></li>
          <li><a href="/over-ons">Over ons</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </section>

    <!-- Contact -->
    <section class="contact-section">
      <details class="mobile-menu">
        <summary><h5>Contact</h5></summary>
        <p>Ons team staat klaar om u de juiste antwoorden te geven.</p>
        <ul>
          <li>Doormasters BV</li>
          <li>Noord 135 d</li>
          <li>2931SJ Krimpen aan de Lek</li>
          <li><a href="mailto:info@door-masters.nl">info@door-masters.nl</a></li>
          <li><a href="tel:0853031597">085 - 3031597</a></li>
        </ul>
      </details>

      <div class="desktop-menu">
        <h5>Contact</h5>
        <p>Ons team staat klaar om u de juiste antwoorden te geven.</p>
        <ul>
          <li>Doormasters BV</li>
          <li>Middelblok 136 d</li>
          <li>2831BP Gouderak</li>
          <li><a href="mailto:info@door-masters.nl">info@door-masters.nl</a></li>
          <li><a href="tel:0853031597">085 - 3031597</a></li>
        </ul>        
      </div>
    </section>

    <!-- Divider -->
    <div class="divider"></div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <p>© Doormasters BV. Alle rechten voorbehouden</p>
      <p>Made by CRE8 STUDIOS</p>
    </div>
  </div>
</footer>

<style>
  footer {
    width: 100%;
    background-color: var(--color-white);
    border-top: 1px solid var(--neutral-900);
    font-family: var(--font-primary);
  }

  .wrapper {
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem 5%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: var(--color-blue-dark);
  }

  .logo {
    display: inline-block;
    margin-bottom: 1rem;
  }

  .logo img {
    width: 180px;
    height: auto;
  }

  .logo:hover {
    opacity: 0.8;
  }

  p {
    line-height: 1.5;
    margin: 0;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  a {
    color: var(--color-blue-dark);
    text-decoration: none;
    transition: all 0.2s ease;
    font-family: var(--font-primary);
  }

  a:hover {
    text-decoration: underline;
  }

  li {
    transition: transform 0.15s ease;
  }

  li:hover {
    transform: translateX(3px);
  }

  .certificate {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 0.5rem;
  }

  .certificate img {
    height: 40px;
    width: auto;
  }

  .mobile-menu {
    display: block;
  }

  .desktop-menu {
    display: none;
  }

  summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    user-select: none;
    cursor: pointer;
    padding: 0.25rem 0;
    font-family: var(--font-primary);
  }

  summary h5 {
    margin: 0;
    /* GEEN font-size, styleguide bepaalt */
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary::after {
    content: "▼";
    font-size: 0.7rem;
    margin-left: 0.25rem;
    transition: transform 0.3s ease;
  }

  details[open] summary::after {
    transform: rotate(180deg);
  }

  details ul {
    padding-top: 0.5rem;
    transition: max-height 0.3s ease; /* vloeiende animatie */
    overflow: hidden;
  }

  .divider {
    width: 100%;
    height: 1px;
    background-color: var(--neutral-900);
    margin: 1rem 0;
  }

  .footer-bottom {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 0.875rem;
    opacity: 0.7;
  }

  @media (min-width: 1055px) {
    .wrapper {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 2rem;
      padding: 3rem 5%;
    }

    .logo {
      grid-column: 1 / 2;
      grid-row: 1;
      margin-bottom: 0;
    }

    .menu-section {
      grid-column: 2 / 3;
      grid-row: 1 / 3;
    }

    .contact-section {
      grid-column: 3 / 4;
      grid-row: 1 / 3;
    }

    .company-info {
      grid-column: 1 / 2;
      grid-row: 2;
    }

    .company-info p {
      max-width: 400px;
    }

    .company-info .certificate {
      grid-column: 1 / 2;
      grid-row: 3;
    }

    .divider {
      grid-column: 1 / -1;
      grid-row: 4;
      margin: 1rem 0;
    }

    .footer-bottom {
      grid-column: 1 / -1;
      grid-row: 5;
      flex-direction: row;
      justify-content: space-between;
    }

    .mobile-menu {
      display: none;
    }

    .desktop-menu {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
</style>
