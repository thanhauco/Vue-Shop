
// Minimal polyfill for crypto.hash needed by vite-plugin-vue in some envs
import { vi } from 'vitest'

if (!global.crypto) {
    // @ts-ignore
    global.crypto = {}
}

if (!global.crypto.getRandomValues) {
    global.crypto.getRandomValues = (buffer: any) => {
        return require('node:crypto').randomFillSync(buffer)
    }
}
