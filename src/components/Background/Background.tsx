import { useEffect, useState } from 'react';

interface LineProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color?: string;
}

function Line({ x1, y1, x2, y2, color = "#1E2759" }: LineProps) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="2" />;
}

interface NodeProps {
  x: number;
  y: number;
  radius?: number;
  fill?: string;
}

function Node({ x, y, radius = 15, fill = "#1E2759" }: NodeProps) {
  return <circle cx={x} cy={y} r={radius} fill={fill} />;
}

function SmallNode(props: NodeProps) {
  return <Node radius={5} {...props} />;
}

function LineWithSmallNode({ x1, x2, y1, y2, ...props }: LineProps & { x1: number; x2: number; y1: number; y2: number }) {
  return (
    <>
      <Line x1={x1} x2={x2} y1={y1} y2={y2} />
      <SmallNode x={x2} y={y2} />
    </>
  );
}

function Left() {
  return (
    <>
      <Node x={100} y={600} />
      <Node x={38} y={245} />
      <LineWithSmallNode x1={100} x2={30} y1={600} y2={450} />
      <Line x1={30} x2={38} y1={450} y2={245} />
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
  );
}

interface RightProps {
  windowWidth: number;
}

function Right({ windowWidth }: RightProps) {
  return (
    <>
      <Node x={windowWidth - 100} y={320} />
      <Node x={windowWidth - 45} y={725} />
      <LineWithSmallNode
        x1={windowWidth - 100}
        x2={windowWidth - 50}
        y1={320}
        y2={280}
      />
      <LineWithSmallNode
        x1={windowWidth - 100}
        x2={windowWidth - 180}
        y1={320}
        y2={180}
      />
      <Line x1={windowWidth - 180} x2={windowWidth - 110} y1={180} y2={0} />
      <LineWithSmallNode
        x1={windowWidth - 100}
        x2={windowWidth - 130}
        y1={320}
        y2={480}
      />
      <Line x1={windowWidth - 130} x2={windowWidth - 45} y1={480} y2={725} />
      <LineWithSmallNode
        x1={windowWidth - 100}
        x2={windowWidth - 70}
        y1={320}
        y2={380}
      />
      <LineWithSmallNode
        x1={windowWidth - 45}
        x2={windowWidth - 120}
        y1={725}
        y2={785}
      />
      <LineWithSmallNode
        x1={windowWidth - 120}
        x2={windowWidth - 500}
        y1={785}
        y2={1700}
      />
      <LineWithSmallNode
        x1={windowWidth - 45}
        x2={windowWidth - 30}
        y1={725}
        y2={805}
      />
      <LineWithSmallNode
        x1={windowWidth - 30}
        x2={windowWidth - 67}
        y1={805}
        y2={850}
      />
    </>
  );
}

export default function Background() {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        zIndex: -1,
        overflow: 'hidden',
      }}
    >
      <svg style={{ position: 'absolute', width: '100%', height: '100%' }}>
        {width ? (
          <>
            <Left />
            <Right windowWidth={width} />
          </>
        ) : null}
      </svg>
    </div>
  );
}

