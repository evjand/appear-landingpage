import Container from '../Container'
import { useContext, FC, CSSProperties } from 'react'
import { ColorContext } from '../../context/color'
import useColor from '../../hooks/useColor'
import BlockContent from '@sanity/block-content-to-react'
import styles from './FeaturesSection.module.css'

interface FeaturesSectionProps {
  title: any
  subtitle: any
  features: Array<any>
}

const FeaturesSection: FC<FeaturesSectionProps> = ({ title, subtitle, features }) => {
  const { primaryLight } = useContext(ColorContext)
  const featureColor = useColor(primaryLight)

  const cssVars = {
    ['--feature-color']: featureColor
  } as CSSProperties

  return (
    <section style={cssVars}>
      <Container>
        <div className={styles.titles}>
          <h1>
            <BlockContent
              blocks={title}
              serializers={{ types: { block: (props: any) => <span>{props.children}</span> } }}
            />
          </h1>
          <BlockContent blocks={subtitle} />
        </div>
      </Container>
      <div className={styles.features}>
        {features.map(feature => (
          <div className={styles.feature}>
            <Container>
              <div className={styles.grid}>
                <div className={styles.image}>
                  <img src={feature.image.asset.url} alt="" />
                </div>
                <div className={styles.text}>
                  <h3>{feature.title}</h3>
                  <BlockContent blocks={feature.description} />
                </div>
              </div>
            </Container>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection
