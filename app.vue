<script >
// Declare and initialize the variable outside the function
let viewportCheckExecuted = false;

function checkViewportWidth() {
  if (process.client && !viewportCheckExecuted) {
    var viewportMeta = document.querySelector('meta[name="viewport"]');
    if (window.innerWidth > 350) {
      // If the screen width is greater than 350 pixels, set initial-scale=1.0
      viewportMeta.content = "width=device-width, initial-scale=1.0";
    } else {
      // If the screen width is less than or equal to 350 pixels, set initial-scale=0.7
      viewportMeta.content = "width=device-width, initial-scale=0.7";
    }

    // Set the flag to true to prevent further execution
    viewportCheckExecuted = true;

    // Remove event listeners
    window.removeEventListener('load', checkViewportWidth);
    window.removeEventListener('resize', checkViewportWidth);
  }
}

// Call the function on page load
if (process.client) {
  window.addEventListener('load', checkViewportWidth);

  // Resize event handler
  window.addEventListener('resize', function () {
    // Re-run the check on screen size change
    checkViewportWidth();
  });
}

</script>

<template>
  <div>
    <NuxtLayout>
    <NuxtPage /> 
  </NuxtLayout>
  </div>
</template>
