import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { User } from '../entities/users.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(User) private readonly userModel: typeof User,
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  async validate(payload: any) {
    const user = await this.findOneById(payload.sub);
    if (!user) {
      throw new UnauthorizedException();
    }
    return { userId: payload.sub, username: payload.username };
  }

  async findOneById(id: string) {
    return this.userModel.findByPk(id);
  }
}