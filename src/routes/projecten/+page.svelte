<script>
		import { Hero, place} from '$lib';
		import Review from '$lib/components/Reviews.svelte';
		export let data;
		let projecten = data.projecten;

</script>

<svelte:head>
	<title>Projecten | Doormasters </title>
</svelte:head>

<Hero
	title="PROJECTEN"
	description="Word partner bij Doormasters en versterk uw aanbod in garagedeuren en deuroplossingen. Bij Doormasters is het mogelijk om partner te worden als dealer of installateur in de deurenbranche. Wij werken samen met professionals die kiezen voor kwaliteit, betrouwbaarheid en service, en bieden ondersteuning bij levering, montage en techniek. Samen bouwen we aan duurzame en hoogwaardige deurprojecten."
></Hero>

{#each projecten as item}
<section>
	<article>
<h2> {item.title}</h2>
  <p>{item.content}</p>
</article>
  <img src={item.img} alt="">
</section>
{/each}

<section class="project-count">
	<h2 class="title">Projecten die we hebben afgerond</h2>
	
	<section class="project-count-numbers">
	  <div>
		<h3>1865</h3>
		<p>Industriedeuren</p>
	  </div>
	  
	  <div>
		<h3>1209</h3>
		<p>Garagedeuren</p>
	  </div>
	  
	  <div>
		<h3>10+</h3>
		<p>Jaren ervaring</p>
	  </div>
	</section>
  </section>

  <section class="gallery">
	<select>
		<option value="all">Alle projecten</option>
		<option value="industriedeuren">Industriedeuren</option>
		<option value="garagedeuren">Garagedeuren</option>
		<option value="andere">Roldeuren</option>
		<option value="andere">Karteldeuren</option>
	</select>

	<section class="decription">
		<p>
			hier komt korte decription van elke deur type, en waarom mensen voor deze deur type moeten kiezen, en wat de voordelen zijn van deze deur type
			</p>
	</section>


	<section class="gallery-grid">
	
  </section>
  </section>
  
  <Review />
  
  <style>
	.project-count-numbers {
	  display: flex;
	  flex-direction: row;
	  gap: 3rem; /* Ruimte tussen de div blokken */
	}
	
	.project-count-numbers > div {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  text-align: center;
	}
	
	.project-count-numbers h3 {
	  margin: 0 0 0.5rem 0;
	  font-size: 2.5rem;
	  font-weight: bold;
	}
	
	.project-count-numbers p {
	  margin: 0;
	  font-size: 1rem;
	}
	
	.project-count {
	  display: flex;
	  flex-direction: row;
	  align-items: center;
	  gap: 28rem;
	  max-width: 1200px;
	  margin: 0 auto;
	}
	
	section {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  gap: 2rem;
	  margin-bottom: 5rem;
	}
	
	article {
	  margin-top: 5rem;
	  justify-content: center;
	  text-align: center;
	}
	
	p {
	  text-align: left;
	  max-width: 400px;
	}
	
	img {
	  width: 1200px;
	  height: 500px;
	  border-radius: 5px;
	}

	.title { 
		padding: 1rem;
		max-width: 300px;
		margin-top: -4rem;
	
	}
	</style>