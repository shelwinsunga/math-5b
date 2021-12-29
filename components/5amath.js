import { BlockMath, InlineMath } from 'react-katex';
// export const VecI = () => <InlineMath math={'\\vec{\\imath}'} />;
export const ProductRule1 = () => <InlineMath math={'\\ h(x) = f(x)g(x)'} />;
export const ProductRule2 = () => <InlineMath math={'\\ h  \\ \'(x) = f \\ \'(x)g(x) + f(x)g \\ \'(x)'} />;

export const ProblemA= () => <InlineMath math={'\\displaystyle \\ y = \\sqrt[3]{{{x^2}}}\\left( {2x - {x^2}} \\right)'} />;
export const SolutionA= () => <InlineMath math={'y\\ \' = \\frac{2}{3}{x^{ - \\frac{1}{3}}}\\left( {2x - {x^2}} \\right) + {x^{\\frac{2}{3}}}\\left( {2 - 2x} \\right)'} />;


export const ProblemB= () => <InlineMath math={'f\\left( x \\right) = \\left( {6{x^3} - x} \\right)\\left( {10 - 20x} \\right)'} />;
export const SolutionB= () => <InlineMath math={'f \\ \' (x) =   (18x^{2} - 1)(10-20x) + (6x^3 - x) (-20)'} />;
