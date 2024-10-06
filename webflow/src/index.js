// Function to initialize the application
function initApp() {
  // Get the current path from the URL
  const path = window.location.pathname;

  // Handle different frontend websites with the appropriate script imports
  if (path.startsWith('/study-ai-good-match-good')) {
    import('../src/generate_products_updated_AI_good_Match_good.js').then(module => module.render())
  } 
  else if (path.startsWith('/study-ai-bad-match-good')) {
    import('../src/generate_products_updated_AI_bad_Match_good.js').then(module => module.render())
  } 
  else if (path.startsWith('/study-ai-good-match-bad')) {
    import('../src/generate_products_updated_AI_good_Match_bad.js').then(module => module.render())
  } 
  else if (path.startsWith('/study-ai-bad-match-bad')) {
    import('../src/generate_products_updated_AI_bad_Match_bad.js').then(module => module.render())
  } 
  // Handle other app routes
  else if (path.startsWith('/generate-products') || path.startsWith('/find-products')) {
    import('../src/generate_products.js').then(module => module.render())
  } 
  else if (path.startsWith('/customised-ai-design') || path.startsWith('/peer-inspired-design') || path.startsWith('/sequential-process-ai') || path.startsWith('/sequential-process-pure') || path.startsWith('/pure-recommendation') || path.startsWith('/sequential-process-pure-low') || path.startsWith('/sequential-process-ai-low')) {
    import('../src/generate_products_updated.js').then(module => module.render())
  }
}

// Listen for when the DOM content is fully loaded, then initialize the app
document.addEventListener("DOMContentLoaded", initApp);
