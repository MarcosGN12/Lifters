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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Workout = void 0;
const typeorm_1 = require("typeorm");
const training_plan_entity_1 = require("../../training-plans/entities/training-plan.entity");
const activity_entity_1 = require("../../activities/entities/activity.entity");
let Workout = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _plannedAt_decorators;
    let _plannedAt_initializers = [];
    let _plannedAt_extraInitializers = [];
    let _trainingPlanId_decorators;
    let _trainingPlanId_initializers = [];
    let _trainingPlanId_extraInitializers = [];
    let _trainingPlan_decorators;
    let _trainingPlan_initializers = [];
    let _trainingPlan_extraInitializers = [];
    let _activity_decorators;
    let _activity_initializers = [];
    let _activity_extraInitializers = [];
    var Workout = _classThis = class {
        constructor() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.plannedAt = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _plannedAt_initializers, void 0));
            this.trainingPlanId = (__runInitializers(this, _plannedAt_extraInitializers), __runInitializers(this, _trainingPlanId_initializers, void 0));
            this.trainingPlan = (__runInitializers(this, _trainingPlanId_extraInitializers), __runInitializers(this, _trainingPlan_initializers, void 0));
            this.activity = (__runInitializers(this, _trainingPlan_extraInitializers), __runInitializers(this, _activity_initializers, void 0));
            __runInitializers(this, _activity_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Workout");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _plannedAt_decorators = [(0, typeorm_1.Column)()];
        _trainingPlanId_decorators = [(0, typeorm_1.Column)()];
        _trainingPlan_decorators = [(0, typeorm_1.ManyToOne)(() => training_plan_entity_1.TrainingPlan, (trainingPlan) => trainingPlan.workouts, {
                onDelete: 'CASCADE',
            })];
        _activity_decorators = [(0, typeorm_1.OneToMany)(() => activity_entity_1.Activity, (activity) => activity.workout)];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _plannedAt_decorators, { kind: "field", name: "plannedAt", static: false, private: false, access: { has: obj => "plannedAt" in obj, get: obj => obj.plannedAt, set: (obj, value) => { obj.plannedAt = value; } }, metadata: _metadata }, _plannedAt_initializers, _plannedAt_extraInitializers);
        __esDecorate(null, null, _trainingPlanId_decorators, { kind: "field", name: "trainingPlanId", static: false, private: false, access: { has: obj => "trainingPlanId" in obj, get: obj => obj.trainingPlanId, set: (obj, value) => { obj.trainingPlanId = value; } }, metadata: _metadata }, _trainingPlanId_initializers, _trainingPlanId_extraInitializers);
        __esDecorate(null, null, _trainingPlan_decorators, { kind: "field", name: "trainingPlan", static: false, private: false, access: { has: obj => "trainingPlan" in obj, get: obj => obj.trainingPlan, set: (obj, value) => { obj.trainingPlan = value; } }, metadata: _metadata }, _trainingPlan_initializers, _trainingPlan_extraInitializers);
        __esDecorate(null, null, _activity_decorators, { kind: "field", name: "activity", static: false, private: false, access: { has: obj => "activity" in obj, get: obj => obj.activity, set: (obj, value) => { obj.activity = value; } }, metadata: _metadata }, _activity_initializers, _activity_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Workout = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Workout = _classThis;
})();
exports.Workout = Workout;
