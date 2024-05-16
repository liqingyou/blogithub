import React, { useState, useEffect } from 'react';
import { Block } from '@/components/blocks/block';
import { ExternalLink } from '@/components/external-link';

export const Weather = () => {
    // 设置状态来存储 SVG 路径
    const [svgPath, setSvgPath] = useState('');

    // 使用 useEffect 发送网络请求
    useEffect(() => {
        // 发送网络请求
        fetch('http://43.128.58.74:9102/dy/video/svg')
            .then(response => response.json())
            .then(data => {
                // 根据请求结果设置 SVG 路径
                setSvgPath(data.svgPath);
            })
            .catch(error => {
                console.error('Error fetching SVG path:', error);
            });
    }, []); // 第二个参数 [] 确保只在组件加载时发送一次请求

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
    );
};
