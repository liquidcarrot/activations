export declare const Activation: {
    /**
     * The Identity activation function.
     * @see Identity function {@link https://en.wikipedia.org/wiki/Identity_function}
     * @param x the input value
     * @param derivative calculate the derivative
     */
    Identitiy: (x: number, derivative?: boolean) => number;
    /**
     * The Binary-Step activation function.
     * @see Binary Step function {@link https://en.wikipedia.org/wiki/Heaviside_step_function}
     * @param x the input value
     * @param derivative calculate the derivative
     */
    BinaryStep: (x: number, derivative?: boolean) => number;
    /**
     * The Logistic activation function.
     * @see Logisitic function {@link https://en.wikipedia.org/wiki/Logistic_function}
     * @param x the input value
     * @param derivative calculate the derivative
     */
    Logistic: (x: number, derivative?: boolean) => number;
    /**
     * The TANH activation function.
     * @see TanH function {@link https://en.wikipedia.org/wiki/Hyperbolic_function#Hyperbolic_tangent}
     * @param x the input value
     * @param derivative calculate the derivative
     */
    TANH: (x: number, derivative?: boolean) => number;
    /**
     * The SQNL activation function.
     * @see SQNL function {@link https://ieeexplore.ieee.org/document/8489043}
     * @param x the input value
     * @param derivative calculate the derivative
     */
    SQNL: (x: number, derivative?: boolean) => number;
    /**
     * The ArcTAN activation function.
     * @see ArcTAN function {@link https://en.wikipedia.org/wiki/Inverse_trigonometric_functions}
     * @param x the input value
     * @param derivative calculate the derivative
     */
    ArcTan: (x: number, derivative?: boolean) => number;
    /**
     * The ArSinH activation function.
     * @see ArSinH function {@link https://en.wikipedia.org/wiki/Inverse_hyperbolic_functions#Inverse_hyperbolic_sine}
     * @param x the input value
     * @param derivative calculate the derivative
     */
    ArSinH: (x: number, derivative?: boolean) => number;
    /**
     * The SoftSign activation function.
     * @see SoftSign function {@link https://sefiks.com/2017/11/10/softsign-as-a-neural-networks-activation-function/}
     * @param x the input value
     * @param derivative calculate the derivative
     */
    SoftSign: (x: number, derivative?: boolean) => number;
    /**
     * The RELU activation function.
     * @see RELU function {@link https://en.wikipedia.org/wiki/Rectifier_(neural_networks)}
     * @param x the input value
     * @param derivative calculate the derivative
     */
    RELU: (x: number, derivative?: boolean) => number;
    /**
     * The Leaky RELU activation function.
     * @see Leaky RELU function {@link https://medium.com/@himanshuxd/activation-functions-sigmoid-relu-leaky-relu-and-softmax-basics-for-neural-networks-and-deep-8d9c70eed91e}
     * @param x the input value
     * @param derivative calculate the derivative
     */
    LeakyRELU: (x: number, derivative?: boolean) => number;
    /**
     * The SoftPlus activation function.
     * @see SoftPlus function {@link https://sefiks.com/2017/08/11/softplus-as-a-neural-networks-activation-function/}
     * @param x the input value
     * @param derivative calculate the derivative
     */
    SoftPlus: (x: number, derivative?: boolean) => number;
    /**
     * The Bent-Identity activation function.
     * @see Bent-Identity function {@link https://en.wikipedia.org/wiki/Activation_function}
     * @param x the input value
     * @param derivative calculate the derivative
     */
    BentIdentity: (x: number, derivative?: boolean) => number;
    /**
     * The SiLU activation function.
     * @see SiLU function {@link https://arxiv.org/pdf/1702.03118.pdf}
     * @param x the input value
     * @param derivative calculate the derivative
     */
    SiLU: (x: number, derivative?: boolean) => number;
    /**
     * The Sinusoid activation function.
     * @see Sinusoid function {@link https://en.wikipedia.org/wiki/Sine_wave}
     * @param x the input value
     * @param derivative calculate the derivative
     */
    Sinusiod: (x: number, derivative?: boolean) => number;
    /**
     * The Sinc activation function.
     * @see Sinc function {@link https://en.wikipedia.org/wiki/Sinc_function}
     * @param x the input value
     * @param derivative calculate the derivative
     */
    Sinc: (x: number, derivative?: boolean) => number;
    /**
     * The Gaussian activation function.
     * @see Gaussian function {@link https://en.wikipedia.org/wiki/Gaussian_function}
     * @param x the input value
     * @param derivative calculate the derivative
     */
    GAUSSIAN: (x: number, derivative?: boolean) => number;
};
