import { writable } from 'svelte/store'

export function createChannelStore() {
  const { subscribe, update, set } = writable([])

  return {
    subscribe,

    init: async () => {
      return fetch('http://localhost:4004/chat/Channels').then(req => req.json()).then(json => set(json.value));
    }
  }
}

export const channels = createChannelStore();