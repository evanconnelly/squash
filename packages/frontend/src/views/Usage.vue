<script setup lang="ts">
</script>

<template>
  <div class="space-y-8">
    <div>
      <h2 class="text-2xl font-bold mb-3">Squash: Caido Request Minimizer Plugin</h2>
    </div>
<br>
    <div>
      <h3 class="text-xl font-semibold mb-2">How Squash Works</h3>
      <ul class="list-disc list-inside space-y-1">
        <li>Sends the original request</li>
        <li>Iteratively removes query parameters, form fields, and headers (including individual cookies)</li>
        <li>Compares responses to identify invariant behavior</li>
        <li>Retains only fields necessary to preserve the original response</li>
        <li>Sends the minimized request to a new Replay tab for review and testing</li>
      </ul>
    </div>
<br>
<div>
      <h3 class="text-xl font-semibold mb-2">How to Use</h3>
      <ul class="list-disc list-inside space-y-1">
        <li>Right-click on an HTTP request in Caido</li>
          <li>Navigate to <strong>Plugins → Squash → Minimize Request</strong></li>
          <li>The minimized request will open in a new Replay tab for review and testing</li>
      </ul>
      <img src="../assets/menu.png" alt="Right-click menu showing Squash plugin option" class="w-96 rounded border mt-4 mb-4"> 
    </div>


    <div class="border rounded-lg p-4">
      <h3 class="text-lg font-semibold mb-2">💡 Pro Tip</h3>
      <p>
        Use the Configuration tab to customize which headers are automatically removed and adjust 
        request timing settings for optimal performance with your target applications.
      </p>
    </div>
  </div>
</template> 