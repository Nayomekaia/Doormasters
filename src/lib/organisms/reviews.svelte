<script>
    export let reviews = [
      {
        name: "Eddie Hokke",
        date: "3 februari 2026",
        rating: 5,
        text: "Iemand ervaring met de Nederlandse Doormasters?",
        verified: true,
        initial: null,
        color: "#E8E8E8"
      },
      {
        name: "Arie Schoone",
        date: "5 januari 2026",
        rating: 5,
        text: "Heel blij met onze nieuwe geïsoleerde garagedeur. Dankjewel!",
        verified: false,
        initial: "A",
        color: "#C2185B"
      },
      {
        name: "Chaily Everts",
        date: "30 december 2025",
        rating: 5,
        text: "Fijn bedrijf. Goede service, eerlijke prijs",
        verified: false,
        initial: "C",
        color: "#00897B"
      },
      {
        name: "22 Vision",
        date: "18 december 2025",
        rating: 5,
        text: "Vorige maand een tweede deur laten plaatsen. Tevreden over de kwaliteit en geen addertjes onder het gras.",
        verified: false,
        initial: "22",
        color: "#7B1FA2"
      },
      {
        name: "Baseline Products",
        date: "29 november 2025",
        rating: 5,
        text: "Fijne mensen en zeer goede deur. Tevreden klant",
        verified: false,
        initial: "B",
        color: "#00897B"
      },
      {
        name: "Pieter van Heusden",
        date: "15 oktober 2025",
        rating: 5,
        text: "Zeer tevreden! Dankjewel heren",
        verified: false,
        initial: null,
        color: null,
        avatar: true
      }
    ];
  </script>
  
  <div class="reviews-container">
    {#each reviews as review}
      <div class="review-card">
        <div class="review-header">
          <div class="avatar-wrapper">
            {#if review.avatar}
              <div class="avatar avatar-image">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="8" r="4" fill="#D4A574"/>
                  <path d="M4 20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20V20" fill="#D4A574"/>
                  <circle cx="12" cy="12" r="11" stroke="#D4A574" stroke-width="2"/>
                </svg>
              </div>
            {:else if review.initial}
              <div class="avatar avatar-initial" style="background-color: {review.color}">
                <span>{review.initial}</span>
              </div>
            {:else}
              <div class="avatar avatar-default" style="background-color: {review.color}">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="8" r="4" fill="#999"/>
                  <path d="M4 20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20V20" fill="#999"/>
                </svg>
              </div>
            {/if}
          </div>
          
          <div class="reviewer-info">
            <div class="name-row">
              <h3 class="reviewer-name">{review.name}</h3>
              {#if review.verified}
                <div class="verified-badge">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="#4CAF50"/>
                    <path d="M7 12L10.5 15.5L17 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              {/if}
            </div>
            <p class="review-date">{review.date}</p>
          </div>
  
          <div class="google-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </div>
        </div>
  
        <div class="rating">
          {#each Array(review.rating) as _, i}
            <svg class="star" width="20" height="20" viewBox="0 0 24 24" fill="#FBBC04" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
            </svg>
          {/each}
        </div>
  
        <p class="review-text">{review.text}</p>
      </div>
    {/each}
  </div>
  
  <style>
  .reviews-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
    padding: 60px 80px;
    background: var(--color-white);
  }

  .review-card {
    background: white;
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: relative;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .review-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }

  .review-header {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    position: relative;
  }

  .avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 500;
    color: white;
    overflow: hidden;
    flex-shrink: 0;
  }

  .reviewer-info {
    flex: 1;
    min-width: 0;
  }

  .name-row {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 4px;
    flex-wrap: wrap;
  }

  .reviewer-name {
    font-size: 16px;
    font-weight: 600;
    color: #202124;
    margin: 0;
    line-height: 1.4;
  }

  .review-date {
    font-size: 14px;
    color: #5F6368;
    margin: 0;
  }

  .google-icon {
    position: absolute;
    top: 0;
    right: 0;
  }

  .rating {
    display: flex;
    gap: 4px;
  }

  .star {
    width: 18px;
    height: 18px;
  }

  .review-text {
    font-size: 15px;
    color: #202124;
    line-height: 1.6;
    margin: 0;
  }

  /* ========================= */
  /* 📱 Tablet */
  /* ========================= */
  @media (max-width: 1024px) {
    .reviews-container {
      padding: 40px;
    }
  }

  /* ========================= */
  /* 📱 Mobiel */
  /* ========================= */
  @media (max-width: 768px) {
    .reviews-container {
      grid-template-columns: 1fr;
      padding: 24px;
      gap: 16px;
    }

    .review-card {
      padding: 20px;
    }

    .avatar {
      width: 40px;
      height: 40px;
      font-size: 16px;
    }

    .reviewer-name {
      font-size: 15px;
    }

    .review-date {
      font-size: 13px;
    }

    .review-text {
      font-size: 14px;
    }

    .star {
      width: 16px;
      height: 16px;
    }
  }

  /* ========================= */
  /* 📱 Kleine telefoons */
  /* ========================= */
  @media (max-width: 480px) {
    .reviews-container {
      padding: 16px;
    }

    .review-card {
      padding: 16px;
    }
  }
</style>