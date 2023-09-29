import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IdentityService } from "./identity.service";
import { IdentityControllerBase } from "./base/identity.controller.base";

@swagger.ApiTags("identities")
@common.Controller("identities")
export class IdentityController extends IdentityControllerBase {
  constructor(
    protected readonly service: IdentityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
