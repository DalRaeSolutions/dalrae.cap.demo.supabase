<template>
<div class="min-h-screen bg-white flex">
  <div class=" overflow-hidden flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 md:text-xl text-4xl">
    <div class="mx-auto w-full max-w-sm lg:w-96">
      <div>
        <div class="wave waveAnimation">👋</div>
        <h2 class="font-extrabold text-center">
          <div 
            class="rounded-md leading-normal text-8xl sm:text-10xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-500 to-green-500"
            >Log on
          </div>
        </h2>
        <div class="mt-8">
          <div class="mt-6">
            <form v-show="!done" @submit.prevent="magic" class="space-y-6">
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">
                  Magic link
                </label>
                <div class="mt-1">
                  <input v-model="email" id="email" name="email" type="email" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                </div>
              </div>

              <div>
                <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Sign in
                </button>
              </div>
            </form>
            <div v-show="done">
              You'll receive a mail from <a class="font-bold text-blue-700" target="_blank" href="https://supabase.io/">Supabase</a>. Click on the link to get access.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="hidden lg:block relative w-0 flex-1 bg-gradient-to-r from-blue-50 via-gray-100 to-gray-50">
    <img class="shadow-lg shadow-inner absolute inset-0 h-full w-full object-contain p-10 md:p-24" src="background.svg" alt="">
  </div>
</div>
</template>
<script>
module.exports = {
  props: ['supabase'],
  data() {
    return {
      done: false,
      email: 'jorg.thuijls@gmail.com'
    }
  },
  methods: {
    magic() {
      this.done = true;
      this.supabase.auth.signIn({email: this.email})
    },

  }
}
</script>


<style scoped>
  .wave {
		font-size: 4em;
		margin-left: calc(50% - 0.5em);
		padding-bottom: 0.5em;
	}
	.waveAnimation {
		animation-name: waveAnimation;  /* Refers to the name of your @keyframes element below */
		animation-duration: 1.5s;        /* Change to speed up or slow down */
		animation-iteration-count: 1;  /* Never stop waving :) */
		transform-origin: 70% 70%;       /* Pivot around the bottom-left palm */
		animation-delay: 1.5s;
		display: inline-block;
	}
	@keyframes waveAnimation {
    0% { transform: rotate( 0.0deg) }
    10% { transform: rotate(6.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
    20% { transform: rotate(-3.0deg) }
    30% { transform: rotate(6.0deg) }
    40% { transform: rotate(-2.0deg) }
    50% { transform: rotate(4.0deg) }
    60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
    100% { transform: rotate( 0.0deg) }
  }
</style>