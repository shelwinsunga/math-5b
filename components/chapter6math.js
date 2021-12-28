import { BlockMath, InlineMath } from 'react-katex';

export const VecI = () => <InlineMath math={'\\vec{\\imath}'} />;
export const VecJ = () => <InlineMath math={'\\vec{\\jmath}'} />;
export const LaTeX = () => <InlineMath math={'\\ f   \\ \'(x) = nx^{n-1}'} />;
export const XToTheN = () => <InlineMath math={'f(x) = x^{n}'} />;
export const PowerRule = () => <InlineMath math={'\\ f   \\ \'(x) = nx^{n-1}'} />;


//5a derivative review power rule
export const ProblemA = () => <InlineMath math={'\\ f(x) = 15x^{100} - 3x^{12} + 5x - 46'} />;
export const SolutionA = () => <InlineMath math={'\\ f\ \\ \'\\left( x \\right)   = 1500{x^{99}} - 36{x^{11}} + 5'} />;

export const ProblemB = () => <InlineMath math={'g\\left( t \\right) = 2{t^{6}} + 7{t^{ - 6}}'} />;
export const SolutionB = () => <InlineMath math={'\\ f\ \\ \'\\left( x \\right)   = 1500{x^{99}} - 36{x^{11}} + 5'} />;

export const ProblemC = () => <InlineMath math={'\\displaystyle y = 8{z^3} - \\frac{1}{{3{z^5}}} + z - 23'} />;
export const ProblemD = () => <InlineMath math={'\\displaystyle T\\left( x \\right) = \\sqrt x  + 9\\sqrt[3]{{{x^7}}} - \\frac{2}{{\\sqrt[5]{{{x^2}}}}} '} />;
export const ProblemE = () => <InlineMath math={'\\ h\\left( x \\right) = {x^\\pi } - {x^{\\sqrt 2 }}'} />;








