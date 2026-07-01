const withCss = require('@zeit/next-css')

if (typeof require !== 'undefined') {
    require.extensions['.css'] = file => {}
}

module.exports = withCss({
    async rewrites() {
        return [
            {
                source: '/student/:path*',
                destination: 'http://localhost:8080/student/:path*'
            },
            {
                source: '/teacher/:path*',
                destination: 'http://localhost:8080/teacher/:path*'
            },
            {
                source: '/course/:path*',
                destination: 'http://localhost:8080/course/:path*'
            },
            {
                source: '/topic/:path*',
                destination: 'http://localhost:8080/topic/:path*'
            },
            {
                source: '/reply/:path*',
                destination: 'http://localhost:8080/reply/:path*'
            },
            {
                source: '/tc/:path*',
                destination: 'http://localhost:8080/tc/:path*'
            },
            {
                source: '/sc/:path*',
                destination: 'http://localhost:8080/sc/:path*'
            }
        ]
    }
})