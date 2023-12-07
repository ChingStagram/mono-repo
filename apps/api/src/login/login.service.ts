import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LoginService {
  constructor(
    private jwtService: JwtService,
    private readonly prismaService: PrismaService,
  ) {}

  login(email: string, password: string) {
    if (email === 'test@test.com' && password === 'test') {
      const payload = { email: email, sub: '0' };
      return this.jwtService.sign(payload);
    }
    throw new UnauthorizedException('인증되지 않은 사용자입니다.');
  }

  async OAuthLogin({ req, res }) {
    console.log(req);
    // let user = await this.prismaService.user.

    // if (!user) user = await this.usersService.create({ ...req.user }); //user가 없으면 하나 만들고, 있으면 이 if문에 들어오지 않을거기때문에 이러나 저러나 user는 존재하는게 됨.

    // this.setRefreshToken({ user, res });
    res.redirect('http://loclahost:3000');
  }
}
