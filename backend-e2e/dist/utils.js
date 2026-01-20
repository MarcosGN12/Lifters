"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_BASE_URL = void 0;
exports.getAuthToken = getAuthToken;
const supertest_1 = __importDefault(require("supertest"));
exports.API_BASE_URL = "http://localhost:3000";
// crear funcion para auto login
function getAuthToken() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(exports.API_BASE_URL).post("/auth/login").send({
            email: "marcosnuero11@gmail.com",
            password: "1234",
        });
        return res.body.accessToken;
    });
}
