<template>
  <div>
    <div class="flex flex-col pt-10">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <h3 class="text-2xl font-bold pt-3 pb-8">Profile</h3>
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Key
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                 <tr v-for="(key, index) in Object.keys(user)" :key="index" class="odd:bg-gray-50 hover:bg-blue-100">
                  <td class="font-bold px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ format(key) }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ user[key] }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
module.exports = {
  props: ['user'],
  methods: {
    format(key) {
      return key.split('_').map(k => k[0].toUpperCase() + k.substring(1)).join(' ')
    }
  }
};
</script>
