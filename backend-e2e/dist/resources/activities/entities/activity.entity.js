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
exports.Activity = void 0;
const exercise_entity_1 = require("../../exercises/entities/exercise.entity");
const workout_entity_1 = require("../../workouts/entities/workout.entity");
const typeorm_1 = require("typeorm");
let Activity = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
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
    let _results_decorators;
    let _results_initializers = [];
    let _results_extraInitializers = [];
    let _workout_decorators;
    let _workout_initializers = [];
    let _workout_extraInitializers = [];
    let _exercise_decorators;
    let _exercise_initializers = [];
    let _exercise_extraInitializers = [];
    var Activity = _classThis = class {
        constructor() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.sets = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _sets_initializers, void 0));
            this.reps = (__runInitializers(this, _sets_extraInitializers), __runInitializers(this, _reps_initializers, void 0));
            this.weight = (__runInitializers(this, _reps_extraInitializers), __runInitializers(this, _weight_initializers, void 0));
            this.workoutId = (__runInitializers(this, _weight_extraInitializers), __runInitializers(this, _workoutId_initializers, void 0));
            this.exerciseId = (__runInitializers(this, _workoutId_extraInitializers), __runInitializers(this, _exerciseId_initializers, void 0));
            this.results = (__runInitializers(this, _exerciseId_extraInitializers), __runInitializers(this, _results_initializers, void 0));
            this.workout = (__runInitializers(this, _results_extraInitializers), __runInitializers(this, _workout_initializers, void 0));
            this.exercise = (__runInitializers(this, _workout_extraInitializers), __runInitializers(this, _exercise_initializers, void 0));
            __runInitializers(this, _exercise_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Activity");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _sets_decorators = [(0, typeorm_1.Column)()];
        _reps_decorators = [(0, typeorm_1.Column)()];
        _weight_decorators = [(0, typeorm_1.Column)()];
        _workoutId_decorators = [(0, typeorm_1.Column)()];
        _exerciseId_decorators = [(0, typeorm_1.Column)()];
        _results_decorators = [(0, typeorm_1.Column)('int', { array: true })];
        _workout_decorators = [(0, typeorm_1.ManyToOne)(() => workout_entity_1.Workout, (workout) => workout.activity, {
                onDelete: 'CASCADE',
            })];
        _exercise_decorators = [(0, typeorm_1.ManyToMany)(() => exercise_entity_1.Exercise), (0, typeorm_1.JoinTable)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _sets_decorators, { kind: "field", name: "sets", static: false, private: false, access: { has: obj => "sets" in obj, get: obj => obj.sets, set: (obj, value) => { obj.sets = value; } }, metadata: _metadata }, _sets_initializers, _sets_extraInitializers);
        __esDecorate(null, null, _reps_decorators, { kind: "field", name: "reps", static: false, private: false, access: { has: obj => "reps" in obj, get: obj => obj.reps, set: (obj, value) => { obj.reps = value; } }, metadata: _metadata }, _reps_initializers, _reps_extraInitializers);
        __esDecorate(null, null, _weight_decorators, { kind: "field", name: "weight", static: false, private: false, access: { has: obj => "weight" in obj, get: obj => obj.weight, set: (obj, value) => { obj.weight = value; } }, metadata: _metadata }, _weight_initializers, _weight_extraInitializers);
        __esDecorate(null, null, _workoutId_decorators, { kind: "field", name: "workoutId", static: false, private: false, access: { has: obj => "workoutId" in obj, get: obj => obj.workoutId, set: (obj, value) => { obj.workoutId = value; } }, metadata: _metadata }, _workoutId_initializers, _workoutId_extraInitializers);
        __esDecorate(null, null, _exerciseId_decorators, { kind: "field", name: "exerciseId", static: false, private: false, access: { has: obj => "exerciseId" in obj, get: obj => obj.exerciseId, set: (obj, value) => { obj.exerciseId = value; } }, metadata: _metadata }, _exerciseId_initializers, _exerciseId_extraInitializers);
        __esDecorate(null, null, _results_decorators, { kind: "field", name: "results", static: false, private: false, access: { has: obj => "results" in obj, get: obj => obj.results, set: (obj, value) => { obj.results = value; } }, metadata: _metadata }, _results_initializers, _results_extraInitializers);
        __esDecorate(null, null, _workout_decorators, { kind: "field", name: "workout", static: false, private: false, access: { has: obj => "workout" in obj, get: obj => obj.workout, set: (obj, value) => { obj.workout = value; } }, metadata: _metadata }, _workout_initializers, _workout_extraInitializers);
        __esDecorate(null, null, _exercise_decorators, { kind: "field", name: "exercise", static: false, private: false, access: { has: obj => "exercise" in obj, get: obj => obj.exercise, set: (obj, value) => { obj.exercise = value; } }, metadata: _metadata }, _exercise_initializers, _exercise_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Activity = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Activity = _classThis;
})();
exports.Activity = Activity;
