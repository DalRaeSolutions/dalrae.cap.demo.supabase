import { writable } from 'svelte/store'

export const messages = writable([]);

export const getMessages = async id => {
  if (!id) return messages.set([]);

  return fetch(`http://localhost:4004/chat/Channels(${id})/messages?$orderby=createdAt%20asc`).then(req => req.json()).then(json => messages.set(json.value));
}

export const createMessage = async ({ channel_ID, message }) => {
  await fetch('http://localhost:4004/chat/createMessage', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ channel_ID, message })
  });
}