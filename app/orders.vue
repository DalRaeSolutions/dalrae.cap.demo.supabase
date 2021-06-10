<template>
  <div>
    <div class="flex flex-col pt-10">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 pb-6">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <h3 class="text-2xl font-bold pt-3">Orders ({{ pages.count }})</h3>
          <div class="text-gray-500 text-sm pb-8">Displaying page {{ pages.current }}, rows {{ pages.skip + 1 }} to {{ pages.skip + pages.top }}</div>
          <form v-on:submit.prevent="searchList">
            <label for="email" class="sr-only">Email</label>
            <input v-model="search" type="text" name="email" id="email" class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm p-2 mb-3 border-gray-300 rounded-md" placeholder="Search here" />
          </form>
          <div class="shadow border-b border-gray-200 sm:rounded-lg">
            <table class="relative min-w-full divide-y divide-gray-200">
              <thead class="sticky bg-gray-50">
                <tr class="sticky">
                  <th v-for="(header, i) in headers" :key="i" scope="col" class="sticky px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {{ header }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="order in orders" :key="order?.ID" class="odd:bg-gray-50 hover:bg-blue-100">
                  <td class="font-bold px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ order.ID.split("-")[4] }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ order.customerName }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ order.description }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ new Date(order.createdAt).toLocaleDateString() }}</td>
                </tr>
                <tr v-show="orders.length === 0">
                  <td colspan="4" class="text-red-600 text-center font-bold p-3">No records returned</td>
                </tr>
              </tbody>
            </table>
          </div>

          <nav v-show="orders.length > 0" class="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
            <div class="-mt-px w-0 flex-1 flex">
              <a @click.prevent="() => newPage(1)" class="cursor-pointer border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                <svg class="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                </svg>
                First
              </a>
            </div>
            <div class="hidden md:-mt-px md:flex">
              <a
                v-for="m in pages.nav"
                :key="m"
                @click.prevent="() => newPage(m)"
                class="cursor-pointer border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                :class="m === pages.current ? 'border-indigo-500 text-indigo-600' : ''"
              >
                {{ m }}
              </a>
            </div>
            <div class="-mt-px w-0 flex-1 flex justify-end">
              <a @click.prevent="() => newPage(pages.total - 1)" class="cursor-pointer border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Last
                <svg class="ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
module.exports = {
  data: function () {
    return {
      orders: [],
      search: "",
      skip: 0,
      pages: {
        total: 0,
        current: 1,
        count: 0,
        top: 20,
        skip: 0,
        nav: [],
      },
      headers: ["ID", "Customer", "Description", "Order date"],
    };
  },
  computed: {
    url: function () {
      return `/orders/WorkOrders?$top=${this.pages.top}&$skip=${this.pages.skip}&$count=true`;
    }
  },
  props: ["user"],
  async mounted() {
    await this.fetch();
  },
  methods: {
    async searchList() {
      this.pages.current = 1;
      this.pages.skip = 0;
      await this.fetch();
    },
    async fetch() {
      const url = this.search ? `${this.url}&$search=${this.search}` : this.url;
      const result = await (await fetch(url)).json();

      this.orders = result.value;
      this.pages.count = result["@odata.count"];
      this.paginate();
    },
    paginate() {
      this.pages.total = ~~(this.pages.count / this.pages.top) + 1;
      const length = this.pages.total > 5 ? 5 : this.pages.total;
      const min = Math.max(1, this.pages.current - 2);
      this.pages.nav = Array.from({ length }, (_, i) => i + min).filter((i) => i < this.pages.total);
      this.pages.nav = this.pages.nav.length === 0 ? [1] : this.pages.nav;
    },
    async newPage(m) {
      this.pages.current = m;
      this.pages.skip = this.pages.top * (m - 1);
      await this.fetch();
    },
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>
