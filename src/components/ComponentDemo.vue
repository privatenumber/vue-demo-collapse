<template>
  <div :class="$s.ComponentDemo">
    <div :class="$s.Demo">
      <slot />
    </div>
    <template v-if="$slots.files">
      <template v-if="!codeHidden">
        <slot name="files" />
      </template>
      <button
        type="button"
        :class="$s.ToggleCode"
        @click="toggleCode"
      >
        {{ codeHidden ? 'Show Code' : 'Hide Code' }}
      </button>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ComponentDemo',

  props: {
    files: Array,
    default: undefined,
  },

  data() {
    return {
      codeHidden: true,
    };
  },

  methods: {
    toggleCode() {
      this.codeHidden = !this.codeHidden;
    },
  }
}
</script>

<style module="$s">
.ComponentDemo {
  background-color: #f9f9fb;
  border-radius: 5px;
}

.Demo {
  background-color: #fff;
  margin: 4px;
  padding: 16px;
  border-radius: 3px;
  box-shadow: 0 0 0 1px rgba(67,90,111,.14);
}

.ToggleCode {
  display: block;
  cursor: pointer;
  width: 100%;
  padding: 8px;
  border: none;
  background-color: transparent;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #444;
  font-size: 11px;
  outline: none;
}
</style>
