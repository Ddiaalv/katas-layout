---
to: <%= path %>/<%= name %>/<%= name %>.tsx
---
import { FC } from 'react'
import  styles from './<%= name %>.module.css'

export const <%= name %>: FC = () => <div className={styles.styled}> Hello from <%= name %>! </div>

<%= name %>.displayName = '<%= name %>'
