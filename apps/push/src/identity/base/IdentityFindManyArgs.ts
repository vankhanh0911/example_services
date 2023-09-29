/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IdentityWhereInput } from "./IdentityWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { IdentityOrderByInput } from "./IdentityOrderByInput";

@ArgsType()
class IdentityFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => IdentityWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => IdentityWhereInput, { nullable: true })
  @Type(() => IdentityWhereInput)
  where?: IdentityWhereInput;

  @ApiProperty({
    required: false,
    type: [IdentityOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [IdentityOrderByInput], { nullable: true })
  @Type(() => IdentityOrderByInput)
  orderBy?: Array<IdentityOrderByInput>;

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

export { IdentityFindManyArgs as IdentityFindManyArgs };
