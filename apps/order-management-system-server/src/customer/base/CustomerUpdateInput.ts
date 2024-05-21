/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { EstimateUpdateManyWithoutCustomersInput } from "./EstimateUpdateManyWithoutCustomersInput";
import { Type } from "class-transformer";
import { InvoiceUpdateManyWithoutCustomersInput } from "./InvoiceUpdateManyWithoutCustomersInput";

@InputType()
class CustomerUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: () => EstimateUpdateManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => EstimateUpdateManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => EstimateUpdateManyWithoutCustomersInput, {
    nullable: true,
  })
  estimates?: EstimateUpdateManyWithoutCustomersInput;

  @ApiProperty({
    required: false,
    type: () => InvoiceUpdateManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => InvoiceUpdateManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => InvoiceUpdateManyWithoutCustomersInput, {
    nullable: true,
  })
  invoices?: InvoiceUpdateManyWithoutCustomersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phone?: string | null;
}

export { CustomerUpdateInput as CustomerUpdateInput };
