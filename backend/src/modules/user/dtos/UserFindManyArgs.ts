import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { UserWhereInput } from './UserWhereInput';
import { IsOptional, ValidateNested, IsInt } from 'class-validator';
import { Type } from 'class-transformer';
import { UserOrderByInput } from './UserOrderByInput';

@ArgsType()
class UserFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UserWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: UserWhereInput;

  @ApiProperty({
    required: false,
    type: [UserOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UserOrderByInput], { nullable: true })
  @Type(() => UserOrderByInput)
  orderBy?: Array<UserOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { UserFindManyArgs as UserFindManyArgs };
