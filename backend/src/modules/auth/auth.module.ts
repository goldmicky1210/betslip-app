import { forwardRef, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { JWT_EXPIRATION } from '../shared/constants';
import { SecretsManagerModule } from '../common/providers/secrets/secretsManager.module';
import { SecretsManagerService } from '../common/providers/secrets/secretsManager.service';
import { EnumSecretsNameKey } from '../common/providers/secrets/secretsNameKey.enum';

import { JwtStrategy } from './jwt/jwt.strategy';
import { jwtSecretFactory } from './jwt/jwtSecretFactory';
import { PasswordService } from './password.service';
import { TokenService } from './token.service';
import { UserModule } from '../user/user.module';

import { AuthController } from './auth.controller';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';

@Module({
  imports: [
    forwardRef(() => UserModule),
    PassportModule,
    SecretsManagerModule,
    JwtModule.registerAsync({
      imports: [SecretsManagerModule],
      inject: [SecretsManagerService, ConfigService],
      useFactory: async (
        secretsService: SecretsManagerService,
        configService: ConfigService,
      ) => {
        const secret = await secretsService.getSecret<string>(
          EnumSecretsNameKey.JwtSecretKey,
        );
        const expiresIn = configService.get(JWT_EXPIRATION);
        if (!secret) {
          throw new Error("Didn't get a valid jwt secret");
        }
        if (!expiresIn) {
          throw new Error('Jwt expire in value is not valid');
        }
        return {
          secret: secret,
          signOptions: { expiresIn },
        };
      },
    }),
  ],
  providers: [
    AuthService,
    PasswordService,
    AuthResolver,
    JwtStrategy,
    jwtSecretFactory,
    TokenService,
  ],
  controllers: [AuthController],
  exports: [AuthService, PasswordService],
})
export class AuthModule {}
