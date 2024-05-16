import { Block } from '@/components/blocks/block'
import { ExternalLink } from '@/components/external-link'
import { querySvg } from '@/service'

export const Weather = async () => {
  const svgPath = await querySvg()
  return (
    <Block
      data-type='about'
      className='group flex items-center justify-center bg-gradient-to-b from-surface-1 to-white dark:to-white/5'
    >
      {/* 根据状态中的 SVG 路径渲染不同的 SVG */}
      <svg
        className='size-24 xl:size-32'
        height='1em'
        aria-hidden='true'
        viewBox='0 0 16 16'
        version='1.1'
        width='1em'
      >
        <path fill='currentColor' d={svgPath} />
      </svg>
      <ExternalLink
        className='dark:bg-surface-3'
        title='Github'
        href={`https://github.com/liqingyou`}
      />
    </Block>
  )
}
