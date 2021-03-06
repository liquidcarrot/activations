export type ActivationType = (x: number, derivative?: boolean) => number;

/**
 * The Identity activation function.
 * @see Identity function {@link https://en.wikipedia.org/wiki/Identity_function}
 * @param x the input value
 * @param derivative calculate the derivative
 */
const Identitiy: ActivationType = (
  x: number,
  derivative: boolean = false
): number => (derivative ? 1 : x);

/**
 * The Binary-Step activation function.
 * @see Binary Step function {@link https://en.wikipedia.org/wiki/Heaviside_step_function}
 * @param x the input value
 * @param derivative calculate the derivative
 */
const BinaryStep: ActivationType = (
  x: number,
  derivative: boolean = false
): number => {
  if (derivative) return 0;
  else return x < 0 ? 0 : 1;
};

/**
 * The Logistic activation function.
 * @see Logistic function {@link https://en.wikipedia.org/wiki/Logistic_function}
 * @param x the input value
 * @param derivative calculate the derivative
 */
const Logistic: ActivationType = (
  x: number,
  derivative: boolean = false
): number => {
  const negativeEX: number = Math.exp(-x);
  if (derivative) return (1 / (1 + negativeEX)) * (1 - 1 / (1 + negativeEX));
  else return 1 / (1 + negativeEX);
};

/**
 * The TANH activation function.
 * @see TanH function {@link https://en.wikipedia.org/wiki/Hyperbolic_function#Hyperbolic_tangent}
 * @param x the input value
 * @param derivative calculate the derivative
 */
const TANH: ActivationType = (
  x: number,
  derivative: boolean = false
): number => {
  if (derivative) return 1 - Math.tanh(x) ** 2;
  else return Math.tanh(x);
};

/**
 * The SQNL activation function.
 * @see SQNL function {@link https://ieeexplore.ieee.org/document/8489043}
 * @param x the input value
 * @param derivative calculate the derivative
 */
const SQNL: ActivationType = (
  x: number,
  derivative: boolean = false
): number => {
  if (derivative) {
    if (x > 2) return 0;
    else if (x >= 0) return 1 - x / 2;
    else if (x >= -2) return 1 + x / 2;
    else return 0;
  } else {
    if (x > 2) return 1;
    else if (x >= 0) return x - (x / 2) ** 2;
    else if (x >= -2) return x + (x / 2) ** 2;
    else return -1;
  }
};

/**
 * The ArcTAN activation function.
 * @see ArcTAN function {@link https://en.wikipedia.org/wiki/Inverse_trigonometric_functions}
 * @param x the input value
 * @param derivative calculate the derivative
 */
const ArcTan: ActivationType = (
  x: number,
  derivative: boolean = false
): number => {
  if (derivative) return 1 / (x ** 2 + 1);
  else return Math.atan(x);
};

/**
 * The ArSinH activation function.
 * @see ArSinH function {@link https://en.wikipedia.org/wiki/Inverse_hyperbolic_functions#Inverse_hyperbolic_sine}
 * @param x the input value
 * @param derivative calculate the derivative
 */
const ArSinH: ActivationType = (
  x: number,
  derivative: boolean = false
): number => {
  if (derivative) return 1 / (x ** 2 + 1) ** (1 / 2);
  else return Math.asinh(x);
};

/**
 * The SoftSign activation function.
 * @see SoftSign function {@link https://sefiks.com/2017/11/10/softsign-as-a-neural-networks-activation-function/}
 * @param x the input value
 * @param derivative calculate the derivative
 */
const SoftSign: ActivationType = (
  x: number,
  derivative: boolean = false
): number => {
  if (derivative) return 1 / (1 + Math.abs(x)) ** 2;
  else return x / (1 + Math.abs(x));
};

/**
 * The RELU activation function.
 * @see RELU function {@link https://en.wikipedia.org/wiki/Rectifier_(neural_networks)}
 * @param x the input value
 * @param derivative calculate the derivative
 */
const RELU: ActivationType = (
  x: number,
  derivative: boolean = false
): number => {
  if (derivative) return x > 0 ? 1 : 0;
  else return x > 0 ? x : 0;
};

/**
 * The Leaky RELU activation function.
 * @see Leaky RELU function {@link https://medium.com/@himanshuxd/activation-functions-sigmoid-relu-leaky-relu-and-softmax-basics-for-neural-networks-and-deep-8d9c70eed91e}
 * @param x the input value
 * @param derivative calculate the derivative
 */
const LeakyRELU: ActivationType = (
  x: number,
  derivative: boolean = false
): number => {
  if (derivative) return x > 0 ? 1 : 0.01;
  else return x > 0 ? x : 0.01 * x;
};

/**
 * The SoftPlus activation function.
 * @see SoftPlus function {@link https://sefiks.com/2017/08/11/softplus-as-a-neural-networks-activation-function/}
 * @param x the input value
 * @param derivative calculate the derivative
 */
const SoftPlus: ActivationType = (
  x: number,
  derivative: boolean = false
): number => {
  if (derivative) return 1 / (1 + Math.exp(-x));
  else return Math.log(1 + Math.exp(x));
};

/**
 * The Bent-Identity activation function.
 * @see Bent-Identity function {@link https://en.wikipedia.org/wiki/Activation_function}
 * @param x the input value
 * @param derivative calculate the derivative
 */
const BentIdentity: ActivationType = (
  x: number,
  derivative: boolean = false
): number => {
  if (derivative) return x / (2 * (x ** 2 + 1) ** (1 / 2)) + 1;
  else return ((x ** 2 + 1) ** (1 / 2) - 1) / 2 + x;
};

/**
 * The SiLU activation function.
 * @see SiLU function {@link https://arxiv.org/pdf/1702.03118.pdf}
 * @param x the input value
 * @param derivative calculate the derivative
 */
const SiLU: ActivationType = (
  x: number,
  derivative: boolean = false
): number => {
  const negativeEX: number = Math.exp(-x);
  if (derivative)
    return (1 + negativeEX + x * negativeEX) / (1 + negativeEX) ** 2;
  else return x / (1 + negativeEX);
};

/**
 * The Sinusoid activation function.
 * @see Sinusoid function {@link https://en.wikipedia.org/wiki/Sine_wave}
 * @param x the input value
 * @param derivative calculate the derivative
 */
const Sinusiod: ActivationType = (
  x: number,
  derivative: boolean = false
): number => {
  if (derivative) return Math.cos(x);
  else return Math.sin(x);
};

/**
 * The Sinc activation function.
 * @see Sinc function {@link https://en.wikipedia.org/wiki/Sinc_function}
 * @param x the input value
 * @param derivative calculate the derivative
 */
const Sinc: ActivationType = (
  x: number,
  derivative: boolean = false
): number => {
  if (derivative) {
    if (x === 0) return 0;
    else return Math.cos(x) / x - Math.sin(x) / x ** 2;
  } else {
    if (x === 0) return 1;
    else return Math.sin(x) / x;
  }
};

/**
 * The Gaussian activation function.
 * @see Gaussian function {@link https://en.wikipedia.org/wiki/Gaussian_function}
 * @param x the input value
 * @param derivative calculate the derivative
 */
const GAUSSIAN: ActivationType = (
  x: number,
  derivative: boolean = false
): number => {
  if (derivative) return -2 * x * Math.exp(-(x ** 2));
  else return 1 / Math.exp(x ** 2);
};

export {
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
};

export const ALL_ACTIVATIONS: ActivationType[] = [
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
