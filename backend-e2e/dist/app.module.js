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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./resources/users/users.module");
const training_plan_module_1 = require("./resources/training-plans/training-plan.module");
const workouts_module_1 = require("./resources/workouts/workouts.module");
const activities_module_1 = require("./resources/activities/activities.module");
const exercises_module_1 = require("./resources/exercises/exercises.module");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./resources/users/entities/user.entity");
const workout_entity_1 = require("./resources/workouts/entities/workout.entity");
const training_plan_entity_1 = require("./resources/training-plans/entities/training-plan.entity");
const activity_entity_1 = require("./resources/activities/entities/activity.entity");
const exercise_entity_1 = require("./resources/exercises/entities/exercise.entity");
const auth_module_1 = require("./resources/auth/auth.module");
const config_1 = require("@nestjs/config");
const configuration_app_1 = __importDefault(require("../config/configuration-app"));
let AppModule = (() => {
    let _classDecorators = [(0, common_1.Module)({
            imports: [
                config_1.ConfigModule.forRoot({
                    envFilePath: `env/.${process.env.NODE_ENV}.env`,
                    load: [configuration_app_1.default],
                    isGlobal: true,
                }),
                users_module_1.UsersModule,
                auth_module_1.AuthModule,
                training_plan_module_1.TrainingPlanModule,
                workouts_module_1.WorkoutsModule,
                activities_module_1.ActivitiesModule,
                exercises_module_1.ExercisesModule,
                typeorm_1.TypeOrmModule.forRoot({
                    type: 'postgres',
                    host: 'localhost',
                    port: 5439,
                    username: 'postgres',
                    password: 'postgres',
                    database: 'lifters-dev',
                    entities: [user_entity_1.User, training_plan_entity_1.TrainingPlan, workout_entity_1.Workout, activity_entity_1.Activity, exercise_entity_1.Exercise],
                    synchronize: true,
                }),
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService],
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var AppModule = _classThis = class {
    };
    __setFunctionName(_classThis, "AppModule");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AppModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AppModule = _classThis;
})();
exports.AppModule = AppModule;
