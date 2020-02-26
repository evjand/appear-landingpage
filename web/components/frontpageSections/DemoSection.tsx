import BlockContent from '@sanity/block-content-to-react'
import { FC, useContext, CSSProperties } from 'react'
import { ColorContext } from '../../context/color'
import useColor from '../../hooks/useColor'
import Container from '../Container'
import styles from './DemoSection.module.css'

interface DemoSectionProps {
  title: any
  subtitle: any
  beforeImage: any
  afterImage: any
}

const spanSerializers = {
  types: {
    block: (props: any) => {
      return <span>{props.children}</span>
    }
  }
}

const DemoSection: FC<DemoSectionProps> = ({ title, subtitle, beforeImage, afterImage }) => {
  const { primaryLight } = useContext(ColorContext)
  const circleColor = useColor(primaryLight)

  const cssVars = {
    ['--circle-color']: circleColor
  } as CSSProperties

  return (
    <Container>
      <div className={styles.demo} style={cssVars}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={styles.text}>
              <h1>
                <BlockContent blocks={title} serializers={spanSerializers} />
              </h1>
              <BlockContent blocks={subtitle} />
            </div>
            <div className={styles.before}>
              <div className={styles.beforeImage}>
                <img className={styles.demoImage} src={beforeImage.asset.url} alt="" />
                <img className={styles.stripedCircle} src="/AppearStripedCircle.svg" alt="" />
              </div>
              <img className={styles.arrow} src="/AppearArrow.svg" alt="" />
            </div>
          </div>
          <img src={afterImage.asset.url} alt="" />
        </div>
      </div>
    </Container>
  )
}

export default DemoSection
