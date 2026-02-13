<script>
    import { page } from "$app/stores";
  
    // Current URL path and split it into usable segments (remove the empty ones)
    $: segments = $page.url.pathname.split("/").filter(Boolean);
  
    // The first part of the URL is the main section of the page (example: /publicaties/slug -> "publicaties")
    $: firstBreadcrumb = segments[0];
  
    // Replace '-' with space and capitalize the first letter of words 
    const format = breadcrumb => breadcrumb.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  </script>
  
  <!-- Only show breadcrumbs when there's at least one segment in the URL -->
  {#if firstBreadcrumb}
      <nav class="hero-breadcrumb" aria-label="Breadcrumb">
  
          <!-- Always start the breadcrumb trail with Home -->
          <a href="/">Home</a>
          <span class="separator"> \ </span>
  
          <!-- Show the main section based on the first URL segment -->
          <a href="/{firstBreadcrumb}">{format(firstBreadcrumb)}</a>
      </nav>
  {/if}
  
  
  <style>
      a {
          font-size: 16px;
          font-weight: var(--fw-light);
          font-family: var(--font-primary);
          color: var(--color-blue-dark);
          text-transform: uppercase;
          text-decoration: none;
      }
  
      span {
        font-weight: var(--fw-light);
        font-family: var(--font-primary);
      }
      .separator {
  margin: 0 0.7em 0 0.4em;
}

  </style>