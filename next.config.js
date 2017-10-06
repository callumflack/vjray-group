// For static exports
// https://github.com/zeit/next.js#static-html-export

module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/rental-property-management-for-landlords': { page: '/rental-property-management-for-landlords' },
      '/contact': { page: '/contact' }
    }
  }
}