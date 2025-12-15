<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/ui/button/Button.vue'

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const props = defineProps<{
  modelValue?: string
}>()

const content = ref(props.modelValue || '')

const execCommand = (command: string, value?: string) => {
  document.execCommand(command, false, value)
}

const onInput = (e: Event) => {
  const target = e.target as HTMLDivElement
  emit('update:modelValue', target.innerHTML)
}
</script>

<template>
  <div class="n-rich-text-editor">
    <div class="toolbar">
      <Button size="sm" variant="ghost" @click="execCommand('bold')"><b>B</b></Button>
      <Button size="sm" variant="ghost" @click="execCommand('italic')"><i>I</i></Button>
      <Button size="sm" variant="ghost" @click="execCommand('underline')"><u>U</u></Button>
      <span class="divider"></span>
      <Button size="sm" variant="ghost" @click="execCommand('insertUnorderedList')">• List</Button>
      <Button size="sm" variant="ghost" @click="execCommand('insertOrderedList')">1. List</Button>
      <span class="divider"></span>
      <Button size="sm" variant="ghost" @click="execCommand('justifyLeft')">←</Button>
      <Button size="sm" variant="ghost" @click="execCommand('justifyCenter')">↔</Button>
      <Button size="sm" variant="ghost" @click="execCommand('justifyRight')">→</Button>
    </div>
    <div 
      class="editor-content"
      contenteditable
      @input="onInput"
      v-html="content"
    ></div>
  </div>
</template>

<style scoped>
.n-rich-text-editor {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 8px;
  background: var(--color-surface-hover);
  border-bottom: 1px solid var(--color-border);
}

.divider {
  width: 1px;
  margin: 0 8px;
  background: var(--color-border);
}

.editor-content {
  min-height: 200px;
  padding: 16px;
  outline: none;
  line-height: 1.6;
}

.editor-content:focus {
  background: var(--color-surface);
}
</style>
