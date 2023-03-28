import { IsString,IsOptional } from 'class-validator';


export class UpdateCarDto{

  //@IsString()
  //@IsOptional()
  //readonly id?: string;

  @IsString()
  @IsOptional()
  readonly brand?: string;

  @IsString()
  @IsOptional()
  readonly model?: string;
}