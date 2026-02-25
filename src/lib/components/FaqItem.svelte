<script>
    export let vraag;
    export let andwoord;
    export let open = false;
  </script>
  
  <details class="adaptive" bind:open>
    <summary>
      {vraag}
      <!-- Inline SVG -->
      <svg
        class="arrow"
        class:rotated={open}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 15.5l-8-8h16l-8 8z"/>
      </svg>
    </summary>
    <p>{andwoord}</p>
  </details>
  
  <style>
  details {
    border: 1px solid var(--color-blue-dark);
    border-radius: 0.5em;
    padding: 1em;
    margin-bottom: 1em;
    max-width: 600px;
    min-width: 325px;
    transition: background-color 0.3s, color 0.3s;
  }
  
  summary {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--font-primary);
    color: var(--color-blue-dark);
    padding: 0.5em 0;
    border-radius: 0.3em;
    transition: background-color 0.3s, color 0.3s;
  }
  
  summary::-webkit-details-marker {
    display: none;
  }
  
  /* Arrow styling */
  .arrow {
    transition: transform 0.3s, color 0.3s;
    color: var(--color-blue-dark); /* gesloten */
  }
  
  .rotated {
    transform: rotate(180deg);
  }
  
  /* Open state arrow + summary text */
  .adaptive[open] summary {
    color: var(--color-white);
  }
  
  .adaptive[open] summary .arrow {
    color: var(--color-white);
  }
  
  .adaptive[open] {
    background-color: var(--color-blue-dark);
  }
  
  /* Content */
  .adaptive p {
    margin-top: 0.5em;
    line-height: 1.5;
    transition: color 0.3s;
  }
  
  .adaptive[open] p {
    color: var(--color-white);
  }
  </style>