import * as graphql from "@nestjs/graphql";
import { EstimateResolverBase } from "./base/estimate.resolver.base";
import { Estimate } from "./base/Estimate";
import { EstimateService } from "./estimate.service";

@graphql.Resolver(() => Estimate)
export class EstimateResolver extends EstimateResolverBase {
  constructor(protected readonly service: EstimateService) {
    super(service);
  }
}
