<script>
    export let services = [];
  </script>
  
  <section class="why-section">
    <div class="container">
      <h2 class="section-title">Waarom kiezen voor Doormasters?</h2>
      <p class="section-intro">
        Mensen kiezen voor Doormasters omdat wij het in één keer goed doen. Van advies en opmeten tot
        montage en aftercare werken wij met vakmanschap en maatwerk. Zo zorgen we ervoor dat jouw
        deur perfect past, er strak uitziet en jarenlang betrouwbaar functioneert.
      </p>
  
      <div class="cards-grid">
        {#each services as service (service.id)}
          <div class="card">
            <span class="card-number">{service.sort_order}</span>
            <div class="card-inner">
              <h4 class="card-title">{service.title}</h4>
              <p class="card-body">{service.body}</p>
              {#if service.image}
                <div class="card-image-wrap">
                  <img src={service.image} alt={service.title} class="card-image" loading="lazy" />
                </div>
              {/if}
            </div>
          </div>
        {/each}
        <h3 class="footer-tagline">Bij Doormasters bouwen we voor de toekomst</h3>
      </div>
  
    </div>
  </section>
  
  <style>
    .why-section {
      padding: 80px 24px;
    }
  
    .container {
      max-width: 1100px;
      margin: 0 auto;
    }
  
    .section-title {
      text-align: center;
      margin: 0 0 20px;
    }
  
    .section-intro {
      text-align: left;
      max-width: 680px;
      margin: 0 auto 4rem;
      line-height: 1.75;
    }

    /* ── MOBILE FIRST: 1 kolom ── */
    .cards-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 80px 28px;
    }

    .card {
      position: relative;
      padding-top: 56px;
      padding-left: 8px;
      display: flex;
      flex-direction: column;
    }

    .card-number {
      position: absolute;
      top: -10px;
      left: -14px;
      font-size: 9rem;
      font-family: var(--font-primary);
      font-weight: var(--fw-extrabold);
      color: var(--color-blue-dark);
      line-height: 1;
      z-index: 0;
      pointer-events: none;
      user-select: none;
    }
  
    .card-inner {
      position: relative;
      z-index: 1;
      border: 1.5px solid #d4dff0;
      border-radius: 6px;
      padding: 22px 22px 0;
      background: var(--color-white);
      box-shadow: 0 2px 18px rgba(26, 46, 90, 0.07);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      flex: 1;
      transition: transform 0.25s ease, box-shadow 0.25s ease;
    }

    .card-inner:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 32px rgba(26, 46, 90, 0.15);
    }

    .card-title {
      margin: 0 0 10px;
    }
  
    .card-body {
      margin: 0 0 18px;
    }
  
    .card-image-wrap {
      margin: auto -22px 0;
    }
  
    .card-image {
      width: 100%;
      height: 190px;
      object-fit: cover;
      display: block;
    }
  
    .footer-tagline {
      text-align: center;
      margin-top: 16px;
    }

    /* ── TABLET: 2 kolommen ── */
    @media (min-width: 768px) {
      .section-intro {
        margin-bottom: 6rem;
      }

      .cards-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 100px 28px;
      }

      .card-number {
        font-size: 12rem;
        top: -20px;
        left: -10px;
      }

      .footer-tagline {
        text-align: right;
      }
    }

    /* ── DESKTOP: 3 kolommen ── */
    @media (min-width: 1055px) {
      .section-intro {
        margin-bottom: 15rem;
      }

      .cards-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 150px 28px;
      }

      .card-number {
        font-size: 30rem;
        top: -190px;
        left: 40px;
      }

      .card:nth-child(4) {
        grid-column: 1 / 2;
      }

      .card:nth-child(5) {
        grid-column: 2 / 3;
      }
    }
  </style>