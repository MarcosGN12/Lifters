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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWorkoutDto = void 0;
const class_validator_1 = require("class-validator");
let CreateWorkoutDto = (() => {
    var _a;
    let _plannedAt_decorators;
    let _plannedAt_initializers = [];
    let _plannedAt_extraInitializers = [];
    let _trainingPlanId_decorators;
    let _trainingPlanId_initializers = [];
    let _trainingPlanId_extraInitializers = [];
    return _a = class CreateWorkoutDto {
            constructor() {
                this.plannedAt = __runInitializers(this, _plannedAt_initializers, void 0);
                this.trainingPlanId = (__runInitializers(this, _plannedAt_extraInitializers), __runInitializers(this, _trainingPlanId_initializers, void 0));
                __runInitializers(this, _trainingPlanId_extraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _plannedAt_decorators = [(0, class_validator_1.IsDate)(), (0, class_validator_1.IsNotEmpty)()];
            _trainingPlanId_decorators = [(0, class_validator_1.IsNumber)(), (0, class_validator_1.IsNotEmpty)()];
            __esDecorate(null, null, _plannedAt_decorators, { kind: "field", name: "plannedAt", static: false, private: false, access: { has: obj => "plannedAt" in obj, get: obj => obj.plannedAt, set: (obj, value) => { obj.plannedAt = value; } }, metadata: _metadata }, _plannedAt_initializers, _plannedAt_extraInitializers);
            __esDecorate(null, null, _trainingPlanId_decorators, { kind: "field", name: "trainingPlanId", static: false, private: false, access: { has: obj => "trainingPlanId" in obj, get: obj => obj.trainingPlanId, set: (obj, value) => { obj.trainingPlanId = value; } }, metadata: _metadata }, _trainingPlanId_initializers, _trainingPlanId_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
exports.CreateWorkoutDto = CreateWorkoutDto;
