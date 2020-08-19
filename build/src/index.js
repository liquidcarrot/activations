"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALL_ACTIVATIONS = exports.GAUSSIAN = exports.Sinc = exports.Sinusiod = exports.SiLU = exports.BentIdentity = exports.SoftPlus = exports.LeakyRELU = exports.RELU = exports.SoftSign = exports.ArSinH = exports.ArcTan = exports.SQNL = exports.TANH = exports.Logistic = exports.BinaryStep = exports.Identitiy = void 0;
/**
 * The Identity activation function.
 * @see Identity function {@link https://en.wikipedia.org/wiki/Identity_function}
 * @param x the input value
 * @param derivative calculate the derivative
 */
const Identitiy = (x, derivative = false) => (!derivative ? x : 1);
exports.Identitiy = Identitiy;
/**
 * The Binary-Step activation function.
 * @see Binary Step function {@link https://en.wikipedia.org/wiki/Heaviside_step_function}
 * @param x the input value
 * @param derivative calculate the derivative
 */
const BinaryStep = (x, derivative = false) => {
    if (!derivative) {
        return x < 0 ? 0 : 1;
    }
    else {
        return 0;
    }
};
exports.BinaryStep = BinaryStep;
/**
 * The Logistic activation function.
 * @see Logistic function {@link https://en.wikipedia.org/wiki/Logistic_function}
 * @param x the input value
 * @param derivative calculate the derivative
 */
const Logistic = (x, derivative = false) => {
    const negativeEX = Math.exp(-x);
    if (!derivative) {
        return 1 / (1 + negativeEX);
    }
    else {
        return (1 / (1 + negativeEX)) * (1 - 1 / (1 + negativeEX));
    }
};
exports.Logistic = Logistic;
/**
 * The TANH activation function.
 * @see TanH function {@link https://en.wikipedia.org/wiki/Hyperbolic_function#Hyperbolic_tangent}
 * @param x the input value
 * @param derivative calculate the derivative
 */
const TANH = (x, derivative = false) => {
    if (!derivative) {
        return Math.tanh(x);
    }
    else {
        return 1 - Math.pow(Math.tanh(x), 2);
    }
};
exports.TANH = TANH;
/**
 * The SQNL activation function.
 * @see SQNL function {@link https://ieeexplore.ieee.org/document/8489043}
 * @param x the input value
 * @param derivative calculate the derivative
 */
const SQNL = (x, derivative = false) => {
    if (!derivative) {
        if (x > 2) {
            return 1;
        }
        else if (x >= 0) {
            return x - Math.pow((x / 2), 2);
        }
        else if (x >= -2) {
            return x + Math.pow((x / 2), 2);
        }
        else {
            return -1;
        }
    }
    else {
        if (x > 2) {
            return 0;
        }
        else if (x >= 0) {
            return 1 - x / 2;
        }
        else if (x >= -2) {
            return 1 + x / 2;
        }
        else {
            return 0;
        }
    }
};
exports.SQNL = SQNL;
/**
 * The ArcTAN activation function.
 * @see ArcTAN function {@link https://en.wikipedia.org/wiki/Inverse_trigonometric_functions}
 * @param x the input value
 * @param derivative calculate the derivative
 */
const ArcTan = (x, derivative = false) => {
    if (!derivative) {
        return Math.atan(x);
    }
    else {
        return 1 / (Math.pow(x, 2) + 1);
    }
};
exports.ArcTan = ArcTan;
/**
 * The ArSinH activation function.
 * @see ArSinH function {@link https://en.wikipedia.org/wiki/Inverse_hyperbolic_functions#Inverse_hyperbolic_sine}
 * @param x the input value
 * @param derivative calculate the derivative
 */
const ArSinH = (x, derivative = false) => {
    if (!derivative) {
        return Math.asinh(x);
    }
    else {
        return 1 / Math.pow((Math.pow(x, 2) + 1), (1 / 2));
    }
};
exports.ArSinH = ArSinH;
/**
 * The SoftSign activation function.
 * @see SoftSign function {@link https://sefiks.com/2017/11/10/softsign-as-a-neural-networks-activation-function/}
 * @param x the input value
 * @param derivative calculate the derivative
 */
