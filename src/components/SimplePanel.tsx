import React, { useState } from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from '../types';
import { css, cx } from '@emotion/css';
import { useStyles2 } from '@grafana/ui';

interface Props extends PanelProps<SimpleOptions> {}

const getStyles = () => {
  return {
    wrapper: css`
      font-family: Open Sans;
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
  };
};

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const styles = useStyles2(getStyles);

  const [isHovered, setIsHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Responsive sizing
  const size = Math.max(20, Math.min(width, height) * 0.55);
  const half = size / 2;
  const centerX = width / 2;
  const centerY = height / 2;

  const fill = options.accentColor || '#3b82f6';
  const strokeWidth = isHovered ? 6 : 2;
  const stroke = clicked ? '#ffffff' : 'transparent';

  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <svg className={styles.svg} width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} ${height}`}>
        <g
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setClicked((v) => !v)}
          style={{ cursor: 'pointer' }}
        >
          {options.shape === 'square' ? (
            <rect
              x={centerX - half}
              y={centerY - half}
              width={size}
              height={size}
              rx={12}
              fill={fill}
              opacity={isHovered ? 0.7 : 1}
              stroke={stroke}
              strokeWidth={strokeWidth}
            />
          ) : (
            <circle
              cx={centerX}
              cy={centerY}
              r={half}
              fill={fill}
              opacity={isHovered ? 0.7 : 1}
              stroke={stroke}
              strokeWidth={strokeWidth}
            />
          )}
        </g>
      </svg>

      <div className={styles.textBox}>
        {options.showSeriesCount && <div data-testid="simple-panel-series-counter">Number of series: {data.series.length}</div>}

        <div style={{ marginTop: 8, fontSize: 12, opacity: 0.8 }}>Developed by N. Ceren Köse</div>

        {clicked && <div style={{ marginTop: 6, fontSize: 12 }}>Clicked!</div>}
      </div>
    </div>
  );
};
