// Function to initialize the application
function initApp() {
  //displayLoader();
  const path = window.location.pathname;
  
  // Handle authentication and user display for app routes
  if (path.startsWith('/generate-products') || path.startsWith('/find-products')) {
    import('../src/generate_products.js').then(module => module.render())
  }

  else if (path.startsWith('/customised-ai-design') || path.startsWith('/peer-inspired-design') || path.startsWith('/sequential-process-ai') || path.startsWith('/sequential-process-pure') || path.startsWith('/pure-recommendation')) {
    import('../src/generate_products_updated.js').then(module => module.render())
  }
}

// Listen for when the DOM content is fully loaded, then initialize the app
document.addEventListener("DOMContentLoaded", initApp);
