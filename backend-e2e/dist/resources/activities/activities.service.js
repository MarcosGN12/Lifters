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
exports.ActivitiesService = void 0;
const common_1 = require("@nestjs/common");
const activity_entity_1 = require("./entities/activity.entity");
let ActivitiesService = (() => {
    let _classDecorators = [(0, common_1.Injectable)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var ActivitiesService = _classThis = class {
        constructor(activityRepository, workoutRepository, exerciseRepository) {
            this.activityRepository = activityRepository;
            this.workoutRepository = workoutRepository;
            this.exerciseRepository = exerciseRepository;
        }
        create(createActivityDto) {
            return __awaiter(this, void 0, void 0, function* () {
                const existExerciseId = yield this.exerciseRepository.findOneBy({ id: createActivityDto.exerciseId });
                if (!existExerciseId) {
                    throw new common_1.NotFoundException('This exerciseId dont exist');
                }
                const existWorkoutId = yield this.workoutRepository.findOneBy({ id: createActivityDto.workoutId });
                if (!existWorkoutId) {
                    throw new common_1.NotFoundException('This workoutId dont exist');
                }
                const activity = this.createActivity(createActivityDto);
                return yield this.activityRepository.save(activity);
            });
        }
        findAll() {
            return __awaiter(this, void 0, void 0, function* () {
                const activities = yield this.activityRepository.find();
                if (activities.length == 0) {
                    throw new common_1.NotFoundException('Activities not found');
                }
                return activities;
            });
        }
        findOne(id) {
            return __awaiter(this, void 0, void 0, function* () {
                const activity = yield this.activityRepository.findOneBy({ id });
                if (!activity) {
                    throw new common_1.NotFoundException('Activity not found');
                }
                return activity;
            });
        }
        update(id, updateActivityDto) {
            return __awaiter(this, void 0, void 0, function* () {
                const activity = yield this.activityRepository.findOneBy({ id });
                if (!activity) {
                    throw new common_1.NotFoundException('Activity not found');
                }
                const existExerciseId = yield this.exerciseRepository.findOneBy({ id: updateActivityDto.exerciseId });
                if (!existExerciseId) {
                    throw new common_1.NotFoundException('This exerciseId dont exist');
                }
                if (updateActivityDto.sets) {
                    activity.sets = updateActivityDto.sets;
                }
                if (updateActivityDto.reps) {
                    activity.reps = updateActivityDto.reps;
                }
                if (updateActivityDto.weight) {
                    activity.weight = updateActivityDto.weight;
                }
                if (updateActivityDto.results) {
                    activity.results = updateActivityDto.results;
                }
                if (updateActivityDto.exerciseId) {
                    activity.exerciseId = updateActivityDto.exerciseId;
                }
                return this.activityRepository.save(activity);
            });
        }
        remove(id) {
            return __awaiter(this, void 0, void 0, function* () {
                const activity = yield this.activityRepository.findOneBy({ id });
                if (!activity) {
                    throw new common_1.NotFoundException('Activity not found');
                }
                return this.activityRepository.remove(activity);
            });
        }
        createActivity(createActivityDto) {
            const activity = new activity_entity_1.Activity();
            activity.sets = createActivityDto.sets;
            activity.reps = createActivityDto.reps;
            activity.weight = createActivityDto.weight;
            activity.results = createActivityDto.results;
            activity.workoutId = createActivityDto.workoutId;
            activity.exerciseId = createActivityDto.exerciseId;
            return activity;
        }
    };
    __setFunctionName(_classThis, "ActivitiesService");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ActivitiesService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ActivitiesService = _classThis;
})();
exports.ActivitiesService = ActivitiesService;
