import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './auth/login/login.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
