<template>
  <main v-show="!loading">
    <div v-if="!user?.id">
      <login :supabase="supabase" />
    </div>
    <div v-if="user?.id">
      <protected :user="user" :supabase="supabase" />
    </div>
  </main>
</template>

<script>
module.exports = {
  components: {
    login: httpVueLoader("login.vue"),
    protected: httpVueLoader("protected.vue"),
  },
  computed: {
    supabase: function() {
      const { createClient } = supabase;
      return createClient('https://wsanmbyopzisbprrpnce.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMzAzNzU3NSwiZXhwIjoxOTM4NjEzNTc1fQ.F0oio-_xfUMmILqb1EfoNF6XxTM1srxJWggnrAGTx4c')
    }
  },
  data: function () {
    return {
      loading: true,
      user: {},
    };
  },
  methods: {
    cookie: function(session) {
      fetch('/auth/cookie', {
        method: "POST",
        body: JSON.stringify(session),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then(json => {
        this.user = json.user
        this.loading = false;
      })
      .catch(err => console.log(err));
    }
  },
  async mounted() {
    const client = this.supabase;
    this.cookie(client.auth.session() || {})
    client.auth.onAuthStateChange((event, session) => {
      this.cookie(session || {});
    })
  },
};
</script>