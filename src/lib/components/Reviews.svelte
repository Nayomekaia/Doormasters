<script>
    import Review1 from '$lib/assets/rv-1.png';
    import Review2 from '$lib/assets/rv-2.png';
    import Review3 from '$lib/assets/rv-3.png';

</script>

<section class="reviews-component">
<h2>"Binnen een week had ik mijn nieuwe garagedeur, perfect gemonteerd. Topbedrijf!"</h2>

<section class="reviews">
<img src={Review1} alt="Review 1" class="review-image">
<img src={Review2} alt="Review 2" class="review-image">
<img src={Review3} alt="Review 3" class="review-image">
</section>
</section>

<style>
    .reviews-component {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
        margin-bottom: 5rem;

    }
    
    h2 {
        margin-bottom: 9rem;
        margin-top: 5rem;
        text-align: center; 
        max-width: 900px;
    }
    
    .reviews {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
    
    .review-image {
        width: 100%;
        max-width: 300px;
        border-radius: 10px;
        border: solid 1px var(--neutral-200);
    }
    </style>