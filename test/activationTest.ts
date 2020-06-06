import {Random} from "random-js";
import {expect} from "chai";
import {
    ArcTan,
    ArSinH,
    BentIdentity,
    BinaryStep,
    GAUSSIAN,
    Identitiy,
    LeakyRELU,
    Logistic,
    RELU,
    SiLU,
    Sinc,
    Sinusiod,
    SoftPlus,
    SoftSign,
    SQNL,
    TANH
} from "../src";


const random: Random = new Random();

describe("Activation", () => {
    const deltaValue = Math.exp(-10);
    for (let i: number = 0; i < 100; i++) {
        const value = random.real(-100, 100);

        it("Identity value=" + value + "; derivative=false", () => {
            expect(Identitiy(value, false)).closeTo(value, deltaValue);
        });
        it("Identity value=" + value + "; derivative=true", () => {
            expect(Identitiy(value, true)).closeTo(1, deltaValue);
        });

        it("BinaryStep value=" + value + "; derivative=false", () => {
            expect(BinaryStep(value, false)).closeTo(value >= 0 ? 1 : 0, deltaValue);
        });
        it("BinaryStep value=" + value + "; derivative=true", () => {
            expect(BinaryStep(value, true)).closeTo(0, deltaValue);
        });

        it("Logistic value=" + value + "; derivative=false", () => {
            expect(Logistic(value, false)).closeTo(1 / (1 + Math.exp(-value)), deltaValue);
        });
        it("Logistic value=" + value + "; derivative=true", () => {
            expect(Logistic(value, true)).closeTo(1 / (1 + Math.exp(-value)) * (1 - 1 / (1 + Math.exp(-value))), deltaValue);
        });

        it("TANH value=" + value + "; derivative=false", () => {
            expect(TANH(value, false)).closeTo(Math.tanh(value), deltaValue);
        });
        it("TANH value=" + value + "; derivative=true", () => {
            expect(TANH(value, true)).closeTo(1 - Math.tanh(value) * Math.tanh(value), deltaValue);
        });

        it("SQNL value=" + value + "; derivative=false", () => {
            let z: number = value;
            if (z > 2) {
                z = 1;
            } else if (z >= 0) {
                z = z - (z / 2) ** 2;
            } else if (z >= -2) {
                z = z + (z / 2) ** 2;
            } else {
                z = -1;
            }
            expect(SQNL(value, false)).closeTo(z, deltaValue);
        });
        it("SQNL value=" + value + "; derivative=true", () => {
            let z: number = value;
            if (z > 2) {
                z = 0;
            } else if (z >= 0) {
                z = 1 - z / 2;
            } else if (z >= -2) {
                z = 1 + z / 2;
            } else {
                z = 0;
            }

            expect(SQNL(value, true)).closeTo(z, deltaValue);
        });

        it("ArcTan value=" + value + "; derivative=false", () => {
            expect(ArcTan(value, false)).closeTo(Math.atan(value), deltaValue);
        });
        it("ArcTan value=" + value + "; derivative=true", () => {
            expect(ArcTan(value, true)).closeTo(1 / (value * value + 1), deltaValue);
        });

        it("ArSinH value=" + value + "; derivative=false", () => {
            expect(ArSinH(value, false)).closeTo(Math.asinh(value), deltaValue);
        });
        it("ArSinH value=" + value + "; derivative=true", () => {
            expect(ArSinH(value, true)).closeTo(1 / Math.sqrt((value * value + 1)), deltaValue);
        });

        it("SoftSign value=" + value + "; derivative=false", () => {
            expect(SoftSign(value, false)).closeTo(value / (1 + Math.abs(value)), deltaValue);
        });
        it("SoftSign value=" + value + "; derivative=true", () => {
            expect(SoftSign(value, true)).closeTo(1 / Math.pow(1 + Math.abs(value), 2), deltaValue);
        });

        it("RELU value=" + value + "; derivative=false", () => {
            expect(RELU(value, false)).closeTo(value <= 0 ? 0 : value, deltaValue);
        });
        it("RELU value=" + value + "; derivative=true", () => {
            expect(RELU(value, true)).closeTo(value <= 0 ? 0 : 1, deltaValue);
        });

        it("LeakyRELU value=" + value + "; derivative=false", () => {
            expect(LeakyRELU(value, false)).closeTo(value <= 0 ? 0.01 * value : value, deltaValue);
        });
        it("LeakyRELU value=" + value + "; derivative=true", () => {
            expect(LeakyRELU(value, true)).closeTo(value <= 0 ? 0.01 : 1, deltaValue);
        });

        it("SoftPlus value=" + value + "; derivative=false", () => {
            expect(SoftPlus(value, false)).closeTo(Math.log(1 + Math.exp(value)), deltaValue);
        });
        it("SoftPlus value=" + value + "; derivative=true", () => {
            expect(SoftPlus(value, true)).closeTo(1 / (1 + Math.exp(-value)), deltaValue);
        });

        it("BentIdentity value=" + value + "; derivative=false", () => {
            expect(BentIdentity(value, false)).closeTo((Math.sqrt(value * value + 1) - 1) / 2 + value, deltaValue);
        });
        it("BentIdentity value=" + value + "; derivative=true", () => {
            expect(BentIdentity(value, true)).closeTo(value / (2 * Math.sqrt(value * value + 1)) + 1, deltaValue);
        });

        it("SiLU value=" + value + "; derivative=false", () => {
            expect(SiLU(value, false)).closeTo(value / (1 + Math.exp(-value)), deltaValue);
        });
        it("SiLU value=" + value + "; derivative=true", () => {
            expect(SiLU(value, true)).closeTo((1 + Math.exp(-value) + value * Math.exp(-value)) / Math.pow(1 + Math.exp(-value), 2), deltaValue);
        });

        it("Sinusiod value=" + value + "; derivative=false", () => {
            expect(Sinusiod(value, false)).closeTo(Math.sin(value), deltaValue);
        });
        it("Sinusiod value=" + value + "; derivative=true", () => {
            expect(Sinusiod(value, true)).closeTo(Math.cos(value), deltaValue);
        });

        it("Sinc value=" + value + "; derivative=false", () => {
            expect(Sinc(value, false)).closeTo(value == 0 ? 1 : Math.sin(value) / value, deltaValue);
        });
        it("Sinc value=" + value + "; derivative=true", () => {
            expect(Sinc(value, true)).closeTo(value == 0 ? 0 : Math.cos(value) / value - Math.sin(value) / (value * value), deltaValue);
        });
        it("GAUSSIAN value=" + value + "; derivative=false", () => {
            expect(GAUSSIAN(value, false)).closeTo(Math.exp(-value * value), deltaValue);
        });
        it("GAUSSIAN value=" + value + "; derivative=true", () => {
            expect(GAUSSIAN(value, true)).to.be.closeTo(-2 * value * Math.exp(-value * value), deltaValue);
        });
    }
});
