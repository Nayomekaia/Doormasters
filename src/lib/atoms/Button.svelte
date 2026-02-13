<script>
  export let href = "#";
  export let variant = "silver";
</script>

<a class="btn {variant}" href={href}>
  <slot />
</a>

<style>

/* algemene button styling*/
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 35px;
  border-radius: 5px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  position: relative; 
}

/* button variant: silver */

.silver {
  color: var(--neutral-900);
  background: linear-gradient(
    45deg,
    #999 5%,
    #fff 10%,
    #cacaca 30%,
    #aeaeae 50%,
    #d6d6d6 70%,
    #f6f6f6 80%,
    #979696 95%
  );
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
  box-shadow: 0 2px 5px var(--neutral-900);
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  border: 1px solid #c6c5c5;
}

.silver:hover {
  transform: scale(1.05);
}

.silver::after {
  content: "";
  position: absolute;
  top: 0;
  left: -120%;
  height: 100%;
  width: 60%;
  background: linear-gradient(
    120deg,
    transparent 0%,
    rgba(255, 255, 255, 0.7) 50%,
    transparent 100%
  );
  transform: skewX(-20deg);
  animation: shine 3.5s infinite;
  pointer-events: none;
}

@keyframes shine {
  0% { left: -120%; }
  20% { left: 140%; }
  100% { left: 140%; }
}

@media (prefers-reduced-motion: reduce) {
  .silver::after {
    animation: none;
  }
}

/* button variant: outline */

.outline {
  background: transparent;
  border: 1px solid var(--color-blue-dark);
  color: var(--color-blue-dark);
  transition: all 0.2s ease-in-out;
}

.outline:hover {
  background: var(--color-blue-dark);
  color: var(--color-white);
}
</style>
