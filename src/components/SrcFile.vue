<template>
  <div
    :class="$s.File"
  >
    <div
      :class="$s.Name"
    >
      {{ name }}
    </div>
    <pre><code><slot /></code></pre>
  </div>
</template>

<script>
export default {
  name: 'SrcFile',
  props: {
    name: {
      type: String,
      default: undefined,
    }
  }
}
</script>

<style module="$s">

.File {
  text-align: left;
  margin: 8px 4px 0;
  padding: 8px;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, .05);

  & .Name {
    font-size: 13px;
  }

  & > pre {
    font-family: monospace;
    border-radius: 3px;
    margin: 4px 0;
    padding: 8px;
    background-color: #f9f9fb;
    font-size: 11px;
    color: #444;
    white-space: pre-wrap;
  }
}

</style>
