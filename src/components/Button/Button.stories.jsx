import React from 'react'
import { Button } from './Button'

// コンポーネントの概要
export default {
  title: 'UI/Button',
  component: Button,
}

// 6つのストーリー
export const Default = () => <Button>ボタン</Button>
export const FullWidth = () => <Button fullWidth>ボタン</Button>
export const Large = () => <Button size="large">ボタン</Button>
export const Attention = () => <Button variant="attention">ボタン</Button>
export const LoadingSmall = () => (
  <Button size="small" loading>
    ボタン
  </Button>
)
export const Disabled = () => <Button disabled>ボタン</Button>
