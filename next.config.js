// For static exports
// https://github.com/zeit/next.js#static-html-export

module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/strata-management': { page: '/strata-management' },
      '/rental-property-management': { page: '/rental-property-management' },
      '/forms-and-fact-sheets': { page: '/forms-and-fact-sheets' },
      '/contact': { page: '/contact' },
      '/privacy-policy': { page: '/privacy-policy' },
      '/terms-of-use': { page: '/terms-of-use' }
    }
  }
}