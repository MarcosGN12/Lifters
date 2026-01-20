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
exports.CreateActivityDto = void 0;
const class_validator_1 = require("class-validator");
let CreateActivityDto = (() => {
    var _a;
    let _sets_decorators;
    let _sets_initializers = [];
    let _sets_extraInitializers = [];
    let _reps_decorators;
    let _reps_initializers = [];
    let _reps_extraInitializers = [];
    let _weight_decorators;
    let _weight_initializers = [];
    let _weight_extraInitializers = [];
    let _workoutId_decorators;
    let _workoutId_initializers = [];
    let _workoutId_extraInitializers = [];
    let _exerciseId_decorators;
    let _exerciseId_initializers = [];
    let _exerciseId_extraInitializers = [];
    return _a = class CreateActivityDto {
            constructor() {
                this.sets = __runInitializers(this, _sets_initializers, void 0);
                this.reps = (__runInitializers(this, _sets_extraInitializers), __runInitializers(this, _reps_initializers, void 0));
                this.weight = (__runInitializers(this, _reps_extraInitializers), __runInitializers(this, _weight_initializers, void 0));
                this.results = __runInitializers(this, _weight_extraInitializers);
                this.workoutId = __runInitializers(this, _workoutId_initializers, void 0);
                this.exerciseId = (__runInitializers(this, _workoutId_extraInitializers), __runInitializers(this, _exerciseId_initializers, void 0));
                __runInitializers(this, _exerciseId_extraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _sets_decorators = [(0, class_validator_1.IsNumber)(), (0, class_validator_1.IsNotEmpty)()];
            _reps_decorators = [(0, class_validator_1.IsNumber)(), (0, class_validator_1.IsNotEmpty)()];
            _weight_decorators = [(0, class_validator_1.IsNumber)()];
            _workoutId_decorators = [(0, class_validator_1.IsNumber)(), (0, class_validator_1.IsNotEmpty)()];
            _exerciseId_decorators = [(0, class_validator_1.IsNumber)(), (0, class_validator_1.IsNotEmpty)()];
            __esDecorate(null, null, _sets_decorators, { kind: "field", name: "sets", static: false, private: false, access: { has: obj => "sets" in obj, get: obj => obj.sets, set: (obj, value) => { obj.sets = value; } }, metadata: _metadata }, _sets_initializers, _sets_extraInitializers);
            __esDecorate(null, null, _reps_decorators, { kind: "field", name: "reps", static: false, private: false, access: { has: obj => "reps" in obj, get: obj => obj.reps, set: (obj, value) => { obj.reps = value; } }, metadata: _metadata }, _reps_initializers, _reps_extraInitializers);
            __esDecorate(null, null, _weight_decorators, { kind: "field", name: "weight", static: false, private: false, access: { has: obj => "weight" in obj, get: obj => obj.weight, set: (obj, value) => { obj.weight = value; } }, metadata: _metadata }, _weight_initializers, _weight_extraInitializers);
            __esDecorate(null, null, _workoutId_decorators, { kind: "field", name: "workoutId", static: false, private: false, access: { has: obj => "workoutId" in obj, get: obj => obj.workoutId, set: (obj, value) => { obj.workoutId = value; } }, metadata: _metadata }, _workoutId_initializers, _workoutId_extraInitializers);
            __esDecorate(null, null, _exerciseId_decorators, { kind: "field", name: "exerciseId", static: false, private: false, access: { has: obj => "exerciseId" in obj, get: obj => obj.exerciseId, set: (obj, value) => { obj.exerciseId = value; } }, metadata: _metadata }, _exerciseId_initializers, _exerciseId_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
exports.CreateActivityDto = CreateActivityDto;
