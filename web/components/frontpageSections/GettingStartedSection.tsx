import BlockContent from '@sanity/block-content-to-react'
import { FC } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark, githubGist } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import useDarkMode from 'use-dark-mode'
import useColor from '../../hooks/useColor'
import styles from './GettingStartedSection.module.css'

const codeStyle = {
  marginBottom: '2rem',
  border: 'none',
  outline: 'none',
  padding: '1rem 2rem',
  borderRadius: '4px',
  fontFamily: "'Fira Code', monospace",
  fontSize: '1.25rem',
  fontWeight: '500'
}

interface GettingStartedSectionProps {
  title: any
  subtitle: any
  text: any
}

const GettingStartedSection: FC<GettingStartedSectionProps> = ({ title, subtitle, text }) => {
  const bgColor = useColor('#f9f9f9')
  const { value: darkMode } = useDarkMode()
  const hlStyle = darkMode ? atomOneDark : githubGist
  const style = { ...codeStyle, background: bgColor }
  const serializers = {
    hardBreak: false,
    types: {
      block: (props: any) => {
        const node = props.node
        if (node.children.length === 1 && node.children[0].marks.length === 0) {
          return BlockContent.defaultSerializers.types.block(props)
        }
        return props.children
      }
    },
    marks: {
      code: (props: any) => {
        return (
          <SyntaxHighlighter customStyle={style} language="swift" style={hlStyle}>
            {props.children.length > 1 ? props.children.join('') : props.children}
          </SyntaxHighlighter>
        )
      }
    }
  }
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>
            <BlockContent
              blocks={title}
              hardBreak={false}
              serializers={{ types: { block: (props: any) => <span>{props.children}</span> } }}
            />
          </h1>

          <BlockContent blocks={subtitle} />
        </div>
        <div className={styles.code}>
          <BlockContent blocks={text} serializers={serializers} />
        </div>
      </div>
    </section>
  )
}

export default GettingStartedSection
