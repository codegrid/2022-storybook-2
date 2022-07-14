import React from 'react'
import { Button } from './Button'

// コンポーネントの概要
export default {
  title: 'UI/Button',
  component: Button,
}

// 5つのストーリー
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

export const all = () => (
  <>
    <Button>ボタン</Button>
    <br />
    <br />
    <Button fullWidth>ボタン</Button>
    <br />
    <br />

    <Button size="large">ボタン</Button>
    <br />
    <br />

    <Button variant="attention">ボタン</Button>
    <br />
    <br />

    <Button size="small" loading>
      ボタン
    </Button>
    <br />
    <br />

    <Button disabled>ボタン</Button>
  </>
)

// // Buttonストーリーのテンプレートを作成
// const Template = (args) => <Button {...args}>ボタン</Button>
//
// // 5つのストーリー
// export const Default = Template.bind({})
//
// export const FullWidth = Template.bind({})
// FullWidth.args = { ...FullWidth.args, fullWidth: true }
//
// export const Large = Template.bind({})
// Large.args = { ...Large.args, size: 'large' }
//
// export const Attention = Template.bind({})
// Attention.args = { ...Attention.args, variant: 'attention' }
//
// export const LoadingSmall = Template.bind({})
// LoadingSmall.args = { ...LoadingSmall.args, size: 'small', loading: true }
//
// export const Disabled = Template.bind({})
// Disabled.args = { ...Disabled.args, disabled: true }
