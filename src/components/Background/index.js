import React, { useEffect, useState } from "react"
import { Motion, spring, presets } from "react-motion"

const Line = ({ x1, y1, x2, y2, color="#1E2759 "}) => 
    <Motion 
        defaultStyle={{x2: x1, y2: y1 }} style={{x2: spring(x2, presets.gentle), y2: spring(y2, presets.gentle) }}
    >
        {
            value => <line x1={x1} y1={y1} x2={value.x2} y2={value.y2} style={{stroke:color, strokeWidth:2}} />
        }
    </Motion>

const Node = ({ x, y, radius=15, fill="#1E2759"}) => 
    <Motion defaultStyle={{radius: 0 }} style={{radius: spring(radius, presets.gentle)}}>
        {
            value => <circle cx={x} cy={y} r={value.radius} fill={fill} />
        }
    </Motion>

const SmallNode = ({ ...props}) => <Node radius={5} {...props} />

const LineWithSmallNode = ({ x1, x2, y1, y2, ...props }) => 
    <>
        <Line x1={x1} x2={x2} y1={y1} y2={y2} />
        <SmallNode x={x2} y={y2} />
    </>

const Left = () => (
    <>        
        {/* Hub 1, x=100, y=600 */}
        <Node x={100} y={600}/>
        {/* Hub 2, x=38, y=245 */}
        <Node x={38} y={245} />

        <LineWithSmallNode x1={100} x2={30} y1={600} y2={450} />
        <Line x1={30} x2={38} y1={450} y2={245}/>
        <LineWithSmallNode x1={100} x2={75} y1={600} y2={380} />
        <LineWithSmallNode x1={75} x2={150} y1={380} y2={320} />
        <Line x1={150} x2={38} y1={320} y2={245} />
        <LineWithSmallNode x1={100} x2={25} y1={600} y2={750} />
        <LineWithSmallNode x1={25} x2={85} y1={750} y2={1000} />
        <LineWithSmallNode x1={100} x2={105} y1={600} y2={700} />
        <LineWithSmallNode x1={105} x2={80} y1={700} y2={750} />
        <LineWithSmallNode x1={38} x2={85} y1={245} y2={30} />
        <Line x1={38} x2={0} y1={245} y2={155} />
        <Line x1={100} x2={0} y1={600} y2={690} />
        <LineWithSmallNode x1={100} x2={1000} y1={600} y2={630} />
        <LineWithSmallNode x1={38} x2={80} y1={245} y2={235} />
        <Line x1={100} x2={1000} y1={600} y2={1800} />
        <Line x1={38} x2={400} y1={245} y2={0} />
    </>
)

const Right = ({windowWidth}) => (
    <>        
        {/* Hub 1, x=-100, y=320 */}
        <Node x={windowWidth-100} y={320}/>
        {/* Hub 2, x=-45, y=525 */}
        <Node x={windowWidth-45} y={725} />


        <LineWithSmallNode x1={windowWidth-100} x2={windowWidth-50} y1={320} y2={280} />
        <LineWithSmallNode x1={windowWidth-100} x2={windowWidth-180} y1={320} y2={180} />
        <Line x1={windowWidth-180} x2={windowWidth-110} y1={180} y2={0} />
        <LineWithSmallNode x1={windowWidth-100} x2={windowWidth-130} y1={320} y2={480} />
        <Line x1={windowWidth-130} x2={windowWidth-45} y1={480} y2={725} />
        <LineWithSmallNode x1={windowWidth-100} x2={windowWidth-70} y1={320} y2={380} />

        <LineWithSmallNode x1={windowWidth-45} x2={windowWidth-120} y1={725} y2={785} />
        <LineWithSmallNode x1={windowWidth-120} x2={windowWidth-500} y1={785} y2={1700} />
        <LineWithSmallNode x1={windowWidth-45} x2={windowWidth-30} y1={725} y2={805} />
        <LineWithSmallNode x1={windowWidth-30} x2={windowWidth-67} y1={805} y2={850} />
    </>
)

const Background = () => {
    const [width, setWidth] = useState(null)
    useEffect(() => {
        setWidth(window.innerWidth)
        window.addEventListener('resize', () => setWidth(window.innerWidth));
    }, [])
    return (
        <div style={{height: "100vh", width: "100vw", position:"fixed", zIndex: -1, overflow: "hidden"}}>
            <svg style={{position: "absolute", width: "100%", height: "100%"}}>
                { width ?
                    <>
                        <Left />
                        <Right windowWidth={width} />
                    </>
                    : <></>
                }
            </svg>
        </div>
    )
}

export default Background
