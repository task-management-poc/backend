import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../entities/users.model';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User) private readonly userModel: typeof User,
    private jwtService: JwtService,
  ) {}

  //function to validate user
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userModel.findOne({ where: { username } });
    if (user && await bcrypt.compare(pass, user.passwordHash)) {
      const { passwordHash, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { username: user.username, sub: user.id, role: user.role };
    return { access_token: this.jwtService.sign(payload) };
  }

  //function to register a user
  async register(registerDto: RegisterDto): Promise<User> {
    const existingUser = await this.userModel.findOne({ where: { username: registerDto.username } });
    if (existingUser) {
      throw new BadRequestException('Username already exists');
    }

    const passwordHash = await bcrypt.hash(registerDto.password, 10);

    const user = new User();
    user.username = registerDto.username;
    user.passwordHash = passwordHash;

    console.log('User object before save:', user); // Add this line

    try {
      const savedUser = await this.userModel.create(user);
      return savedUser;
    } catch (error) {
      console.error('Error saving user:', error);
      throw error; // Re-throw the error to be handled by NestJS
    }
  }
}