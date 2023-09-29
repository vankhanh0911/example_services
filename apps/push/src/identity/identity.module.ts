import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IdentityModuleBase } from "./base/identity.module.base";
import { IdentityService } from "./identity.service";
import { IdentityController } from "./identity.controller";
import { IdentityResolver } from "./identity.resolver";

@Module({
  imports: [IdentityModuleBase, forwardRef(() => AuthModule)],
  controllers: [IdentityController],
  providers: [IdentityService, IdentityResolver],
  exports: [IdentityService],
})
export class IdentityModule {}
