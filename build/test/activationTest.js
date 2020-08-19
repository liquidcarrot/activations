"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const random_js_1 = require("random-js");
const chai_1 = require("chai");
const src_1 = require("../src");
const random = new random_js_1.Random();
describe("Activation", () => {
  const deltaValue = Math.exp(-10);
  for (let i = 0; i < 100; i++) {
    const value = random.real(-100, 100);
    it("Identity value=" + value + "; derivative=false", () => {
      chai_1.expect(src_1.Identitiy(value, false)).closeTo(value, deltaValue);
    });
    it("Identity value=" + value + "; derivative=true", () => {
      chai_1.expect(src_1.Identitiy(value, true)).closeTo(1, deltaValue);
    });
    it("BinaryStep value=" + value + "; derivative=false", () => {
      chai_1
        .expect(src_1.BinaryStep(value, false))
        .closeTo(value >= 0 ? 1 : 0, deltaValue);
    });
    it("BinaryStep value=" + value + "; derivative=true", () => {
      chai_1.expect(src_1.BinaryStep(value, true)).closeTo(0, deltaValue);
    });
    it("Logistic value=" + value + "; derivative=false", () => {
      chai_1
        .expect(src_1.Logistic(value, false))
        .closeTo(1 / (1 + Math.exp(-value)), deltaValue);
    });
    it("Logistic value=" + value + "; derivative=true", () => {
      chai_1
        .expect(src_1.Logistic(value, true))
        .closeTo(
          (1 / (1 + Math.exp(-value))) * (1 - 1 / (1 + Math.exp(-value))),
          deltaValue
        );
    });
    it("TANH value=" + value + "; derivative=false", () => {
      chai_1
        .expect(src_1.TANH(value, false))
        .closeTo(Math.tanh(value), deltaValue);
    });
    it("TANH value=" + value + "; derivative=true", () => {
      chai_1
        .expect(src_1.TANH(value, true))
        .closeTo(1 - Math.tanh(value) * Math.tanh(value), deltaValue);
    });
    it("SQNL value=" + value + "; derivative=false", () => {
      let z = value;
      if (z > 2) {
        z = 1;
      } else if (z >= 0) {
        z = z - Math.pow(z / 2, 2);
      } else if (z >= -2) {
        z = z + Math.pow(z / 2, 2);
      } else {
        z = -1;
      }
      chai_1.expect(src_1.SQNL(value, false)).closeTo(z, deltaValue);
    });
    it("SQNL value=" + value + "; derivative=true", () => {
      let z = value;
      if (z > 2) {
        z = 0;
      } else if (z >= 0) {
        z = 1 - z / 2;
      } else if (z >= -2) {
        z = 1 + z / 2;
      } else {
        z = 0;
      }
      chai_1.expect(src_1.SQNL(value, true)).closeTo(z, deltaValue);
    });
    it("ArcTan value=" + value + "; derivative=false", () => {
      chai_1
        .expect(src_1.ArcTan(value, false))
        .closeTo(Math.atan(value), deltaValue);
    });
    it("ArcTan value=" + value + "; derivative=true", () => {
      chai_1
        .expect(src_1.ArcTan(value, true))
        .closeTo(1 / (value * value + 1), deltaValue);
    });
    it("ArSinH value=" + value + "; derivative=false", () => {
      chai_1
        .expect(src_1.ArSinH(value, false))
        .closeTo(Math.asinh(value), deltaValue);
    });
    it("ArSinH value=" + value + "; derivative=true", () => {
      chai_1
        .expect(src_1.ArSinH(value, true))
        .closeTo(1 / Math.sqrt(value * value + 1), deltaValue);
    });
    it("SoftSign value=" + value + "; derivative=false", () => {
      chai_1
        .expect(src_1.SoftSign(value, false))
        .closeTo(value / (1 + Math.abs(value)), deltaValue);
    });
    it("SoftSign value=" + value + "; derivative=true", () => {
      chai_1
        .expect(src_1.SoftSign(value, true))
        .closeTo(1 / Math.pow(1 + Math.abs(value), 2), deltaValue);
    });
    it("RELU value=" + value + "; derivative=false", () => {
      chai_1
        .expect(src_1.RELU(value, false))
        .closeTo(value <= 0 ? 0 : value, deltaValue);
    });
    it("RELU value=" + value + "; derivative=true", () => {
      chai_1
        .expect(src_1.RELU(value, true))
        .closeTo(value <= 0 ? 0 : 1, deltaValue);
    });
    it("LeakyRELU value=" + value + "; derivative=false", () => {
      chai_1
        .expect(src_1.LeakyRELU(value, false))
        .closeTo(value <= 0 ? 0.01 * value : value, deltaValue);
    });
    it("LeakyRELU value=" + value + "; derivative=true", () => {
      chai_1
        .expect(src_1.LeakyRELU(value, true))
        .closeTo(value <= 0 ? 0.01 : 1, deltaValue);
    });
    it("SoftPlus value=" + value + "; derivative=false", () => {
      chai_1
        .expect(src_1.SoftPlus(value, false))
        .closeTo(Math.log(1 + Math.exp(value)), deltaValue);
    });
    it("SoftPlus value=" + value + "; derivative=true", () => {
      chai_1
        .expect(src_1.SoftPlus(value, true))
        .closeTo(1 / (1 + Math.exp(-value)), deltaValue);
    });
    it("BentIdentity value=" + value + "; derivative=false", () => {
      chai_1
        .expect(src_1.BentIdentity(value, false))
        .closeTo((Math.sqrt(value * value + 1) - 1) / 2 + value, deltaValue);
    });
    it("BentIdentity value=" + value + "; derivative=true", () => {
      chai_1
        .expect(src_1.BentIdentity(value, true))
        .closeTo(value / (2 * Math.sqrt(value * value + 1)) + 1, deltaValue);
    });
    it("SiLU value=" + value + "; derivative=false", () => {
      chai_1
        .expect(src_1.SiLU(value, false))
        .closeTo(value / (1 + Math.exp(-value)), deltaValue);
    });
    it("SiLU value=" + value + "; derivative=true", () => {
      chai_1
        .expect(src_1.SiLU(value, true))
        .closeTo(
          (1 + Math.exp(-value) + value * Math.exp(-value)) /
            Math.pow(1 + Math.exp(-value), 2),
          deltaValue
        );
    });
    it("Sinusiod value=" + value + "; derivative=false", () => {
      chai_1
        .expect(src_1.Sinusiod(value, false))
        .closeTo(Math.sin(value), deltaValue);
    });
    it("Sinusiod value=" + value + "; derivative=true", () => {
      chai_1
        .expect(src_1.Sinusiod(value, true))
        .closeTo(Math.cos(value), deltaValue);
    });
    it("Sinc value=" + value + "; derivative=false", () => {
      chai_1
        .expect(src_1.Sinc(value, false))
        .closeTo(value === 0 ? 1 : Math.sin(value) / value, deltaValue);
    });
    it("Sinc value=" + value + "; derivative=true", () => {
      chai_1
        .expect(src_1.Sinc(value, true))
        .closeTo(
          value === 0
            ? 0
            : Math.cos(value) / value - Math.sin(value) / (value * value),
          deltaValue
        );
    });
    it("GAUSSIAN value=" + value + "; derivative=false", () => {
      chai_1
        .expect(src_1.GAUSSIAN(value, false))
        .closeTo(Math.exp(-value * value), deltaValue);
    });
    it("GAUSSIAN value=" + value + "; derivative=true", () => {
      chai_1
        .expect(src_1.GAUSSIAN(value, true))
        .to.be.closeTo(-2 * value * Math.exp(-value * value), deltaValue);
    });
  }
});
