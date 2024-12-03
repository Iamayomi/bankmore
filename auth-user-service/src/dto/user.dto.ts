import { IsString, IsEmail, MinLength } from 'class-validator';

export class CreateUserDTO {
  @IsEmail({}, { message: 'Invalid email address' })
  email!: string; // Use non-null assertion or initialize the property.

  @IsString({ message: 'Password is required' })
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password!: string;

  @IsString({ message: 'Name is required' })
  name!: string;
}
