"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateExerciseDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_exercise_dto_1 = require("./create-exercise.dto");
class UpdateExerciseDto extends (0, mapped_types_1.PartialType)((0, mapped_types_1.OmitType)(create_exercise_dto_1.CreateExerciseDto, ['userId'])) {
}
exports.UpdateExerciseDto = UpdateExerciseDto;
