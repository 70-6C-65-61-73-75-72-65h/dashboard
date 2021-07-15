import React, { ReactElement, useEffect, useRef } from "react";

interface Props {
  readonly progress: number;
}

export default function ProgramProgress({ progress }: Props): ReactElement {
  const canvasRef = useRef();
  useEffect(() => {
    drawPB();
  }, [progress]);

  const drawPB = () => {
    let options = {
      percent: progress ?? 0,
      size: 52,
      lineWidth: 8, // 8px * 5 * 0.2
      rotate: 0,
    };

    const canvas = canvasRef.current as HTMLCanvasElement;
    let ctx = canvas.getContext("2d");
    canvas.width = canvas.height = options.size;

    ctx.translate(options.size / 2, options.size / 2); // change center
    ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

    //imd = ctx.getImageData(0, 0, 240, 240);
    let radius = (options.size - options.lineWidth) / 2;

    let drawCircle = function(color, lineWidth, percent) {
      percent = Math.min(Math.max(0, percent || 1), 1);
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
      ctx.strokeStyle = color;
      ctx.lineCap = "round"; // butt, round or square
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    };

    drawCircle("#ebebeb", options.lineWidth, 100 / 100);
    drawCircle("#5855D6", options.lineWidth, options.percent / 100);
  };

  return (
    <div className="info-primary progress-bar">
      <span>{`${progress}%`}</span>
      <canvas ref={canvasRef} />
    </div>
  );
}
