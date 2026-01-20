"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutsService = void 0;
const common_1 = require("@nestjs/common");
const workout_entity_1 = require("./entities/workout.entity");
let WorkoutsService = (() => {
    let _classDecorators = [(0, common_1.Injectable)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var WorkoutsService = _classThis = class {
        constructor(workoutRepository, trainingPlanRepository) {
            this.workoutRepository = workoutRepository;
            this.trainingPlanRepository = trainingPlanRepository;
        }
        create(createWorkoutDto) {
            return __awaiter(this, void 0, void 0, function* () {
                const existTrainingPlanId = yield this.trainingPlanRepository.findOneBy({ id: createWorkoutDto.trainingPlanId });
                if (!existTrainingPlanId) {
                    throw new common_1.NotFoundException('This trainingPlanId dont exist');
                }
                const workout = this.createWorkout(createWorkoutDto);
                return yield this.workoutRepository.save(workout);
            });
        }
        findAll() {
            return __awaiter(this, void 0, void 0, function* () {
                const workouts = yield this.workoutRepository.find();
                if (workouts.length == 0) {
                    throw new common_1.NotFoundException('Workouts not found');
                }
                return workouts;
            });
        }
        findOne(id) {
            return __awaiter(this, void 0, void 0, function* () {
                const workout = yield this.workoutRepository.findOneBy({ id });
                if (!workout) {
                    throw new common_1.NotFoundException('Workout not found');
                }
                return workout;
            });
        }
        update(id, updateWorkoutDto) {
            return __awaiter(this, void 0, void 0, function* () {
                const workout = yield this.workoutRepository.findOneBy({ id });
                if (!workout) {
                    throw new common_1.NotFoundException('Workout not found');
                }
                if (updateWorkoutDto.plannedAt) {
                    workout.plannedAt = updateWorkoutDto.plannedAt;
                }
                return this.workoutRepository.save(workout);
            });
        }
        remove(id) {
            return __awaiter(this, void 0, void 0, function* () {
                const workout = yield this.workoutRepository.findOneBy({ id });
                if (!workout) {
                    throw new common_1.NotFoundException('Workout not found');
                }
                return this.workoutRepository.remove(workout);
            });
        }
        createWorkout(createWorkoutDto) {
            const workout = new workout_entity_1.Workout();
            workout.trainingPlanId = createWorkoutDto.trainingPlanId;
            workout.plannedAt = createWorkoutDto.plannedAt;
            return workout;
        }
    };
    __setFunctionName(_classThis, "WorkoutsService");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        WorkoutsService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return WorkoutsService = _classThis;
})();
exports.WorkoutsService = WorkoutsService;