const SoftSign = (x, derivative = false) => {
    if (!derivative) {
        return x / (1 + Math.abs(x));
    }
    else {
        return 1 / Math.pow((1 + Math.abs(x)), 2);
    }
};
exports.SoftSign = SoftSign;
/**
 * The RELU activation function.
 * @see RELU function {@link https://en.wikipedia.org/wiki/Rectifier_(neural_networks)}
 * @param x the input value
 * @param derivative calculate the derivative
 */
const RELU = (x, derivative = false) => {
    if (!derivative) {
        return x > 0 ? x : 0;
    }
    else {
        return x > 0 ? 1 : 0;
    }
};
exports.RELU = RELU;
/**
 * The Leaky RELU activation function.
 * @see Leaky RELU function {@link https://medium.com/@himanshuxd/activation-functions-sigmoid-relu-leaky-relu-and-softmax-basics-for-neural-networks-and-deep-8d9c70eed91e}
 * @param x the input value
 * @param derivative calculate the derivative
 */
const LeakyRELU = (x, derivative = false) => {
    if (!derivative) {
        return x > 0 ? x : 0.01 * x;
    }
    else {
        return x > 0 ? 1 : 0.01;
    }
};
exports.LeakyRELU = LeakyRELU;
/**
 * The SoftPlus activation function.
 * @see SoftPlus function {@link https://sefiks.com/2017/08/11/softplus-as-a-neural-networks-activation-function/}
 * @param x the input value
 * @param derivative calculate the derivative
 */
const SoftPlus = (x, derivative = false) => {
    if (!derivative) {
        return Math.log(1 + Math.exp(x));
    }
    else {
        return 1 / (1 + Math.exp(-x));
    }
};
exports.SoftPlus = SoftPlus;
/**
 * The Bent-Identity activation function.
 * @see Bent-Identity function {@link https://en.wikipedia.org/wiki/Activation_function}
 * @param x the input value
 * @param derivative calculate the derivative
 */
const BentIdentity = (x, derivative = false) => {
    if (!derivative) {
        return (Math.pow((Math.pow(x, 2) + 1), (1 / 2)) - 1) / 2 + x;
    }
    else {
        return x / (2 * Math.pow((Math.pow(x, 2) + 1), (1 / 2))) + 1;
    }
};
exports.BentIdentity = BentIdentity;
/**
 * The SiLU activation function.
 * @see SiLU function {@link https://arxiv.org/pdf/1702.03118.pdf}
 * @param x the input value
 * @param derivative calculate the derivative
 */
const SiLU = (x, derivative = false) => {
    const negativeEX = Math.exp(-x);
    if (!derivative) {
        return x / (1 + negativeEX);
    }
    else {
        return (1 + negativeEX + x * negativeEX) / Math.pow((1 + negativeEX), 2);
    }
};
exports.SiLU = SiLU;
/**
 * The Sinusoid activation function.
 * @see Sinusoid function {@link https://en.wikipedia.org/wiki/Sine_wave}
 * @param x the input value
 * @param derivative calculate the derivative
 */
const Sinusiod = (x, derivative = false) => {
    if (!derivative) {
        return Math.sin(x);
    }
    else {
        return Math.cos(x);
    }
};
exports.Sinusiod = Sinusiod;
/**
 * The Sinc activation function.
 * @see Sinc function {@link https://en.wikipedia.org/wiki/Sinc_function}
 * @param x the input value
 * @param derivative calculate the derivative
 */
const Sinc = (x, derivative = false) => {
    if (!derivative) {
        return x === 0 ? 1 : Math.sin(x) / x;
    }
    else {
        return x === 0 ? 0 : Math.cos(x) / x - Math.sin(x) / Math.pow(x, 2);
    }
};
exports.Sinc = Sinc;
/**
 * The Gaussian activation function.
 * @see Gaussian function {@link https://en.wikipedia.org/wiki/Gaussian_function}
 * @param x the input value
 * @param derivative calculate the derivative
 */
const GAUSSIAN = (x, derivative = false) => {
    if (!derivative) {
        return 1 / Math.exp(Math.pow(x, 2));
    }
    else {
        return -2 * x * Math.exp(-(Math.pow(x, 2)));
    }
};
exports.GAUSSIAN = GAUSSIAN;
exports.ALL_ACTIVATIONS = [
    Identitiy,
    BinaryStep,
    Logistic,
    TANH,
    SQNL,
    ArcTan,
    ArSinH,
    SoftSign,
    RELU,
    LeakyRELU,
    SoftPlus,
    BentIdentity,
    SiLU,
    Sinusiod,
    Sinc,
    GAUSSIAN,
];
