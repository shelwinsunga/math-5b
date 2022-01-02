import { BlockMath, InlineMath } from 'react-katex';
// export const VecI = () => <InlineMath math={'\\vec{\\imath}'} />;
export const ProductRule1 = () => <InlineMath math={'\\ h(x) = f(x)g(x)'} />;
export const ProductRule2 = () => <InlineMath math={'\\ h  \\ \'(x) = f \\ \'(x)g(x) + f(x)g \\ \'(x)'} />;

export const ProblemA= () => <InlineMath math={'\\displaystyle \\ y = \\sqrt[3]{{{x^2}}}\\left( {2x - {x^2}} \\right)'} />;
export const SolutionA= () => <InlineMath math={'y\\ \' = \\frac{2}{3}{x^{ - \\frac{1}{3}}}\\left( {2x - {x^2}} \\right) + {x^{\\frac{2}{3}}}\\left( {2 - 2x} \\right)'} />;


export const ProblemB= () => <InlineMath math={'f\\left( x \\right) = \\left( {6{x^3} - x} \\right)\\left( {10 - 20x} \\right)'} />;
export const SolutionB= () => <InlineMath math={'f \\ \' (x) =   (18x^{2} - 1)(10-20x) + (6x^3 - x) (-20)'} />;


export const QuotientRule1 = () => <InlineMath math={'\\displaystyle \\frac{d}{dx} {\\left( {\\frac{f(x)}{g(x)}} \\right)} = \\frac{{f\\ \'(x)\\,g(x) - f(x)\\,g\\ \'(x)}}{{{g(x)^2}}}'} />;


export const ProblemC= () => <InlineMath math={'\\displaystyle W\\left( z \\right) = \\frac{{3z + 9}}{{2 - z}}'} />;
export const SolutionC= () => <InlineMath math={'\\displaystyle \W\'\\left( z \\right) = \\frac{{3\\left( {2 - z} \\right) - \\left( {3z + 9} \\right)\\left( { - 1} \\right)}}{{{{\\left( {2 - z} \\right)}^2}}}'} />;


export const ProblemD= () => <InlineMath math={'\\displaystyle h\\left( x \\right) = \\frac{{4\\sqrt x }}{{{x^2} - 2}}'} />;
export const SolutionD= () => <InlineMath math={'\\displaystyle h\'\\left( x \\right) = \\frac{{4\\left( {{\\textstyle{1 \\over 2}}} \\right){x^{ - \\frac{1}{2}}}\\left( {{x^2} - 2} \\right) - 4{x^{\\frac{1}{2}}}\\left( {2x} \\right)}}{{{{\\left( {{x^2} - 2} \\right)}^2}}}'} />;