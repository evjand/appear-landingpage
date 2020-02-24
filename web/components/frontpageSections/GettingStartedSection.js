import SyntaxHighlighter from 'react-syntax-highlighter'
import { githubGist, atomOneDarkReasonable } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import useColor from '../../hooks/useColor'
import useDarkMode from 'use-dark-mode'

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

const line = `let vc = RealityFileViewController()
present(vc, animated: true, completion: nil)`

const GettingStartedSection = () => {
  const bgColor = useColor('#f9f9f9')
  const style = { ...codeStyle, background: bgColor }
  const { value: darkMode } = useDarkMode()
  const hlStyle = darkMode ? atomOneDarkReasonable : githubGist
  return (
    <section>
      <div className="container">
        <div className="text">
          <h1>Getting started</h1>
          <p>Integrate Appear into any new or existing app with just one small pod and a few lines of code!</p>
        </div>
        <div className="code">
          <label>In the Podfile</label>
          <SyntaxHighlighter customStyle={style} language="ruby" style={hlStyle}>
            pod 'Appear'
          </SyntaxHighlighter>
          <label>In AppDelegate.swift</label>
          <SyntaxHighlighter customStyle={style} language="swift" style={hlStyle}>
            AppearApp.configure()
          </SyntaxHighlighter>
          <label>In any ViewController</label>
          <SyntaxHighlighter customStyle={style} wrapLines language="swift" style={hlStyle}>
            {line}
          </SyntaxHighlighter>
        </div>
      </div>
      <style jsx>{`
        .text {
          text-align: center;
        }
        h1 {
          margin: 0;
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        p {
          font-size: 1.25rem;
          margin: 0;
          font-weight: 400;
          line-height: 2rem;
        }

        .container {
          max-width: 664px;
          padding: 6rem 2rem;
          margin: 0 auto;
        }

        .code {
          padding: 2rem 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        label {
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 0.25rem;
        }

        code {
          margin-bottom: 2rem;
          border: none;
          outline: none;
          background: #f9f9f9;
          padding: 1rem 2rem;
          border-radius: 4px;
          font-family: 'Fira Code', monospace;
          font-size: 1.25rem;
          font-weight: 500;
        }
      `}</style>
    </section>
  )
}

export default GettingStartedSection
