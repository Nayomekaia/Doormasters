<script>
    import { Breadcrumb, place } from "$lib";
  
    export let title = "";
    export let description = "";
    export let image = "";
    export let alt = "";
  </script>
  
  <section class="wrapper-hero" class:no-image={image === "none"}>
    <article class="hero" class:no-image={image === "none"} id="main">
      
      <!-- LEFT CONTENT -->
      <section class="hero-content">
        <Breadcrumb />
  
        <h1>{title}</h1>
        <p>{description}</p>
  
        <section class="hero-cta">
          <slot name="primary" />
          <slot name="secondary" />
        </section>
      </section>
  
      <!-- RIGHT MEDIA -->
      {#if image !== "none"}
        <section class="hero-media">
          {#if image}
            <img src={image} alt={alt} loading="lazy" />
          {:else}
            <img src={place} alt={alt || "placeholder"} loading="lazy" />
          {/if}
  
          <slot name="media" />
          <slot />
        </section>
      {/if}
  
    </article>
  </section>
  
  <style>
    .wrapper-hero {
      background-color: var(--color-white);
      display: flex;
      justify-content: center;
      padding: 5rem 2rem 0;
      border-bottom: 1px solid var(--neutral-900);
      box-shadow: 0 2px 5px var(--neutral-900);
    }

    .wrapper-hero.no-image {
      border-bottom: none;
      box-shadow: none;
    }
  
    .hero {
      width: 100%;
      max-width: 1400px;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: center;
      margin-bottom: 2rem;
    }

    .hero.no-image {
      justify-content: center;
    }

    .hero.no-image .hero-content {
      align-items: center;
      text-align: center;
      max-width: 800px;
    }
  
    .hero-content {
      width: 100%;
      max-width: 680px;
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }
  
    .hero-content h1 {
      color: var(--color-blue-dark);
    }

    p {
        color: var(--color-blue-dark);
        line-height : var(--p-l-line-height);
        max-width: 500px;
    }
  
    .hero-cta {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  
    .hero-media {
      width: 100%;
    }
  
    .hero-media :global(img) {
      width: 100%;
      height: 400px;
      aspect-ratio: 16 / 9;
      object-fit: cover;
      border-radius: 5px;
      display: block;
    }
  
    @media (min-width: 1055px) {
      .hero {
        flex-direction: row;
        align-items: flex-start; 
        gap: 1rem;
      }

      .hero.no-image {
        flex-direction: column;
        align-items: center;
      }

      .hero-content {
        flex: 1;
        max-width: none;
        display: flex;
        flex-direction: column;
        justify-content: flex-start; 
        padding-top: 0;
      }

      .hero-media {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start; 
      }
    }
  </style>