<template>
  <div>
    Register page
    <div class="flex justify-center items-center">
      <form class="flex flex-col py-12">
        <label class="mb-1">Name</label>
        <input
          class="border-none border-2 mb-3 px-4 py-2 bg-black outline-none"
          type="text"
          placeholder="..."
          maxlength="100"
        />
        <label class="mb-1">Email</label>
        <input
          class="border-none border-2 mb-3 px-4 py-2 bg-black outline-none"
          type="text"
          placeholder="..."
          maxlength="100"
        />
        <label class="mb-1">Password</label>
        <input
          class="border-none px-4 py-2 bg-black outline-none"
          type="password"
          placeholder="..."
          maxlength="100"
        />
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
