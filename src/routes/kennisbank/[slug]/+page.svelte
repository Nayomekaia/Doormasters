<script>
    export let data;
    let artikel = data.artikel;
    import { Button } from '$lib';
  </script>
  
  <svelte:head>
    <title>{artikel.title} | Doormasters Kennisbank</title>
    {#if artikel.excerpt || artikel.description}
      <meta name="description" content={artikel.excerpt || artikel.description}>
    {/if}
  </svelte:head>
  
  <main class="article-main">
    <!-- Hero Image -->
    {#if artikel.image}
    <figure class="article-hero">
      <img src={artikel.image} alt={artikel.title}>
    </figure>
    {/if}
  
    <article class="article-container">
      <!-- Article Header -->
      <header class="article-header">
        {#if artikel.category}
          <span class="article-category">{artikel.category}</span>
        {/if}
        
        <h1 class="article-title">{artikel.title}</h1>
        
        {#if artikel.excerpt || artikel.description}
          <p class="article-lead">{artikel.excerpt || artikel.description}</p>
        {/if}
  
        <!-- Meta Info -->
        <aside class="article-meta">
          {#if artikel.author}
            <span class="meta-author">Door {artikel.author}</span>
          {/if}
          {#if artikel.created_at || artikel.published_at}
            <time class="meta-date" datetime={artikel.created_at || artikel.published_at}>
              {new Date(artikel.created_at || artikel.published_at).toLocaleDateString('nl-NL', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          {/if}
          {#if artikel.reading_time}
            <span class="meta-reading-time">{artikel.reading_time} min lezen</span>
          {/if}
        </aside>
      </header>
  
      <!-- Article Content -->
      <section class="article-content">
        {@html artikel.content}
      </section>

      <section class="article-body">
        {@html artikel.body}
      </section>
  
  
      <!-- Article Footer -->
      <footer class="article-footer">
        <nav class="article-navigation">
          <Button variant="outline" href="/kennisbank" class="back-link"> Terug naar kennisbank</Button>
        </nav>
  
        {#if artikel.tags && artikel.tags.length > 0}
          <aside class="article-tags">
            <span class="tags-label">Tags:</span>
            <ul class="tags-list">
              {#each artikel.tags as tag}
                <li>
                  <a href={`/kennisbank?tag=${tag}`}>{tag}</a>
                </li>
              {/each}
            </ul>
          </aside>
        {/if}
      </footer>
    </article>
  </main>
  
  <style>
    .article-main {
      background-color: #ffffff;
      min-height: 100vh;
    }
  
    /* HERO IMAGE */
    .article-hero {
      margin: 0;
      width: 100%;
      max-height: 500px;
      overflow: hidden;
      background-color: #f5f5f5;
    }
  
    .article-hero img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  
    /* ARTICLE CONTAINER */
    .article-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 3rem 2rem;
    }
  
    /* ARTICLE HEADER */
    .article-header {
      margin-bottom: 3rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid #e5e5e5;
    }
  
    .article-category {
      display: inline-block;
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
  
      font-weight: 600;
      margin-bottom: 1rem;
    }
  
    .article-title {
      font-size: clamp(2rem, 5vw, 3rem);
      font-weight: 600;
      line-height: 1.2;
      margin-bottom: 1.5rem;

    }
  
    .article-lead {
      font-size: 1.25rem;
      line-height: 1.6;
      margin-bottom: 2rem;
    }
  
    /* META INFO */
    .article-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      font-size: 0.875rem;
      color: var(--color-dark-blue);
    }
  
    .meta-author,
    .meta-date,
    .meta-reading-time {
      display: inline-block;
    }
  
    .meta-author {
      font-weight: 600;

    }
  
  
    /* ARTICLE CONTENT */
    .article-content {
      font-size: 1.0625rem;
      line-height: 1.8;
      color: var(--color-dark-blue);
    }
  
    .article-content :global(h2) {
      font-size: 2rem;
      font-weight: 600;
      line-height: 1.3;
      margin-top: 3rem;
      margin-bottom: 1.5rem;

    }
  
    .article-content :global(h3) {
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 1.4;
      margin-top: 2.5rem;
      margin-bottom: 1rem;
    }
  
    .article-content :global(h4) {
      font-size: 1.25rem;
      font-weight: 600;
      line-height: 1.4;
      margin-top: 2rem;
      margin-bottom: 1rem;
      color: #0a0a0a;
    }
  
    .article-content :global(p) {
      margin-bottom: 1.5rem;
    }
  
    .article-content :global(ul),
    .article-content :global(ol) {
      margin-bottom: 1.5rem;
      padding-left: 1.5rem;
    }
  
    .article-content :global(li) {
      margin-bottom: 0.5rem;
    }
  
    .article-content :global(blockquote) {
      border-left: 4px solid #1e3a8a;
      padding-left: 1.5rem;
      margin: 2rem 0;
      font-style: italic;
      color: #525252;
    }
  
    .article-content :global(img) {
      max-width: 100%;
      height: auto;
      border-radius: 4px;
      margin: 2rem 0;
    }
  
    .article-content :global(a) {
      color: #1e3a8a;
      text-decoration: underline;
      transition: color 0.3s ease;
    }
  
    .article-content :global(a:hover) {
      color: #2563eb;
    }
  
    .article-content :global(code) {
      background-color: #f5f5f5;
      padding: 0.2rem 0.4rem;
      border-radius: 3px;
      font-family: monospace;
      font-size: 0.9em;
    }
  
    .article-content :global(pre) {
      background-color: #f5f5f5;
      padding: 1.5rem;
      border-radius: 4px;
      overflow-x: auto;
      margin: 2rem 0;
    }
  
    .article-content :global(pre code) {
      background-color: transparent;
      padding: 0;
    }
  
    .article-content :global(table) {
      width: 100%;
      border-collapse: collapse;
      margin: 2rem 0;
    }
  
    .article-content :global(th),
    .article-content :global(td) {
      border: 1px solid #e5e5e5;
      padding: 0.75rem;
      text-align: left;
    }
  
    .article-content :global(th) {
      background-color: #f5f5f5;
      font-weight: 600;
    }
  
    /* ARTICLE FOOTER */
    .article-footer {
      margin-top: 4rem;
      padding-top: 2rem;
      border-top: 1px solid #e5e5e5;
    }
  
    .article-navigation {
      margin-bottom: 2rem;
    }
  
    .back-link {
      display: inline-block;
      font-size: 0.9375rem;
      color: #1e3a8a;
      text-decoration: none;
      font-weight: 600;
      transition: transform 0.3s ease;
    }
  
    .back-link:hover {
      transform: translateX(-4px);
    }
  
    /* TAGS */
    .article-tags {
      margin-top: 2rem;
    }
  
    .tags-label {
      display: block;
      font-size: 0.875rem;
      font-weight: 600;
      color: #0a0a0a;
      margin-bottom: 0.75rem;
    }
  
    .tags-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
  
    .tags-list li a {
      display: inline-block;
      padding: 0.5rem 1rem;
      background-color: #f5f5f5;
      color: #525252;
      font-size: 0.875rem;
      text-decoration: none;
      border-radius: 20px;
      transition: all 0.3s ease;
    }
  
    .tags-list li a:hover {
      background-color: #1e3a8a;
      color: #ffffff;
    }
  
    /* TABLET */
    @media (min-width: 768px) {
      .article-hero {
        max-height: 600px;
      }
  
      .article-container {
        padding: 4rem 3rem;
      }
  
      .article-header {
        margin-bottom: 4rem;
      }
  
      .article-content {
        font-size: 1.125rem;
      }
    }
  
    /* DESKTOP */
    @media (min-width: 1024px) {
      .article-container {
        padding: 5rem 4rem;
      }
  
      .article-header {
        margin-bottom: 5rem;
      }
    }
  
    /* PRINT */
    @media print {
      .article-navigation,
      .article-tags {
        display: none;
      }
  
      .article-content :global(a) {
        color: #0a0a0a;
        text-decoration: none;
      }
    }
  </style>