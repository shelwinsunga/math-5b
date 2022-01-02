import { BlockMath, InlineMath } from 'react-katex';

export const DerivativeSin = () => <BlockMath math={'\\displaystyle \\frac{d}{{dx}}\\left( {\\sin \\left( x \\right)} \\right) = \\cos \\left( x \\right)'} />;
export const DerivativeCos = () => <BlockMath math={'\\displaystyle \\frac{d}{{dx}}\\left( {\\cos \\left( x \\right)} \\right) = - \\sin \\left( x \\right)'} />;
export const DerivativeTan = () => <BlockMath math={'\\displaystyle \\frac{d}{{dx}}\\left( {\\tan \\left( x \\right)} \\right) = \\sec^2 \\left( x \\right)'} />;
export const DerivativeSec = () => <BlockMath math={'\\displaystyle \\frac{d}{{dx}}\\left( {\\sec \\left( x \\right)} \\right) = \\sec \\left( x \\right)\\tan \\left( x \\right)'} />;
export const DerivativeCot = () => <BlockMath math={'\\displaystyle \\frac{d}{{dx}}\\left( {\\cot \\left( x \\right)} \\right) = - \\csc^2 \\left( x \\right)'} />;
export const DerivativeCsc = () => <BlockMath math={'\\displaystyle \\frac{d}{{dx}}\\left( {\\csc   \\left( x \\right)} \\right) = - \\csc \\left( x \\right)\\cot \\left( x \\right)'} />;

export const ProblemA = () => <InlineMath math={'\\displaystyle g\\left( x \\right) = 3\\sec \\left( x \\right) - 10\\cot \\left( x \\right)'} />;
export const SolutionA= () => <InlineMath math={'\\displaystyle g\'\\left( x \\right) = 3\\sec \\left( x \\right)\\tan \\left( x \\right) + 10{\\csc ^2}\\left( x \\right)'} />;

export const ProblemB = () => <InlineMath math={'\\ h\\left( w \\right) = 3{w^{ - 4}} - {w^2}\\tan \\left( w \\right)'} />;
export const SolutionB= () => <InlineMath math={'\\displaystyle h\\ \'(x) = - 12{w^{ - 5}} - 2w\\tan \\left( w \\right) - {w^2}{\\sec ^2}\\left( w \\right)'} />;


export const ProblemC = () => <InlineMath math={'y = 5\\sin \\left( x \\right)\\cos \\left( x \\right) + 4\\csc \\left( x \\right)'} />;
export const SolutionC= () => <InlineMath math={'y\\ \' = 5{\\cos ^2}\\left( x \\right) - 5{\\sin ^2}\\left( x \\right) - 4\\csc \\left( x \\right)\\cot \\left( x \\right)'} />;







//\begin{align*}y' &  = 5{\cos ^2}\left( x \right) - 5{\sin ^2}\left( x \right) - 4\csc \left( x \right)\cot \left( x \right)