import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secret',
      ignoreExpiration: false,
    });
  }
}

@Injectable()
export class JwtGoogleStrategy extends PassportStrategy(
  GoogleStrategy,
  'google',
) {
  constructor() {
    super({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      scope: ['email', 'profile'],
    });
  }

  validate(accessToken, refreshToken, profile) {
    console.log('accessToken', accessToken);
    console.log('refreshToken', refreshToken);
    console.log('profile', profile);

    return {
      name: profile.displayName,
      email: profile.emails[0].value,
      hashedPassword: '1234',
    };
  }
}
