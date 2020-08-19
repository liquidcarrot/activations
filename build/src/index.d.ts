export declare type ActivationType = (
  x: number,
  derivative?: boolean
) => number;
/**
 * The Identity activation function.
 * @see Identity function {@link https://en.wikipedia.org/wiki/Identity_function}
 * @param x the input value
 * @param derivative calculate the derivative
 */
declare const Identitiy: ActivationType;
/**
 * The Binary-Step activation function.
 * @see Binary Step function {@link https://en.wikipedia.org/wiki/Heaviside_step_function}
 * @param x the input value
 * @param derivative calculate the derivative
 */
declare const BinaryStep: ActivationType;
/**
 * The Logistic activation function.
 * @see Logistic function {@link https://en.wikipedia.org/wiki/Logistic_function}
 * @param x the input value
 * @param derivative calculate the derivative
 */
declare const Logistic: ActivationType;
/**
 * The TANH activation function.
 * @see TanH function {@link https://en.wikipedia.org/wiki/Hyperbolic_function#Hyperbolic_tangent}
 * @param x the input value
 * @param derivative calculate the derivative
 */
declare const TANH: ActivationType;
/**
 * The SQNL activation function.
 * @see SQNL function {@link https://ieeexplore.ieee.org/document/8489043}
 * @param x the input value
 * @param derivative calculate the derivative
 */
declare const SQNL: ActivationType;
/**
 * The ArcTAN activation function.
 * @see ArcTAN function {@link https://en.wikipedia.org/wiki/Inverse_trigonometric_functions}
 * @param x the input value
 * @param derivative calculate the derivative
 */
declare const ArcTan: ActivationType;
/**
 * The ArSinH activation function.
 * @see ArSinH function {@link https://en.wikipedia.org/wiki/Inverse_hyperbolic_functions#Inverse_hyperbolic_sine}
 * @param x the input value
 * @param derivative calculate the derivative
 */
declare const ArSinH: ActivationType;
/**
 * The SoftSign activation function.
 * @see SoftSign function {@link https://sefiks.com/2017/11/10/softsign-as-a-neural-networks-activation-function/}
 * @param x the input value
 * @param derivative calculate the derivative
 */
declare const SoftSign: ActivationType;
/**
 * The RELU activation function.
 * @see RELU function {@link https://en.wikipedia.org/wiki/Rectifier_(neural_networks)}
 * @param x the input value
 * @param derivative calculate the derivative
 */
declare const RELU: ActivationType;
/**
 * The Leaky RELU activation function.
 * @see Leaky RELU function {@link https://medium.com/@himanshuxd/activation-functions-sigmoid-relu-leaky-relu-and-softmax-basics-for-neural-networks-and-deep-8d9c70eed91e}
 * @param x the input value
 * @param derivative calculate the derivative
 */
declare const LeakyRELU: ActivationType;
/**
 * The SoftPlus activation function.
 * @see SoftPlus function {@link https://sefiks.com/2017/08/11/softplus-as-a-neural-networks-activation-function/}
 * @param x the input value
 * @param derivative calculate the derivative
 */
declare const SoftPlus: ActivationType;
/**
 * The Bent-Identity activation function.
 * @see Bent-Identity function {@link https://en.wikipedia.org/wiki/Activation_function}
 * @param x the input value
 * @param derivative calculate the derivative
 */
declare const BentIdentity: ActivationType;
/**
 * The SiLU activation function.
 * @see SiLU function {@link https://arxiv.org/pdf/1702.03118.pdf}
 * @param x the input value
 * @param derivative calculate the derivative
 */
declare const SiLU: ActivationType;
/**
 * The Sinusoid activation function.
 * @see Sinusoid function {@link https://en.wikipedia.org/wiki/Sine_wave}
 * @param x the input value
 * @param derivative calculate the derivative
 */
declare const Sinusiod: ActivationType;
/**
 * The Sinc activation function.
 * @see Sinc function {@link https://en.wikipedia.org/wiki/Sinc_function}
 * @param x the input value
 * @param derivative calculate the derivative
 */
declare const Sinc: ActivationType;
/**
 * The Gaussian activation function.
 * @see Gaussian function {@link https://en.wikipedia.org/wiki/Gaussian_function}
 * @param x the input value
 * @param derivative calculate the derivative
 */
declare const GAUSSIAN: ActivationType;
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
export declare const ALL_ACTIVATIONS: ActivationType[];
