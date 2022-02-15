module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'efac9caeb1c80b1f7db89306bcf9c77d'),
  },
});
