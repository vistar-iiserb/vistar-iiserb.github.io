// components/LatexBlock.tsx
import { InlineMath, BlockMath } from 'react-katex'
import 'katex/dist/katex.min.css'

export default function LatexBlock({ value }: { value: { body: string } }) {
  return (
    <div className='py-4 dark:bg-gray-950 bg-gray-100 text-center rounded-md ' style={{ margin: '1em 0' }}>
      <BlockMath math={value.body} />
    </div>
  )
}
