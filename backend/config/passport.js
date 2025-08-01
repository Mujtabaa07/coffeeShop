const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user');

console.log('🔐 Configuring Passport Google Strategy...');

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/api/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
  try {
    console.log('👤 Google Profile received:', profile.displayName);
    
    let user = await User.findOne({ googleId: profile.id });
    
    if (user) {
      console.log('✅ Existing user found:', user.email);
      return done(null, user);
    }
    
    console.log('➕ Creating new user...');
    user = await User.create({
      googleId: profile.id,
      name: profile.displayName,
      email: profile.emails[0].value,
      avatar: profile.photos[0].value,
      provider: 'google'
    });
    
    console.log('✅ New user created:', user.email);
    return done(null, user);
  } catch (error) {
    console.error('❌ Passport error:', error);
    return done(error, null);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});