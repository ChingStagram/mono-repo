import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { LoginService } from './login.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  login(@Req() request: Request) {}

  // @Get('/google')
  // @UseGuards(AuthGuard('google'))
  // async loginGoogle() {
  //   this.loginService.OAuthLogin();
  // }
}
