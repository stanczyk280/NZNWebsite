import React from 'react'
import { layout } from '../style'
import BattleMetricsScript from './BattleMetricsScript'



const Discord = () => {
  return (
    <section id='discord' className={`${layout.section} justify-evenly`} >
      <iframe src="https://discord.com/widget?id=712349171016794114&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
      <BattleMetricsScript />
      <iframe src="https://cdn.battlemetrics.com/b/standardVertical/23897520.html?foreground=%23EEEEEE&linkColor=%231185ec&lines=%23333333&background=%23222222&chart=players%3A24H&chartColor=%23FF0700&maxPlayersHeight=300" style={{ border: 0 }} name="usqel"></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/VX9xpYFl1aM?si=VVqZOpSvrYmgp7DS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </section>
  )
}

export default Discord
