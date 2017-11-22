// For static exports
// https://github.com/zeit/next.js#static-html-export

module.exports = {
  exportPathMap: () => ({
    "/": { page: "/" },
    "/strata-management": { page: "/strata-management" },
    "/rental-property-management": { page: "/rental-property-management" },
    "/property-valuations": { page: "/property-valuations" },
    "/forms-and-fact-sheets": { page: "/forms-and-fact-sheets" },
    "/contact": { page: "/contact" },
    "/privacy-policy": { page: "/privacy-policy" },
    "/terms-of-use": { page: "/terms-of-use" },
  }),
};
