"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activation = void 0;
exports.Activation = {
    /**
     * The Identity activation function.
     * @see Identity function {@link https://en.wikipedia.org/wiki/Identity_function}
     * @param x the input value
     * @param derivative calculate the derivative
     */
    Identitiy: (x, derivative = false) => !derivative ? x : 1,
    /**
     * The Binary-Step activation function.
     * @see Binary Step function {@link https://en.wikipedia.org/wiki/Heaviside_step_function}
     * @param x the input value
     * @param derivative calculate the derivative
     */
    BinaryStep: (x, derivative = false) => {
        if (!derivative) {
            return x < 0 ? 0 : 1;
        }
        else {
            return 0;
        }
    },
    /**
     * The Logistic activation function.
     * @see Logisitic function {@link https://en.wikipedia.org/wiki/Logistic_function}
     * @param x the input value
     * @param derivative calculate the derivative
     */
    Logistic: (x, derivative = false) => {
        const negativeEX = Math.exp(-x);
        if (!derivative) {
            return 1 / (1 + negativeEX);
        }
        else {
            return 1 / (1 + negativeEX) * (1 - 1 / (1 + negativeEX));
        }
    },
    /**
     * The TANH activation function.
     * @see TanH function {@link https://en.wikipedia.org/wiki/Hyperbolic_function#Hyperbolic_tangent}
     * @param x the input value
     * @param derivative calculate the derivative
     */
    TANH: (x, derivative = false) => {
        if (!derivative) {
            return Math.tanh(x);
        }
        else {
            return 1 - Math.pow(Math.tanh(x), 2);
        }
    },
    /**
     * The SQNL activation function.
     * @see SQNL function {@link https://ieeexplore.ieee.org/document/8489043}
     * @param x the input value
     * @param derivative calculate the derivative
     */
    SQNL: (x, derivative = false) => {
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
            if (x < 0 || x > 2) {
                return 0;
            }
            else if (x >= 0) {
                return 1 - x / 2;
            }
            else if (x >= -2) {
                return 1 + x / 2;
            }
        }
    },
    /**
     * The ArcTAN activation function.
     * @see ArcTAN function {@link https://en.wikipedia.org/wiki/Inverse_trigonometric_functions}
     * @param x the input value
     * @param derivative calculate the derivative
     */
    ArcTan: (x, derivative = false) => {
        if (!derivative) {
            return Math.atan(x);
        }
        else {
            return 1 / (Math.pow(x, 2) + 1);
        }
    },
    /**
     * The ArSinH activation function.
     * @see ArSinH function {@link https://en.wikipedia.org/wiki/Inverse_hyperbolic_functions#Inverse_hyperbolic_sine}
     * @param x the input value
     * @param derivative calculate the derivative
     */
    ArSinH: (x, derivative = false) => {
        if (!derivative) {
            return Math.asinh(x);
        }
        else {
            return 1 / Math.pow((Math.pow(x, 2) + 1), (1 / 2));
        }
    },
    /**
     * The SoftSign activation function.
     * @see SoftSign function {@link https://sefiks.com/2017/11/10/softsign-as-a-neural-networks-activation-function/}
     * @param x the input value
     * @param derivative calculate the derivative
     */
    SoftSign: (x, derivative = false) => {
        if (!derivative) {
            return x / (1 + Math.abs(x));
        }
        else {
            return 1 / Math.pow((1 + Math.abs(x)), 2);
        }
    },
    /**
     * The RELU activation function.
     * @see RELU function {@link https://en.wikipedia.org/wiki/Rectifier_(neural_networks)}
     * @param x the input value
     * @param derivative calculate the derivative
     */
    RELU: (x, derivative = false) => {
        if (!derivative) {
            return x > 0 ? x : 0;
        }
        else {
            return x > 0 ? 1 : 0;
        }
    },
    /**
     * The Leaky RELU activation function.
     * @see Leaky RELU function {@link https://medium.com/@himanshuxd/activation-functions-sigmoid-relu-leaky-relu-and-softmax-basics-for-neural-networks-and-deep-8d9c70eed91e}
     * @param x the input value
     * @param derivative calculate the derivative
     */
    LeakyRELU: (x, derivative = false) => {
        if (!derivative) {
            return x > 0 ? x : 0.01 * x;
        }
        else {
            return x > 0 ? 1 : 0.01;
        }
    },
    /**
     * The SoftPlus activation function.
     * @see SoftPlus function {@link https://sefiks.com/2017/08/11/softplus-as-a-neural-networks-activation-function/}
     * @param x the input value
     * @param derivative calculate the derivative
     */
    SoftPlus: (x, derivative = false) => {
        if (!derivative) {
            return Math.log(1 + Math.exp(x));
        }
        else {
            return 1 / (1 + Math.exp(-x));
        }
    },
    /**
     * The Bent-Identity activation function.
     * @see Bent-Identity function {@link https://en.wikipedia.org/wiki/Activation_function}
     * @param x the input value
     * @param derivative calculate the derivative
     */
    BentIdentity: (x, derivative = false) => {
        if (!derivative) {
            return (Math.pow((Math.pow(x, 2) + 1), (1 / 2)) - 1) / 2 + x;
        }
        else {
            return x / (2 * Math.pow((Math.pow(x, 2) + 1), (1 / 2))) + 1;
        }
    },
    /**
     * The SiLU activation function.
     * @see SiLU function {@link https://arxiv.org/pdf/1702.03118.pdf}
     * @param x the input value
     * @param derivative calculate the derivative
     */
    SiLU: (x, derivative = false) => {
        const negativeEX = Math.exp(-x);
        if (!derivative) {
            return x / (1 + negativeEX);
        }
        else {
            return (1 + negativeEX + x * negativeEX) / Math.pow((1 + negativeEX), 2);
        }
    },
    /**
     * The Sinusoid activation function.
     * @see Sinusoid function {@link https://en.wikipedia.org/wiki/Sine_wave}
     * @param x the input value
     * @param derivative calculate the derivative
     */
    Sinusiod: (x, derivative = false) => {
        if (!derivative) {
            return Math.sin(x);
        }
        else {
            return Math.cos(x);
        }
    },
    /**
     * The Sinc activation function.
     * @see Sinc function {@link https://en.wikipedia.org/wiki/Sinc_function}
     * @param x the input value
     * @param derivative calculate the derivative
     */
    Sinc: (x, derivative = false) => {
        if (!derivative) {
            return x == 0 ? 1 : Math.sin(x) / x;
        }
        else {
            return x == 0 ? 0 : Math.cos(x) / x - Math.sin(x) / Math.pow(x, 2);
        }
    },
    /**
     * The Gaussian activation function.
     * @see Gaussian function {@link https://en.wikipedia.org/wiki/Gaussian_function}
     * @param x the input value
     * @param derivative calculate the derivative
     */
    GAUSSIAN: (x, derivative = false) => {
        if (!derivative) {
            return 1 / Math.exp(Math.pow(x, 2));
        }
        else {
            return -2 * x * Math.exp(-(Math.pow(x, 2)));
        }
    },
};
