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
Object.defineProperty(exports, "__esModule", { value: true });
const trackTrain_js_1 = require("./trackTrain.js");
const cheerio = require("cheerio");
const { serviceCancelled, departedStoppingStation, passUnknownDelay, passedPassStation, reachedDestination, arriving, journeyNotFoundTest, notYetDeparted, approachingAPass, partiallyCancelled, } = require("../../tests/testHTMLData");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    // const html = await departedStoppingStation();
    // const $ = cheerio.load(html);
    // const variablesObj = variables($);
    // for (const [key, value] of Object.entries(variablesObj)) {
    //   if (key != "locationList") {
    //     console.log(`${key}: ${$(value)}`);
    //   }
    // }
    (0, trackTrain_js_1.trackTrain)("G26117").then((emitter) => {
        emitter.on("journey", (data) => {
            console.log(data);
        });
        emitter.on("information", (data) => {
            console.log(data);
        });
    });
});
main();
