import { Module } from "@nestjs/common";
import { EstimateModuleBase } from "./base/estimate.module.base";
import { EstimateService } from "./estimate.service";
import { EstimateController } from "./estimate.controller";
import { EstimateResolver } from "./estimate.resolver";

@Module({
  imports: [EstimateModuleBase],
  controllers: [EstimateController],
  providers: [EstimateService, EstimateResolver],
  exports: [EstimateService],
})
export class EstimateModule {}
