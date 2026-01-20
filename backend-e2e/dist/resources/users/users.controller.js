"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../auth/auth.guard");
let UsersController = (() => {
    let _classDecorators = [(0, common_1.Controller)('users'), (0, swagger_1.ApiTags)('Users')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _create_decorators;
    let _findAll_decorators;
    let _findOne_decorators;
    let _update_decorators;
    let _remove_decorators;
    var UsersController = _classThis = class {
        constructor(usersService) {
            this.usersService = (__runInitializers(this, _instanceExtraInitializers), usersService);
        }
        // vaciar los parametros de los metodos y meterlos en objetos externos en una carpeta swagger
        create(createUserDto) {
            return this.usersService.create(createUserDto);
        }
        findAll() {
            return __awaiter(this, void 0, void 0, function* () {
                const users = yield this.usersService.findAll();
                users.forEach((user) => delete user.password);
                return users;
            });
        }
        findOne(id) {
            return __awaiter(this, void 0, void 0, function* () {
                const user = yield this.usersService.findUser({ id: +id });
                delete user.password;
                return user;
            });
        }
        update(id, updateUserDto) {
            return this.usersService.update(+id, updateUserDto);
        }
        remove(id) {
            return this.usersService.remove(+id);
        }
    };
    __setFunctionName(_classThis, "UsersController");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _create_decorators = [(0, common_1.Post)(), (0, auth_guard_1.Public)(), (0, swagger_1.ApiOperation)({
                description: 'Create an user',
            }), (0, swagger_1.ApiBody)({
                type: create_user_dto_1.CreateUserDto,
                description: 'Create an user using CreateUserDto',
                examples: {
                    example: {
                        value: {
                            email: 'marcos1@gmail.com',
                        },
                    },
                },
            }), (0, swagger_1.ApiResponse)({
                status: 201,
                description: 'Created user successfully',
            }), (0, swagger_1.ApiResponse)({
                status: 409,
                description: 'This email has been already registered',
            })];
        _findAll_decorators = [(0, common_1.Get)(), (0, swagger_1.ApiOperation)({
                description: 'Get all users information',
            }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: 'Found users',
            }), (0, swagger_1.ApiResponse)({
                status: 404,
                description: 'Not users found',
            })];
        _findOne_decorators = [(0, common_1.Get)(':id'), (0, swagger_1.ApiOperation)({
                description: 'Get one user information',
            }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: 'Found user',
            }), (0, swagger_1.ApiResponse)({
                status: 404,
                description: 'Failed to get user information',
            })];
        _update_decorators = [(0, common_1.Patch)(':id'), (0, swagger_1.ApiOperation)({
                description: 'Update an user',
            }), (0, swagger_1.ApiBody)({
                type: update_user_dto_1.UpdateUserDto,
                description: 'Update an user using UpdateUserDto',
                examples: {
                    example: {
                        value: {
                            email: 'marcos@gmail.com',
                        },
                    },
                },
            }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: 'Updated user successfully',
            }), (0, swagger_1.ApiResponse)({
                status: 404,
                description: 'User not found for update',
            }), (0, swagger_1.ApiResponse)({
                status: 409,
                description: 'Email already registered',
            })];
        _remove_decorators = [(0, common_1.Delete)(':id'), (0, swagger_1.ApiOperation)({
                description: 'Delete one user',
            }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: 'Deleted user',
            }), (0, swagger_1.ApiResponse)({
                status: 404,
                description: 'User not found to delete',
            })];
        __esDecorate(_classThis, null, _create_decorators, { kind: "method", name: "create", static: false, private: false, access: { has: obj => "create" in obj, get: obj => obj.create }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findAll_decorators, { kind: "method", name: "findAll", static: false, private: false, access: { has: obj => "findAll" in obj, get: obj => obj.findAll }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findOne_decorators, { kind: "method", name: "findOne", static: false, private: false, access: { has: obj => "findOne" in obj, get: obj => obj.findOne }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _update_decorators, { kind: "method", name: "update", static: false, private: false, access: { has: obj => "update" in obj, get: obj => obj.update }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _remove_decorators, { kind: "method", name: "remove", static: false, private: false, access: { has: obj => "remove" in obj, get: obj => obj.remove }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UsersController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UsersController = _classThis;
})();
exports.UsersController = UsersController;
