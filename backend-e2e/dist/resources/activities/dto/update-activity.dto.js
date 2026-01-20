"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateActivityDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_activity_dto_1 = require("./create-activity.dto");
class UpdateActivityDto extends (0, mapped_types_1.PartialType)((0, mapped_types_1.OmitType)(create_activity_dto_1.CreateActivityDto, ['workoutId'])) {
}
exports.UpdateActivityDto = UpdateActivityDto;
