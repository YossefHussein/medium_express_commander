<% if (isRouteMiddleware) {
    -%>
        // Route-level middleware for <%= middlewareName %>
        module.exports = (req, res, next) => {
            // Add your route middleware logic here
            console.log('<%= middlewareName %> middleware executed')
            next()
        }
<% } else {
    -%>
        // Application-level middleware for <%= middlewareName %>
        module.exports = function <%= middlewareName %> (options = {}) {
        return (req, res, next) => {
            // Add your application middleware logic here
            console.log('<%= middlewareName %> middleware executed with options:', options)
            next()
        }
    }
    <% } -%>