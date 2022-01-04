module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a44f20e19c2ee2f31dacf5db59a9327b'),
  },
});
