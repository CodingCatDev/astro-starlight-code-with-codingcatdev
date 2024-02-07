<script lang="ts">
  let txt = "Hello";
  const clickhandler = () => {
    txt += "World";
  };
</script>

<button on:click={() => clickhandler()}>{txt}</button>
