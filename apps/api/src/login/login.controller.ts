import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { LoginService } from './login.service';
import { AuthGuard } from '@nestjs/passport';

interface IOAuthUser {
  user: {
    email: string;
    password: string;
  };
}

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get('/naver')
  @UseGuards(AuthGuard('naver'))
  async loginNaver(
    @Req() req: Request & IOAuthUser, //
    @Res() res: Response,
  ) {
    this.loginService.OAuthLogin({ req, res });
  }
}
